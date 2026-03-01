import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Circle, Flame, Plus, Trash2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import {
  getTodayDateStr,
  useCreateTask,
  useDeleteTask,
  useTasksByDate,
  useToggleTask,
} from "../hooks/useQueries";
import { Confetti } from "./Confetti";

function formatDisplayDate(dateStr: string): string {
  const date = new Date(`${dateStr}T00:00:00Z`);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function getEnergyLabel(pct: number): { label: string; emoji: string } {
  if (pct === 0) return { label: "Ready to get it on!", emoji: "💜" };
  if (pct < 25) return { label: "Boy With Luv energy", emoji: "🌸" };
  if (pct < 50) return { label: "Spring Day vibes", emoji: "🌼" };
  if (pct < 75) return { label: "Butter smooth progress", emoji: "✨" };
  if (pct < 100) return { label: "DNA activated — almost there!", emoji: "🔥" };
  return { label: "Dynamite energy today!", emoji: "💥" };
}

export function TodayView() {
  const todayStr = getTodayDateStr();
  const [newTask, setNewTask] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const wasAllDoneRef = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { data: tasks = [], isLoading } = useTasksByDate(todayStr);
  const createTask = useCreateTask();
  const toggleTask = useToggleTask();
  const deleteTask = useDeleteTask();

  const total = tasks.length;
  const completedCount = useMemo(
    () => tasks.filter((t) => t.completed).length,
    [tasks],
  );
  const progressPct =
    total > 0 ? Math.round((completedCount / total) * 100) : 0;
  const allDone = total > 0 && completedCount === total;
  const { label: energyLabel, emoji: energyEmoji } =
    getEnergyLabel(progressPct);

  useEffect(() => {
    if (allDone && !wasAllDoneRef.current && total > 0) {
      setShowConfetti(true);
      wasAllDoneRef.current = true;
      setTimeout(() => setShowConfetti(false), 3500);
    }
    if (!allDone) {
      wasAllDoneRef.current = false;
    }
  }, [allDone, total]);

  const handleAddTask = async () => {
    const trimmed = newTask.trim();
    if (!trimmed) return;
    setNewTask("");
    try {
      await createTask.mutateAsync({ title: trimmed, dateStr: todayStr });
      toast.success("Task added 💜");
    } catch {
      toast.error("Failed to add task");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") void handleAddTask();
  };

  const handleToggle = async (id: bigint) => {
    try {
      await toggleTask.mutateAsync(id);
    } catch {
      toast.error("Failed to update task");
    }
  };

  const handleDelete = async (id: bigint) => {
    try {
      await deleteTask.mutateAsync(id);
      toast.success("Task removed");
    } catch {
      toast.error("Failed to delete task");
    }
  };

  return (
    <div className="relative">
      <Confetti active={showConfetti} />

      {/* Date Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2
          className="text-3xl sm:text-4xl font-bold mb-2"
          style={{
            fontFamily: "Georgia, serif",
            background:
              "linear-gradient(135deg, oklch(0.88 0.08 295), oklch(0.82 0.15 295), oklch(0.78 0.18 75))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            letterSpacing: "-0.01em",
          }}
        >
          {formatDisplayDate(todayStr)}
        </h2>
        <p
          className="text-base"
          style={{
            color: "oklch(0.72 0.12 295)",
            fontStyle: "italic",
            letterSpacing: "0.02em",
          }}
        >
          It&apos;s in my DNA to stay on track 💜
        </p>
      </motion.div>

      {/* Progress Section — cinematic energy meter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="rounded-2xl p-5 mb-6"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.17 0.07 295 / 0.95), oklch(0.2 0.09 300 / 0.9))",
          backdropFilter: "blur(16px)",
          border: "1px solid oklch(0.38 0.12 295 / 0.5)",
          boxShadow:
            "0 0 0 1px oklch(0.28 0.08 295 / 0.3), 0 8px 32px oklch(0.05 0.02 295 / 0.6), inset 0 1px 0 oklch(0.55 0.15 295 / 0.15)",
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Flame
              className="animate-flicker"
              style={{
                color: allDone ? "oklch(0.78 0.18 75)" : "oklch(0.65 0.22 295)",
                filter: allDone
                  ? "drop-shadow(0 0 6px oklch(0.78 0.18 75 / 0.8))"
                  : "drop-shadow(0 0 6px oklch(0.55 0.22 295 / 0.7))",
              }}
              size={22}
            />
            <span
              className="font-semibold text-sm"
              style={{ color: "oklch(0.88 0.08 295)" }}
            >
              {energyEmoji} {energyLabel}
            </span>
          </div>
          <span
            className="text-sm font-bold px-3 py-1 rounded-full tabular-nums"
            style={{
              background: "oklch(0.55 0.22 295 / 0.18)",
              color: "oklch(0.88 0.14 295)",
              border: "1px solid oklch(0.55 0.22 295 / 0.35)",
              boxShadow: "inset 0 1px 0 oklch(0.7 0.2 295 / 0.1)",
            }}
          >
            {completedCount} / {total}
          </span>
        </div>

        {/* Thick glowing progress bar */}
        <div
          className="relative rounded-full overflow-hidden"
          style={{
            height: "20px",
            background: "oklch(0.18 0.06 295)",
            boxShadow: "inset 0 2px 4px oklch(0.05 0.02 295 / 0.6)",
          }}
        >
          {/* Track subtle inner shine */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "linear-gradient(180deg, oklch(1 0 0 / 0.05) 0%, transparent 60%)",
            }}
          />
          <motion.div
            className="h-full rounded-full relative overflow-hidden"
            style={{
              background: allDone
                ? "linear-gradient(90deg, oklch(0.5 0.2 295), oklch(0.65 0.22 295), oklch(0.78 0.18 75))"
                : "linear-gradient(90deg, oklch(0.4 0.2 295), oklch(0.58 0.22 295), oklch(0.68 0.2 295))",
              boxShadow: allDone
                ? "0 0 16px oklch(0.78 0.18 75 / 0.7), 0 0 32px oklch(0.65 0.22 295 / 0.4)"
                : "0 0 12px oklch(0.55 0.22 295 / 0.6), 0 0 24px oklch(0.45 0.2 295 / 0.3)",
            }}
            initial={{ width: 0 }}
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Shimmer sweep on the fill */}
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, oklch(1 0 0 / 0.25) 50%, transparent 100%)",
                backgroundSize: "200% 100%",
              }}
              animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </motion.div>
        </div>

        {allDone && total > 0 && (
          <motion.p
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.4 }}
            className="text-center mt-4 font-bold text-base"
            style={{
              color: "oklch(0.82 0.18 75)",
              textShadow:
                "0 0 16px oklch(0.78 0.18 75 / 0.6), 0 0 32px oklch(0.78 0.18 75 / 0.3)",
              letterSpacing: "0.03em",
            }}
          >
            🎉 Dynamite! All tasks done! 💜
          </motion.p>
        )}
      </motion.div>

      {/* Add Task Input */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex gap-3 mb-6"
      >
        <Input
          ref={inputRef}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a new task... 💜"
          className="flex-1 text-base focus-visible:ring-0"
          style={{
            background: "oklch(0.16 0.06 295 / 0.9)",
            border: "1px solid oklch(0.35 0.1 295 / 0.6)",
            color: "oklch(0.95 0.01 295)",
            borderRadius: "14px",
            padding: "13px 18px",
            boxShadow: "inset 0 2px 4px oklch(0.05 0.02 295 / 0.4)",
            outline: "none",
            transition: "border-color 0.2s, box-shadow 0.2s",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "oklch(0.55 0.22 295 / 0.8)";
            e.currentTarget.style.boxShadow =
              "inset 0 2px 4px oklch(0.05 0.02 295 / 0.4), 0 0 0 3px oklch(0.55 0.22 295 / 0.15)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "oklch(0.35 0.1 295 / 0.6)";
            e.currentTarget.style.boxShadow =
              "inset 0 2px 4px oklch(0.05 0.02 295 / 0.4)";
          }}
          disabled={createTask.isPending}
        />
        <Button
          onClick={() => void handleAddTask()}
          disabled={!newTask.trim() || createTask.isPending}
          className="px-5 font-bold transition-all duration-200 flex-shrink-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.42 0.2 295), oklch(0.58 0.22 295))",
            color: "white",
            borderRadius: "14px",
            border: "1px solid oklch(0.6 0.2 295 / 0.4)",
            boxShadow:
              "0 0 16px oklch(0.55 0.22 295 / 0.4), 0 4px 12px oklch(0.05 0.02 295 / 0.4), inset 0 1px 0 oklch(1 0 0 / 0.15)",
            minHeight: "48px",
          }}
        >
          <Plus size={18} className="mr-1" />
          Add
        </Button>
      </motion.div>

      {/* Task List */}
      {isLoading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-16 rounded-xl animate-shimmer"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      ) : tasks.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <img
            src="/assets/generated/doodle-panda-transparent.dim_200x200.png"
            alt="Panda doodle"
            className="w-28 h-28 mx-auto mb-4"
            style={{ opacity: 0.9 }}
          />
          <p
            className="text-xl font-semibold mb-2"
            style={{
              color: "oklch(0.72 0.12 295)",
              fontFamily: "Georgia, serif",
            }}
          >
            No tasks yet today!
          </p>
          <p className="text-sm" style={{ color: "oklch(0.5 0.06 295)" }}>
            Add your first task above 💜
          </p>
        </motion.div>
      ) : (
        <div className="space-y-2.5">
          <AnimatePresence>
            {/* Show incomplete tasks first, then completed */}
            {[...tasks]
              .sort((a, b) => {
                if (a.completed === b.completed) return 0;
                return a.completed ? 1 : -1;
              })
              .map((task, index) => (
                <motion.div
                  key={task.id.toString()}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20, height: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={
                    !task.completed
                      ? {
                          boxShadow:
                            "0 0 0 1px oklch(0.5 0.18 295 / 0.5), 0 0 20px oklch(0.45 0.18 295 / 0.25), 0 4px 16px oklch(0.05 0.02 295 / 0.5)",
                        }
                      : undefined
                  }
                  className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                  style={{
                    background: task.completed
                      ? "oklch(0.16 0.04 295 / 0.5)"
                      : "linear-gradient(135deg, oklch(0.19 0.08 295 / 0.95), oklch(0.17 0.06 295 / 0.9))",
                    border: task.completed
                      ? "1px solid oklch(0.26 0.05 295 / 0.4)"
                      : "1px solid oklch(0.38 0.12 295 / 0.55)",
                    backdropFilter: "blur(8px)",
                    boxShadow: task.completed
                      ? "none"
                      : "0 2px 12px oklch(0.05 0.02 295 / 0.4), inset 0 1px 0 oklch(0.5 0.15 295 / 0.08)",
                    // Left accent strip via box-shadow
                    borderLeft: task.completed
                      ? "3px solid oklch(0.55 0.1 75 / 0.35)"
                      : "3px solid oklch(0.55 0.22 295 / 0.7)",
                  }}
                >
                  {/* Checkbox — glows on hover */}
                  <button
                    type="button"
                    onClick={() => void handleToggle(task.id)}
                    className="flex-shrink-0 transition-all duration-200 hover:scale-110 focus:outline-none group/cb"
                    aria-label={
                      task.completed ? "Mark as incomplete" : "Mark as complete"
                    }
                    style={{
                      filter: task.completed
                        ? "drop-shadow(0 0 4px oklch(0.65 0.18 295 / 0.5))"
                        : "none",
                    }}
                  >
                    {task.completed ? (
                      <CheckCircle2
                        size={26}
                        style={{
                          color: "oklch(0.68 0.2 295)",
                          filter:
                            "drop-shadow(0 0 6px oklch(0.6 0.2 295 / 0.6))",
                        }}
                      />
                    ) : (
                      <Circle
                        size={26}
                        className="transition-all duration-200"
                        style={{ color: "oklch(0.45 0.14 295)" }}
                      />
                    )}
                  </button>

                  {/* Task Title */}
                  <span
                    className="flex-1 text-base transition-all duration-200"
                    style={{
                      fontWeight: task.completed ? 400 : 500,
                      color: task.completed
                        ? "oklch(0.48 0.05 295)"
                        : "oklch(0.94 0.02 295)",
                      textDecoration: task.completed ? "line-through" : "none",
                      textDecorationColor: "oklch(0.48 0.1 295 / 0.6)",
                    }}
                  >
                    {task.title}
                  </span>

                  {/* Delete Button */}
                  <button
                    type="button"
                    onClick={() => void handleDelete(task.id)}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0 p-1.5 rounded-lg"
                    aria-label="Delete task"
                    style={{ color: "oklch(0.62 0.18 15)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "oklch(0.65 0.2 15 / 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <Trash2 size={15} />
                  </button>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      )}

      {/* Song quote at bottom */}
      {tasks.length > 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs mt-8 italic"
          style={{
            color: "oklch(0.48 0.07 295)",
            letterSpacing: "0.04em",
          }}
        >
          &quot;You got me, I got you.&quot; — Boy With Luv 💜
        </motion.p>
      )}
    </div>
  );
}
