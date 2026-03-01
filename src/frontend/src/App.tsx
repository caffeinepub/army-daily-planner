import { Toaster } from "@/components/ui/sonner";
import {
  CalendarDays,
  Flame,
  History,
  LogIn,
  LogOut,
  User,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { BTSSignatures } from "./components/BTSSignatures";
import { DoodleDecorations } from "./components/DoodleDecorations";
import { HistoryView } from "./components/HistoryView";
import { StreaksView } from "./components/StreaksView";
import { TodayView } from "./components/TodayView";
import { useInternetIdentity } from "./hooks/useInternetIdentity";

type Tab = "today" | "history" | "streaks";

const TABS: {
  id: Tab;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}[] = [
  { id: "today", label: "Today", icon: CalendarDays },
  { id: "history", label: "History", icon: History },
  { id: "streaks", label: "Streaks", icon: Flame },
];

function BtsLogo() {
  return (
    <div
      className="animate-pulse-glow flex-shrink-0"
      style={{
        borderRadius: "50%",
        // Halo ring — layered box-shadows give depth
        boxShadow:
          "0 0 0 2px oklch(0.5 0.2 295 / 0.4), 0 0 12px oklch(0.55 0.22 295 / 0.5), 0 0 28px oklch(0.45 0.2 295 / 0.3)",
      }}
    >
      <svg
        role="img"
        aria-label="BTS Logo"
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
      >
        <title>BTS Logo</title>
        {/* Outer glow ring */}
        <circle
          cx="23"
          cy="23"
          r="21"
          stroke="oklch(0.62 0.22 295)"
          strokeWidth="1.5"
          fill="oklch(0.17 0.09 295 / 0.9)"
        />
        {/* Inner gradient fill */}
        <circle cx="23" cy="23" r="19" fill="url(#logoGrad)" opacity="0.6" />
        <defs>
          <radialGradient id="logoGrad" cx="40%" cy="30%" r="70%">
            <stop
              offset="0%"
              stopColor="oklch(0.45 0.2 295)"
              stopOpacity="0.6"
            />
            <stop
              offset="100%"
              stopColor="oklch(0.12 0.06 295)"
              stopOpacity="0"
            />
          </radialGradient>
        </defs>
        {/* BTS text */}
        <text
          x="23"
          y="29"
          textAnchor="middle"
          fill="oklch(0.92 0.12 295)"
          fontSize="13"
          fontWeight="700"
          fontFamily="Georgia, serif"
          letterSpacing="1.5"
        >
          BTS
        </text>
        {/* Accent marks */}
        <text x="8" y="18" fontSize="7" fill="oklch(0.7 0.2 295)">
          💜
        </text>
        <text x="30" y="18" fontSize="7" fill="oklch(0.78 0.18 75)">
          ⭐
        </text>
      </svg>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("today");
  const { identity, login, clear, isLoggingIn, isInitializing } =
    useInternetIdentity();

  const isLoggedIn = !!identity && !identity.getPrincipal().isAnonymous();
  const principal = isLoggedIn ? identity.getPrincipal().toString() : null;
  const shortPrincipal = principal
    ? `${principal.slice(0, 5)}...${principal.slice(-3)}`
    : null;

  const handleAuth = () => {
    if (isLoggedIn) {
      clear();
      toast.success("Logged out. Switching to Guest Mode 💜");
    } else {
      login();
    }
  };

  return (
    <div
      className="min-h-screen relative"
      style={{ background: "transparent" }}
    >
      {/* Background decorations */}
      <DoodleDecorations />
      <BTSSignatures />

      {/* Main content */}
      <div className="relative" style={{ zIndex: 1 }}>
        {/* Header */}
        <header
          className="sticky top-0 z-40"
          style={{
            background: "oklch(0.12 0.04 295 / 0.95)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid oklch(0.28 0.08 295 / 0.5)",
          }}
        >
          <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo + Title */}
            <div className="flex items-center gap-3">
              <BtsLogo />
              <div>
                <h1
                  className="text-xl font-bold leading-tight"
                  style={{
                    fontFamily: "Georgia, serif",
                    background:
                      "linear-gradient(135deg, oklch(0.85 0.12 295), oklch(0.78 0.18 75))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  ARMY Daily Planner
                </h1>
                <p className="text-xs" style={{ color: "oklch(0.55 0.1 295)" }}>
                  💜 Stay on track with BTS
                </p>
              </div>
            </div>

            {/* Login / User button */}
            <button
              type="button"
              onClick={handleAuth}
              disabled={isLoggingIn || isInitializing}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all"
              style={{
                background: isLoggedIn
                  ? "oklch(0.28 0.1 295 / 0.5)"
                  : "oklch(0.45 0.2 295 / 0.3)",
                border: `1px solid ${isLoggedIn ? "oklch(0.4 0.12 295 / 0.5)" : "oklch(0.5 0.2 295 / 0.4)"}`,
                color: "oklch(0.85 0.1 295)",
                cursor: isLoggingIn || isInitializing ? "wait" : "pointer",
              }}
              aria-label={
                isLoggedIn ? "Log out" : "Log in with Internet Identity"
              }
            >
              {isLoggedIn ? (
                <>
                  <User size={14} />
                  <span className="hidden sm:inline">{shortPrincipal}</span>
                  <LogOut size={14} className="hidden sm:block" />
                </>
              ) : isLoggingIn ? (
                <span>Connecting...</span>
              ) : (
                <>
                  <LogIn size={14} />
                  <span>Guest Mode 💜</span>
                </>
              )}
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="max-w-2xl mx-auto px-4 pb-0">
            <div
              className="flex border-b"
              style={{ borderColor: "oklch(0.25 0.06 295 / 0.4)" }}
            >
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    type="button"
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-all duration-200 relative"
                    style={{
                      color: isActive
                        ? "oklch(0.85 0.12 295)"
                        : "oklch(0.5 0.07 295)",
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <Icon size={16} />
                    {tab.label}
                    {isActive && (
                      <motion.div
                        layoutId="tab-indicator"
                        className="absolute bottom-0 left-2 right-2 rounded-t-full"
                        style={{
                          height: "3px",
                          background:
                            "linear-gradient(90deg, oklch(0.55 0.22 295), oklch(0.72 0.2 295), oklch(0.78 0.18 75))",
                          boxShadow:
                            "0 0 8px oklch(0.65 0.22 295 / 0.9), 0 0 16px oklch(0.55 0.22 295 / 0.5)",
                        }}
                        transition={{
                          type: "spring",
                          bounce: 0.25,
                          duration: 0.4,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        {/* Guest mode banner */}
        {!isLoggedIn && !isInitializing && (
          <div
            className="text-center text-xs py-2 px-4"
            style={{
              background: "oklch(0.22 0.08 295 / 0.6)",
              borderBottom: "1px solid oklch(0.32 0.1 295 / 0.3)",
              color: "oklch(0.65 0.1 295)",
            }}
          >
            Guest Mode — tasks saved locally 💜{" "}
            <button
              type="button"
              onClick={login}
              className="underline ml-1 hover:text-primary transition-colors"
              style={{ color: "oklch(0.72 0.15 295)" }}
            >
              Log in to sync across devices
            </button>
          </div>
        )}

        {/* Page Content */}
        <main className="max-w-2xl mx-auto px-4 py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "today" && <TodayView />}
              {activeTab === "history" && <HistoryView />}
              {activeTab === "streaks" && <StreaksView />}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer
          className="text-center py-6 px-4"
          style={{ borderTop: "1px solid oklch(0.22 0.06 295 / 0.4)" }}
        >
          <p className="text-xs mb-2" style={{ color: "oklch(0.45 0.08 295)" }}>
            <span className="animate-sparkle inline-block">💜</span> For the
            ARMY, by the ARMY
          </p>
          <div
            className="flex items-center justify-center gap-1 text-xs"
            style={{ color: "oklch(0.38 0.06 295)" }}
          >
            <span>RM · Jin · Suga · J-Hope · Jimin · V · Jungkook</span>
          </div>
          <p className="text-xs mt-3" style={{ color: "oklch(0.35 0.05 295)" }}>
            © {new Date().getFullYear()}. Built with 💜 using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
              style={{ color: "oklch(0.5 0.12 295)" }}
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </div>

      <Toaster
        theme="dark"
        toastOptions={{
          style: {
            background: "oklch(0.18 0.07 295)",
            border: "1px solid oklch(0.35 0.1 295 / 0.5)",
            color: "oklch(0.9 0.02 295)",
          },
        }}
      />
    </div>
  );
}
