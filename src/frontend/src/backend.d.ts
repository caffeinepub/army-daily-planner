import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Task {
    id: bigint;
    title: string;
    date: bigint;
    createdAt: bigint;
    completed: boolean;
}
export interface DaySummary {
    total: bigint;
    date: string;
    completed: bigint;
}
export interface StreakInfo {
    longestStreak: bigint;
    currentStreak: bigint;
    milestones: Array<bigint>;
}
export interface UserProfile {
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createTask(title: string, date: bigint): Promise<Task>;
    deleteTask(id: bigint): Promise<void>;
    getAllTasks(): Promise<Array<Task>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getMonthHistory(year: bigint, month: bigint): Promise<Array<DaySummary>>;
    getStreakInfo(): Promise<StreakInfo>;
    getTasksByDate(date: bigint): Promise<Array<Task>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    toggleTask(id: bigint): Promise<void>;
    updateTask(id: bigint, title: string, date: bigint): Promise<void>;
}
