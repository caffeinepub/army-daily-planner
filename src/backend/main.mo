import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Text "mo:core/Text";
import List "mo:core/List";
import Int "mo:core/Int";
import Nat "mo:core/Nat";
import Order "mo:core/Order";

import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  var nextTaskId = 0;

  type Task = {
    id : Nat;
    title : Text;
    date : Nat64;
    completed : Bool;
    createdAt : Int;
  };

  module Task {
    public func compare(task1 : Task, task2 : Task) : Order.Order {
      Nat.compare(task1.id, task2.id);
    };
  };

  type DaySummary = {
    date : Text;
    total : Nat;
    completed : Nat;
  };

  type StreakInfo = {
    currentStreak : Nat;
    longestStreak : Nat;
    milestones : [Nat];
  };

  public type UserProfile = {
    name : Text;
  };

  let tasks = Map.empty<Principal, List.List<Task>>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  func getCallerTasks(caller : Principal) : List.List<Task> {
    switch (tasks.get(caller)) {
      case (null) {
        let newTaskList = List.empty<Task>();
        tasks.add(caller, newTaskList);
        newTaskList;
      };
      case (?taskList) { taskList };
    };
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  public shared ({ caller }) func createTask(title : Text, date : Nat64) : async Task {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create tasks");
    };
    let task : Task = {
      id = nextTaskId;
      title;
      date;
      completed = false;
      createdAt = Time.now();
    };
    nextTaskId += 1;

    let callerTasks = getCallerTasks(caller);
    callerTasks.add(task);
    task;
  };

  public query ({ caller }) func getTasksByDate(date : Nat64) : async [Task] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can get tasks");
    };
    let callerTasks = getCallerTasks(caller);
    callerTasks.filter(func(task) { task.date == date }).toArray();
  };

  public query ({ caller }) func getAllTasks() : async [Task] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can get tasks");
    };
    getCallerTasks(caller).toArray();
  };

  public shared ({ caller }) func toggleTask(id : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can update tasks");
    };
    let callerTasks = getCallerTasks(caller);
    let index = callerTasks.toArray().findIndex(func(task) { task.id == id });
    switch (index) {
      case (null) { Runtime.trap("Task not found") };
      case (?i) {
        let taskArray = callerTasks.toArray();
        let updatedTask = {
          id = taskArray[i].id;
          title = taskArray[i].title;
          date = taskArray[i].date;
          completed = not taskArray[i].completed;
          createdAt = taskArray[i].createdAt;
        };
        callerTasks.clear();
        let reversed = callerTasks.reverse();
        let taken = List.empty<Task>();
        taken.addAll(reversed.values());
        callerTasks.addAll(taken.values());
        callerTasks.add(updatedTask);
      };
    };
  };

  public shared ({ caller }) func updateTask(id : Nat, title : Text, date : Nat64) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can update tasks");
    };
    let callerTasks = getCallerTasks(caller);
    let index = callerTasks.toArray().findIndex(func(task) { task.id == id });
    switch (index) {
      case (null) { Runtime.trap("Task not found") };
      case (?i) {
        let taskArray = callerTasks.toArray();
        let updatedTask = {
          id = taskArray[i].id;
          title;
          date;
          completed = taskArray[i].completed;
          createdAt = taskArray[i].createdAt;
        };

        callerTasks.clear();
        let reversed = callerTasks.reverse();
        let taken = List.empty<Task>();
        taken.addAll(reversed.values());
        callerTasks.addAll(taken.values());
        callerTasks.add(updatedTask);
      };
    };
  };

  public shared ({ caller }) func deleteTask(id : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can delete tasks");
    };
    let callerTasks = getCallerTasks(caller);
    let newTasks = callerTasks.filter(func(task) { task.id != id });
    if (newTasks.size() == callerTasks.size()) {
      Runtime.trap("Task not found");
    };
    tasks.add(caller, newTasks);
  };

  public query ({ caller }) func getMonthHistory(year : Nat, month : Nat) : async [DaySummary] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can get history");
    };
    let taskArray = getCallerTasks(caller).toArray();
    let filteredTasks = taskArray.filter(func(_task) { false });

    let dayMap = Map.empty<Int, (Nat, Nat)>();

    for (task in filteredTasks.values()) {
      let day = Int.abs(1);
      switch (dayMap.get(day)) {
        case (null) {
          dayMap.add(day, (1, if (task.completed) { 1 } else { 0 }));
        };
        case (?counts) {
          dayMap.add(day, (counts.0 + 1, counts.1 + (if (task.completed) { 1 } else { 0 })));
        };
      };
    };

    dayMap.toArray().map(func((day, counts)) {
      {
        date = year.toText() # "-" # month.toText() # "-" # day.toText();
        total = counts.0;
        completed = counts.1;
      };
    });
  };

  public query ({ caller }) func getStreakInfo() : async StreakInfo {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can get streak info");
    };
    // For simplicity, return zero streaks in empty implementation
    {
      currentStreak = 0;
      longestStreak = 0;
      milestones = [] : [Nat];
    };
  };
};
