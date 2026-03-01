import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import type { DaySummary } from "../backend.d";
import { useMonthHistory, useTasksByDate } from "../hooks/useQueries";

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const SKELETON_CELLS = Array.from({ length: 35 }, (_, i) => `sk-${i}`);
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getDayStatus(
  summary: DaySummary | undefined,
): "none" | "partial" | "complete" {
  if (!summary || Number(summary.total) === 0) return "none";
  if (Number(summary.completed) === Number(summary.total)) return "complete";
  return "partial";
}

function getDayStyle(
  status: "none" | "partial" | "complete",
  isToday: boolean,
  isSelected: boolean,
) {
  const base = {
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.2s",
    border: "2px solid transparent",
  };

  if (isSelected) {
    return {
      ...base,
      background: "oklch(0.45 0.2 295)",
      border: "2px solid oklch(0.65 0.22 295)",
      boxShadow: "0 0 12px oklch(0.55 0.22 295 / 0.5)",
    };
  }
  if (isToday) {
    return {
      ...base,
      border: "2px solid oklch(0.78 0.18 75)",
      background: "oklch(0.22 0.06 295)",
    };
  }
  if (status === "complete") {
    return {
      ...base,
      background: "oklch(0.35 0.15 295 / 0.5)",
      border: "2px solid oklch(0.5 0.18 295 / 0.6)",
    };
  }
  if (status === "partial") {
    return {
      ...base,
      background: "oklch(0.28 0.1 310 / 0.4)",
      border: "2px solid oklch(0.45 0.12 310 / 0.5)",
    };
  }
  return {
    ...base,
    background: "oklch(0.18 0.04 295 / 0.5)",
  };
}

function formatDayDate(year: number, month: number, day: number): string {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function HistoryView() {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth() + 1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const { data: monthData = [], isLoading } = useMonthHistory(
    viewYear,
    viewMonth,
  );
  const { data: dayTasks = [] } = useTasksByDate(selectedDate || "2000-01-01");

  // Build summary map keyed by date string
  const summaryMap = useMemo(() => {
    const m = new Map<string, DaySummary>();
    for (const s of monthData) {
      m.set(s.date, s);
    }
    return m;
  }, [monthData]);

  // Calendar grid
  const firstDay = new Date(viewYear, viewMonth - 1, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(viewYear, viewMonth, 0).getDate();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  // Pad to complete last row
  while (cells.length % 7 !== 0) cells.push(null);

  // Monthly stats
  const totalDays = monthData.filter((d) => Number(d.total) > 0).length;
  const completeDays = monthData.filter(
    (d) => Number(d.total) > 0 && Number(d.completed) === Number(d.total),
  ).length;
  const completionPct =
    totalDays > 0 ? Math.round((completeDays / totalDays) * 100) : 0;

  const handlePrevMonth = () => {
    if (viewMonth === 1) {
      setViewMonth(12);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    const now = new Date();
    if (viewYear === now.getFullYear() && viewMonth === now.getMonth() + 1)
      return;
    if (viewMonth === 12) {
      setViewMonth(1);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
    setSelectedDate(null);
  };

  const isNextDisabled =
    viewYear === today.getFullYear() && viewMonth === today.getMonth() + 1;

  return (
    <div>
      {/* Month Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-6"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrevMonth}
          className="rounded-full"
          style={{ color: "oklch(0.72 0.12 295)" }}
        >
          <ChevronLeft size={20} />
        </Button>

        <div className="text-center">
          <h3
            className="text-2xl font-bold"
            style={{
              fontFamily: "Georgia, serif",
              background:
                "linear-gradient(135deg, oklch(0.8 0.1 295), oklch(0.78 0.18 75))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {MONTH_NAMES[viewMonth - 1]} {viewYear}
          </h3>
          {totalDays > 0 && (
            <p className="text-sm mt-1" style={{ color: "oklch(0.6 0.1 295)" }}>
              {completionPct}% full completion rate 💜
            </p>
          )}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleNextMonth}
          disabled={isNextDisabled}
          className="rounded-full"
          style={{
            color: isNextDisabled
              ? "oklch(0.35 0.05 295)"
              : "oklch(0.72 0.12 295)",
          }}
        >
          <ChevronRight size={20} />
        </Button>
      </motion.div>

      {/* Calendar Legend */}
      <div
        className="flex items-center justify-end gap-4 mb-4 text-xs"
        style={{ color: "oklch(0.55 0.08 295)" }}
      >
        <span className="flex items-center gap-1">
          <span
            className="w-3 h-3 rounded-sm inline-block"
            style={{
              background: "oklch(0.35 0.15 295 / 0.5)",
              border: "1px solid oklch(0.5 0.18 295 / 0.6)",
            }}
          />
          All done
        </span>
        <span className="flex items-center gap-1">
          <span
            className="w-3 h-3 rounded-sm inline-block"
            style={{
              background: "oklch(0.28 0.1 310 / 0.4)",
              border: "1px solid oklch(0.45 0.12 310 / 0.5)",
            }}
          />
          Partial
        </span>
        <span className="flex items-center gap-1">
          <span
            className="w-3 h-3 rounded-sm inline-block"
            style={{ border: "2px solid oklch(0.78 0.18 75)" }}
          />
          Today
        </span>
      </div>

      {/* Calendar Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="card-glass rounded-2xl p-4 mb-6"
      >
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAYS_OF_WEEK.map((day) => (
            <div
              key={day}
              className="text-center text-xs font-semibold py-2"
              style={{ color: "oklch(0.55 0.1 295)" }}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Day cells */}
        {isLoading ? (
          <div className="grid grid-cols-7 gap-1">
            {SKELETON_CELLS.map((sk) => (
              <div key={sk} className="h-10 rounded-lg animate-shimmer" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-7 gap-1">
            {cells.map((day, i) => {
              const emptyCellKey = `empty-r${Math.floor(i / 7)}-c${i % 7}`;
              if (!day) return <div key={emptyCellKey} />;

              const dateStr = formatDayDate(viewYear, viewMonth, day);
              const summary = summaryMap.get(dateStr);
              const status = getDayStatus(summary);
              const isToday = dateStr === todayStr;
              const isSelected = dateStr === selectedDate;
              const isFuture = dateStr > todayStr;

              return (
                <motion.button
                  type="button"
                  key={dateStr}
                  whileHover={!isFuture ? { scale: 1.08 } : undefined}
                  whileTap={!isFuture ? { scale: 0.95 } : undefined}
                  onClick={() =>
                    !isFuture && setSelectedDate(isSelected ? null : dateStr)
                  }
                  className="h-10 flex flex-col items-center justify-center text-sm font-medium relative"
                  style={{
                    ...getDayStyle(status, isToday, isSelected),
                    color: isFuture
                      ? "oklch(0.35 0.04 295)"
                      : isSelected
                        ? "white"
                        : isToday
                          ? "oklch(0.9 0.05 295)"
                          : "oklch(0.82 0.06 295)",
                    cursor: isFuture ? "default" : "pointer",
                  }}
                >
                  {day}
                  {status === "complete" && !isSelected && (
                    <Star
                      size={8}
                      className="absolute bottom-1"
                      style={{
                        color: "oklch(0.78 0.18 75)",
                        fill: "oklch(0.78 0.18 75)",
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        )}
      </motion.div>

      {/* Selected Day Details */}
      <AnimatePresence>
        {selectedDate && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="card-glass rounded-2xl p-5"
          >
            <h4
              className="text-lg font-bold mb-4"
              style={{
                fontFamily: "Georgia, serif",
                color: "oklch(0.82 0.1 295)",
              }}
            >
              {new Date(`${selectedDate}T00:00:00Z`).toLocaleDateString(
                "en-US",
                {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC",
                },
              )}
            </h4>

            {dayTasks.length === 0 ? (
              <p className="text-sm" style={{ color: "oklch(0.5 0.06 295)" }}>
                No tasks recorded for this day.
              </p>
            ) : (
              <div className="space-y-2">
                {dayTasks.map((task) => (
                  <div
                    key={task.id.toString()}
                    className="flex items-center gap-3 py-2 px-3 rounded-lg"
                    style={{ background: "oklch(0.2 0.06 295 / 0.5)" }}
                  >
                    <span
                      className="text-base"
                      style={{
                        color: task.completed
                          ? "oklch(0.65 0.18 295)"
                          : "oklch(0.4 0.08 295)",
                      }}
                    >
                      {task.completed ? "✓" : "○"}
                    </span>
                    <span
                      className="text-sm flex-1"
                      style={{
                        color: task.completed
                          ? "oklch(0.72 0.06 295)"
                          : "oklch(0.88 0.02 295)",
                        textDecoration: task.completed
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {task.title}
                    </span>
                  </div>
                ))}
                <p
                  className="text-xs mt-3 text-right"
                  style={{ color: "oklch(0.5 0.06 295)" }}
                >
                  {dayTasks.filter((t) => t.completed).length} /{" "}
                  {dayTasks.length} completed
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Monthly Summary */}
      {totalDays > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 grid grid-cols-3 gap-3"
        >
          {[
            {
              label: "Active Days",
              value: totalDays,
              color: "oklch(0.72 0.12 295)",
            },
            {
              label: "Full Completions",
              value: completeDays,
              color: "oklch(0.78 0.18 75)",
            },
            {
              label: "Completion Rate",
              value: `${completionPct}%`,
              color: "oklch(0.7 0.15 330)",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-3 rounded-xl"
              style={{
                background: "oklch(0.18 0.06 295 / 0.6)",
                border: "1px solid oklch(0.28 0.08 295 / 0.4)",
              }}
            >
              <p
                className="text-2xl font-bold"
                style={{ color: stat.color, fontFamily: "Georgia, serif" }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "oklch(0.55 0.06 295)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
