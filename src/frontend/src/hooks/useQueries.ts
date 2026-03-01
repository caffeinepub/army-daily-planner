import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { DaySummary, StreakInfo, Task } from "../backend.d";
import { useActor } from "./useActor";
import { useInternetIdentity } from "./useInternetIdentity";

// ---- Date encoding helper ----
export function encodeDateBigInt(dateStr: string): bigint {
  return BigInt(new Date(`${dateStr}T00:00:00Z`).getTime());
}

export function getTodayDateStr(): string {
  const today = new Date();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, "0");
  const d = String(today.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

// ---- Guest mode localStorage helpers ----
const STORAGE_KEY = "army-planner-tasks";
let guestIdCounter = 0;

// Serialized form uses numbers (not BigInt) for JSON compatibility
type SerializedTask = Omit<Task, "id" | "date" | "createdAt"> & {
  id: number;
  date: number;
  createdAt: number;
};

function deserializeTask(s: SerializedTask): Task {
  return {
    ...s,
    id: BigInt(s.id),
    date: BigInt(s.date),
    createdAt: BigInt(s.createdAt),
  };
}

function serializeTask(t: Task): SerializedTask {
  return {
    ...t,
    id: Number(t.id),
    date: Number(t.date),
    createdAt: Number(t.createdAt),
  };
}

function getGuestTasks(): Task[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as SerializedTask[];
    return parsed.map(deserializeTask);
  } catch {
    return [];
  }
}

function saveGuestTasks(tasks: Task[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks.map(serializeTask)));
}

function nextGuestId(): bigint {
  guestIdCounter++;
  return BigInt(Date.now() + guestIdCounter);
}

// ---- Hook to check if user is logged in ----
export function useIsLoggedIn() {
  const { identity } = useInternetIdentity();
  return !!identity && !identity.getPrincipal().isAnonymous();
}

// ---- All Tasks ----
export function useAllTasks() {
  const { actor, isFetching } = useActor();
  const isLoggedIn = useIsLoggedIn();

  return useQuery<Task[]>({
    queryKey: ["tasks", isLoggedIn ? "backend" : "guest"],
    queryFn: async () => {
      if (!isLoggedIn) {
        return getGuestTasks();
      }
      if (!actor) return [];
      return actor.getAllTasks();
    },
    enabled: !isFetching,
    staleTime: 30_000,
  });
}

// ---- Tasks by Date ----
export function useTasksByDate(dateStr: string) {
  const { actor, isFetching } = useActor();
  const isLoggedIn = useIsLoggedIn();
  const dateBigInt = encodeDateBigInt(dateStr);

  return useQuery<Task[]>({
    queryKey: ["tasks", "date", dateStr, isLoggedIn ? "backend" : "guest"],
    queryFn: async () => {
      if (!isLoggedIn) {
        const all = getGuestTasks();
        return all.filter((t) => t.date === dateBigInt);
      }
      if (!actor) return [];
      return actor.getTasksByDate(dateBigInt);
    },
    enabled: !isFetching,
    staleTime: 30_000,
  });
}

// ---- Month History ----
export function useMonthHistory(year: number, month: number) {
  const { actor, isFetching } = useActor();
  const isLoggedIn = useIsLoggedIn();

  return useQuery<DaySummary[]>({
    queryKey: ["history", year, month, isLoggedIn ? "backend" : "guest"],
    queryFn: async () => {
      if (!isLoggedIn) {
        const all = getGuestTasks();
        // Build day summaries from local tasks
        const summaryMap = new Map<
          string,
          { total: number; completed: number }
        >();
        for (const task of all) {
          const d = new Date(Number(task.date));
          if (d.getFullYear() === year && d.getMonth() + 1 === month) {
            const dateKey = `${year}-${String(month).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`;
            const existing = summaryMap.get(dateKey) || {
              total: 0,
              completed: 0,
            };
            existing.total++;
            if (task.completed) existing.completed++;
            summaryMap.set(dateKey, existing);
          }
        }
        return Array.from(summaryMap.entries()).map(([date, stats]) => ({
          date,
          total: BigInt(stats.total),
          completed: BigInt(stats.completed),
        }));
      }
      if (!actor) return [];
      return actor.getMonthHistory(BigInt(year), BigInt(month));
    },
    enabled: !isFetching,
    staleTime: 60_000,
  });
}

// ---- Streak Info ----
export function useStreakInfo() {
  const { actor, isFetching } = useActor();
  const isLoggedIn = useIsLoggedIn();

  return useQuery<StreakInfo>({
    queryKey: ["streaks", isLoggedIn ? "backend" : "guest"],
    queryFn: async () => {
      if (!isLoggedIn) {
        const all = getGuestTasks();
        return computeLocalStreaks(all);
      }
      if (!actor)
        return {
          currentStreak: BigInt(0),
          longestStreak: BigInt(0),
          milestones: [],
        };
      return actor.getStreakInfo();
    },
    enabled: !isFetching,
    staleTime: 60_000,
  });
}

function computeLocalStreaks(tasks: Task[]): StreakInfo {
  // Group by date
  const dayMap = new Map<string, { total: number; completed: number }>();
  for (const task of tasks) {
    const d = new Date(Number(task.date));
    const dateKey = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`;
    const existing = dayMap.get(dateKey) || { total: 0, completed: 0 };
    existing.total++;
    if (task.completed) existing.completed++;
    dayMap.set(dateKey, existing);
  }

  // Only days where all tasks are completed (and at least 1 task)
  const completedDays = new Set<string>();
  for (const [date, stats] of dayMap) {
    if (stats.total > 0 && stats.completed === stats.total) {
      completedDays.add(date);
    }
  }

  // Sort dates
  const sortedDates = Array.from(completedDays).sort();

  // Calculate current streak (from today backwards)
  const todayStr = getTodayDateStr();
  let currentStreak = 0;
  let checkDate = new Date(`${todayStr}T00:00:00Z`);
  while (true) {
    const dateStr = `${checkDate.getUTCFullYear()}-${String(checkDate.getUTCMonth() + 1).padStart(2, "0")}-${String(checkDate.getUTCDate()).padStart(2, "0")}`;
    if (completedDays.has(dateStr)) {
      currentStreak++;
      checkDate.setUTCDate(checkDate.getUTCDate() - 1);
    } else {
      break;
    }
  }

  // Calculate longest streak
  let longestStreak = 0;
  let streak = 0;
  for (let i = 0; i < sortedDates.length; i++) {
    if (i === 0) {
      streak = 1;
    } else {
      const prev = new Date(`${sortedDates[i - 1]}T00:00:00Z`);
      const curr = new Date(`${sortedDates[i]}T00:00:00Z`);
      const diff = (curr.getTime() - prev.getTime()) / 86400000;
      if (diff === 1) {
        streak++;
      } else {
        streak = 1;
      }
    }
    longestStreak = Math.max(longestStreak, streak);
  }

  const milestoneThresholds = [3, 7, 14, 30, 100];
  const milestones = milestoneThresholds
    .filter((m) => longestStreak >= m)
    .map((m) => BigInt(m));

  return {
    currentStreak: BigInt(currentStreak),
    longestStreak: BigInt(longestStreak),
    milestones,
  };
}

// ---- Mutations ----
export function useCreateTask() {
  const { actor } = useActor();
  const isLoggedIn = useIsLoggedIn();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      title,
      dateStr,
    }: { title: string; dateStr: string }) => {
      const dateBigInt = encodeDateBigInt(dateStr);
      if (!isLoggedIn) {
        const tasks = getGuestTasks();
        const newTask: Task = {
          id: nextGuestId(),
          title,
          date: dateBigInt,
          createdAt: BigInt(Date.now()),
          completed: false,
        };
        tasks.push(newTask);
        saveGuestTasks(tasks);
        return newTask;
      }
      if (!actor) throw new Error("No actor");
      return actor.createTask(title, dateBigInt);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["tasks"] });
      void queryClient.invalidateQueries({ queryKey: ["history"] });
      void queryClient.invalidateQueries({ queryKey: ["streaks"] });
    },
  });
}

export function useToggleTask() {
  const { actor } = useActor();
  const isLoggedIn = useIsLoggedIn();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!isLoggedIn) {
        const tasks = getGuestTasks();
        const idx = tasks.findIndex((t) => t.id === id);
        if (idx !== -1) {
          tasks[idx] = { ...tasks[idx], completed: !tasks[idx].completed };
          saveGuestTasks(tasks);
        }
        return;
      }
      if (!actor) throw new Error("No actor");
      return actor.toggleTask(id);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["tasks"] });
      void queryClient.invalidateQueries({ queryKey: ["history"] });
      void queryClient.invalidateQueries({ queryKey: ["streaks"] });
    },
  });
}

export function useDeleteTask() {
  const { actor } = useActor();
  const isLoggedIn = useIsLoggedIn();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!isLoggedIn) {
        const tasks = getGuestTasks();
        const filtered = tasks.filter((t) => t.id !== id);
        saveGuestTasks(filtered);
        return;
      }
      if (!actor) throw new Error("No actor");
      return actor.deleteTask(id);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["tasks"] });
      void queryClient.invalidateQueries({ queryKey: ["history"] });
      void queryClient.invalidateQueries({ queryKey: ["streaks"] });
    },
  });
}
