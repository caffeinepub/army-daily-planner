import { Button } from "@/components/ui/button";
import { Flame, Lock, Trophy } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useStreakInfo } from "../hooks/useQueries";
import { getBT21Character } from "./BT21Characters";

interface Milestone {
  days: number;
  name: string;
  description: string;
  songQuote: string;
  emoji: string;
  memberPhoto: string;
  memberName: string;
}

const MILESTONES: Milestone[] = [
  {
    days: 3,
    name: "Boy With Luv Starter",
    description: "3 days of pure love and dedication!",
    songQuote: '"Oh my! Hey, my star. 💜" — Boy With Luv',
    emoji: "🌸",
    memberPhoto: "/assets/generated/bt21-chimmy.dim_200x200.png",
    memberName: "Jimin (CHIMMY)",
  },
  {
    days: 7,
    name: "DNA Activated",
    description: "A whole week! It's in your DNA now!",
    songQuote: '"I\'ve been waiting all my life. ✨" — DNA',
    emoji: "🧬",
    memberPhoto: "/assets/generated/bt21-van.dim_200x200.png",
    memberName: "RM (VAN)",
  },
  {
    days: 14,
    name: "Spring Day Survivor",
    description: "Two weeks strong! Spring is yours!",
    songQuote: '"I miss you. Time passes like a heavy rain. 🌼" — Spring Day',
    emoji: "🌼",
    memberPhoto: "/assets/generated/bt21-tata.dim_200x200.png",
    memberName: "V (TATA)",
  },
  {
    days: 21,
    name: "Jin's Worldwide Fan",
    description: "Three weeks! Worldwide handsome energy!",
    songQuote: '"Eat Jin! Aww, this is delicious. 😄" — Jin',
    emoji: "🌹",
    memberPhoto: "/assets/generated/bt21-rj.dim_200x200.png",
    memberName: "Jin (RJ)",
  },
  {
    days: 30,
    name: "Butter Smooth",
    description: "30 days! Smooth like butter!",
    songQuote: '"Smooth like butter, like a criminal undercover. 🧈" — Butter',
    emoji: "🧈",
    memberPhoto: "/assets/generated/bt21-cooky.dim_200x200.png",
    memberName: "Jungkook (COOKY)",
  },
  {
    days: 50,
    name: "Suga's Agust D",
    description: "50 days! Genius level dedication!",
    songQuote: '"I′m never gonna let you down. 🎤" — Suga',
    emoji: "🎤",
    memberPhoto: "/assets/generated/bt21-shooky.dim_200x200.png",
    memberName: "Suga (SHOOKY)",
  },
  {
    days: 100,
    name: "Dynamite ARMY",
    description: "100 days! You're an absolute ARMY legend!",
    songQuote: "\"'Cause I, I, I'm in the stars tonight! 💥\" — Dynamite",
    emoji: "💥",
    memberPhoto: "/assets/generated/bt21-mang.dim_200x200.png",
    memberName: "J-Hope (MANG)",
  },
];

function BadgeCard({
  milestone,
  isUnlocked,
  onClaim,
}: {
  milestone: Milestone;
  isUnlocked: boolean;
  onClaim: () => void;
}) {
  return (
    <motion.div
      whileHover={isUnlocked ? { scale: 1.04, y: -4 } : undefined}
      className="relative rounded-2xl p-4 text-center cursor-default transition-all duration-300"
      style={{
        background: isUnlocked
          ? "oklch(0.2 0.08 295 / 0.9)"
          : "oklch(0.16 0.04 295 / 0.7)",
        border: isUnlocked
          ? "1px solid oklch(0.45 0.18 295 / 0.6)"
          : "1px solid oklch(0.25 0.05 295 / 0.4)",
        boxShadow: isUnlocked
          ? "0 0 20px oklch(0.55 0.22 295 / 0.25), 0 4px 16px oklch(0.05 0.02 295 / 0.5)"
          : "0 2px 8px oklch(0.05 0.02 295 / 0.3)",
        filter: isUnlocked ? "none" : "grayscale(0.8) brightness(0.6)",
      }}
    >
      {/* Lock overlay */}
      {!isUnlocked && (
        <div
          className="absolute inset-0 flex items-center justify-center rounded-2xl"
          style={{ background: "oklch(0.1 0.02 295 / 0.4)" }}
        >
          <Lock size={20} style={{ color: "oklch(0.45 0.06 295)" }} />
        </div>
      )}

      {/* Member BT21 character */}
      <div className="h-20 flex items-center justify-center mb-2">
        {(() => {
          const BT21Char = getBT21Character(milestone.memberName);
          return (
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: 76,
                height: 76,
                border: isUnlocked
                  ? "2px solid oklch(0.6 0.2 295 / 0.8)"
                  : "2px solid oklch(0.3 0.05 295 / 0.4)",
                boxShadow: isUnlocked
                  ? "0 0 12px oklch(0.55 0.22 295 / 0.5)"
                  : "none",
                filter: isUnlocked ? "none" : "grayscale(1) brightness(0.4)",
                background: isUnlocked
                  ? "oklch(0.15 0.06 295 / 0.8)"
                  : "oklch(0.12 0.03 295 / 0.6)",
              }}
            >
              {BT21Char ? (
                <BT21Char size={64} />
              ) : (
                <span className="text-2xl">{milestone.emoji}</span>
              )}
            </div>
          );
        })()}
      </div>
      {/* Member name */}
      {isUnlocked && (
        <p
          className="text-xs font-semibold mb-1"
          style={{ color: "oklch(0.75 0.15 295)" }}
        >
          {milestone.memberName} 💜
        </p>
      )}

      {/* Days badge */}
      <div
        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold mb-2"
        style={{
          background: isUnlocked
            ? "oklch(0.45 0.2 295 / 0.3)"
            : "oklch(0.2 0.04 295 / 0.5)",
          color: isUnlocked ? "oklch(0.8 0.12 295)" : "oklch(0.45 0.06 295)",
          border: `1px solid ${isUnlocked ? "oklch(0.5 0.2 295 / 0.4)" : "oklch(0.28 0.05 295 / 0.3)"}`,
        }}
      >
        <Flame size={10} /> {milestone.days} days
      </div>

      <h4
        className="text-sm font-bold mb-1"
        style={{
          color: isUnlocked ? "oklch(0.88 0.08 295)" : "oklch(0.45 0.05 295)",
          fontFamily: "Georgia, serif",
        }}
      >
        {milestone.emoji} {milestone.name}
      </h4>

      <p
        className="text-xs leading-tight"
        style={{
          color: isUnlocked ? "oklch(0.62 0.08 295)" : "oklch(0.38 0.04 295)",
        }}
      >
        {milestone.description}
      </p>

      {isUnlocked && (
        <button
          type="button"
          onClick={onClaim}
          className="mt-3 text-xs px-3 py-1 rounded-full font-medium transition-all"
          style={{
            background: "oklch(0.5 0.2 295 / 0.25)",
            color: "oklch(0.82 0.12 295)",
            border: "1px solid oklch(0.5 0.2 295 / 0.4)",
          }}
        >
          View reward 💜
        </button>
      )}
    </motion.div>
  );
}

export function StreaksView() {
  const { data: streakInfo, isLoading } = useStreakInfo();
  const [popupMilestone, setPopupMilestone] = useState<Milestone | null>(null);
  const [justUnlocked, setJustUnlocked] = useState<Set<number>>(new Set());
  const prevMilestonesRef = useRef<Set<number>>(new Set());

  const currentStreak = Number(streakInfo?.currentStreak ?? 0);
  const longestStreak = Number(streakInfo?.longestStreak ?? 0);
  const unlockedDays = new Set(
    streakInfo?.milestones.map((m) => Number(m)) ?? [],
  );

  // Detect newly unlocked milestones
  useEffect(() => {
    if (!streakInfo) return;
    const currentUnlocked = new Set(
      streakInfo.milestones.map((m) => Number(m)),
    );
    const prev = prevMilestonesRef.current;
    const newlyUnlocked = new Set<number>();
    for (const day of currentUnlocked) {
      if (!prev.has(day)) newlyUnlocked.add(day);
    }
    if (newlyUnlocked.size > 0) {
      setJustUnlocked(newlyUnlocked);
      // Auto-show popup for first newly unlocked
      const firstNew = MILESTONES.find((m) => newlyUnlocked.has(m.days));
      if (firstNew) setPopupMilestone(firstNew);
      setTimeout(() => setJustUnlocked(new Set()), 5000);
    }
    prevMilestonesRef.current = currentUnlocked;
  }, [streakInfo]);

  const getFlameSize = () => {
    if (currentStreak >= 30) return 80;
    if (currentStreak >= 7) return 64;
    return 48;
  };

  return (
    <div>
      {/* Celebration Popup */}
      <AnimatePresence>
        {popupMilestone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              background: "oklch(0.05 0.02 295 / 0.8)",
              backdropFilter: "blur(8px)",
            }}
            onClick={() => setPopupMilestone(null)}
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="rounded-3xl p-8 max-w-sm w-full text-center"
              style={{
                background: "oklch(0.18 0.08 295)",
                border: "2px solid oklch(0.55 0.22 295 / 0.5)",
                boxShadow:
                  "0 0 60px oklch(0.55 0.22 295 / 0.4), 0 0 120px oklch(0.55 0.22 295 / 0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-6xl mb-6 animate-burst">
                {popupMilestone.emoji}
              </p>
              <h3
                className="text-2xl font-bold mb-2"
                style={{
                  fontFamily: "Georgia, serif",
                  background:
                    "linear-gradient(135deg, oklch(0.8 0.1 295), oklch(0.78 0.18 75))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                You unlocked
                <br />
                {popupMilestone.name}! 💜
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: "oklch(0.65 0.08 295)" }}
              >
                {popupMilestone.description}
              </p>
              <p
                className="text-sm italic mb-6 px-2"
                style={{
                  color: "oklch(0.7 0.12 295)",
                  fontFamily: "Georgia, serif",
                }}
              >
                {popupMilestone.songQuote}
              </p>
              <Button
                onClick={() => setPopupMilestone(null)}
                className="px-8 py-2 font-bold"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.45 0.2 295), oklch(0.6 0.22 295))",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                }}
              >
                Thank you BTS! 💜
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Current Streak Counter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        {isLoading ? (
          <div className="h-32 rounded-2xl animate-shimmer mx-auto max-w-xs" />
        ) : (
          <>
            <div
              className="inline-block rounded-3xl px-10 py-6 mb-4"
              style={{
                background: "oklch(0.18 0.08 295 / 0.8)",
                border: "1px solid oklch(0.4 0.15 295 / 0.5)",
                boxShadow:
                  currentStreak > 0
                    ? "0 0 40px oklch(0.55 0.22 295 / 0.3), 0 0 80px oklch(0.55 0.22 295 / 0.15)"
                    : "none",
              }}
            >
              <div
                className="animate-flicker text-center mb-2"
                style={{ fontSize: `${getFlameSize()}px`, lineHeight: 1 }}
              >
                🔥
              </div>
              <div
                className="text-6xl font-black mb-1"
                style={{
                  fontFamily: "Georgia, serif",
                  background:
                    currentStreak > 0
                      ? "linear-gradient(135deg, oklch(0.7 0.22 295), oklch(0.78 0.18 75))"
                      : "linear-gradient(135deg, oklch(0.45 0.08 295), oklch(0.55 0.1 295))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "none",
                }}
              >
                {currentStreak}
              </div>
              <p
                className="text-lg font-medium"
                style={{ color: "oklch(0.72 0.1 295)" }}
              >
                day streak 💜
              </p>
            </div>

            {/* Streak message */}
            <p
              className="text-base"
              style={{
                color: "oklch(0.65 0.1 295)",
                fontFamily: "Georgia, serif",
              }}
            >
              {currentStreak === 0 &&
                "Complete today's tasks to start your streak! 🌱"}
              {currentStreak > 0 &&
                currentStreak < 3 &&
                "Jimin is cheering you on — keep going! 🌸"}
              {currentStreak >= 3 &&
                currentStreak < 7 &&
                "Boy With Luv vibes with Jimin! You've got this! 🌸"}
              {currentStreak >= 7 &&
                currentStreak < 14 &&
                "RM says: DNA activated! One week strong! 🧬"}
              {currentStreak >= 14 &&
                currentStreak < 21 &&
                "V's Spring Day energy — two weeks! 🌼"}
              {currentStreak >= 21 &&
                currentStreak < 30 &&
                "Jin says: Worldwide handsome dedication! 🌹"}
              {currentStreak >= 30 &&
                currentStreak < 50 &&
                "Jungkook's Golden streak — 30 days! 🧈"}
              {currentStreak >= 50 &&
                currentStreak < 100 &&
                "Suga's Agust D level grind — 50 days! 🎤"}
              {currentStreak >= 100 &&
                "J-Hope's Dynamite ARMY! LEGENDARY! 💥💜"}
            </p>
          </>
        )}
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {[
          {
            label: "Current Streak",
            value: currentStreak,
            icon: "🔥",
            color: "oklch(0.78 0.18 75)",
          },
          {
            label: "Longest Streak",
            value: longestStreak,
            icon: "🏆",
            color: "oklch(0.72 0.12 295)",
          },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center p-4 rounded-2xl"
            style={{
              background: "oklch(0.18 0.07 295 / 0.7)",
              border: "1px solid oklch(0.32 0.1 295 / 0.4)",
            }}
          >
            <p className="text-2xl mb-1">{stat.icon}</p>
            <p
              className="text-3xl font-bold"
              style={{ color: stat.color, fontFamily: "Georgia, serif" }}
            >
              {stat.value}
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: "oklch(0.55 0.07 295)" }}
            >
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Milestone Badges */}
      <div>
        <h3
          className="text-lg font-bold mb-4 flex items-center gap-2"
          style={{ color: "oklch(0.8 0.1 295)", fontFamily: "Georgia, serif" }}
        >
          <Trophy size={18} style={{ color: "oklch(0.78 0.18 75)" }} />
          Milestone Badges
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:grid-cols-4 xl:grid-cols-7">
          {MILESTONES.map((milestone, i) => {
            const isUnlocked = unlockedDays.has(milestone.days);
            const isNew = justUnlocked.has(milestone.days);

            return (
              <motion.div
                key={milestone.days}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={isNew ? "animate-burst" : ""}
              >
                <BadgeCard
                  milestone={milestone}
                  isUnlocked={isUnlocked}
                  onClaim={() => setPopupMilestone(milestone)}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Progress to next milestone */}
      {(() => {
        const nextMilestone = MILESTONES.find((m) => !unlockedDays.has(m.days));
        if (!nextMilestone) return null;
        const progress = Math.min(
          (longestStreak / nextMilestone.days) * 100,
          100,
        );
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 p-4 rounded-2xl"
            style={{
              background: "oklch(0.18 0.07 295 / 0.6)",
              border: "1px solid oklch(0.32 0.1 295 / 0.4)",
            }}
          >
            <p
              className="text-sm font-medium mb-2"
              style={{ color: "oklch(0.72 0.1 295)" }}
            >
              Next: {nextMilestone.emoji} {nextMilestone.name}
            </p>
            <div
              className="relative h-3 rounded-full overflow-hidden mb-1"
              style={{ background: "oklch(0.22 0.06 295)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.45 0.2 295), oklch(0.65 0.22 295), oklch(0.78 0.18 75))",
                }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
            <p className="text-xs" style={{ color: "oklch(0.55 0.06 295)" }}>
              {longestStreak} / {nextMilestone.days} days
            </p>
          </motion.div>
        );
      })()}
    </div>
  );
}
