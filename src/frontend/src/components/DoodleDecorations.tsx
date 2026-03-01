// Doodle decorations — cute SVG animal doodles scattered around the page
// All doodles are inline SVG so they always render regardless of image loading

function ButterflyDoodle({
  size = 100,
  rotate = 0,
  style,
}: {
  size?: number;
  rotate?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 120 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
      aria-hidden="true"
    >
      {/* Left upper wing */}
      <ellipse
        cx="40"
        cy="35"
        rx="35"
        ry="28"
        fill="oklch(0.75 0.25 295 / 0.85)"
        stroke="oklch(0.55 0.22 295)"
        strokeWidth="2"
        transform="rotate(-20 40 35)"
      />
      {/* Left upper wing inner */}
      <ellipse
        cx="40"
        cy="35"
        rx="22"
        ry="17"
        fill="oklch(0.85 0.18 295 / 0.6)"
        transform="rotate(-20 40 35)"
      />
      {/* Left lower wing */}
      <ellipse
        cx="38"
        cy="65"
        rx="24"
        ry="20"
        fill="oklch(0.7 0.22 310 / 0.85)"
        stroke="oklch(0.55 0.22 295)"
        strokeWidth="2"
        transform="rotate(15 38 65)"
      />
      {/* Right upper wing */}
      <ellipse
        cx="80"
        cy="35"
        rx="35"
        ry="28"
        fill="oklch(0.75 0.25 295 / 0.85)"
        stroke="oklch(0.55 0.22 295)"
        strokeWidth="2"
        transform="rotate(20 80 35)"
      />
      {/* Right upper wing inner */}
      <ellipse
        cx="80"
        cy="35"
        rx="22"
        ry="17"
        fill="oklch(0.85 0.18 295 / 0.6)"
        transform="rotate(20 80 35)"
      />
      {/* Right lower wing */}
      <ellipse
        cx="82"
        cy="65"
        rx="24"
        ry="20"
        fill="oklch(0.7 0.22 310 / 0.85)"
        stroke="oklch(0.55 0.22 295)"
        strokeWidth="2"
        transform="rotate(-15 82 65)"
      />
      {/* Wing spots */}
      <circle cx="35" cy="32" r="5" fill="oklch(0.78 0.18 75 / 0.7)" />
      <circle cx="85" cy="32" r="5" fill="oklch(0.78 0.18 75 / 0.7)" />
      <circle cx="34" cy="62" r="4" fill="oklch(0.88 0.12 75 / 0.6)" />
      <circle cx="86" cy="62" r="4" fill="oklch(0.88 0.12 75 / 0.6)" />
      {/* Body */}
      <ellipse
        cx="60"
        cy="50"
        rx="5"
        ry="22"
        fill="oklch(0.22 0.1 295)"
        stroke="oklch(0.55 0.2 295)"
        strokeWidth="1.5"
      />
      {/* Head */}
      <circle
        cx="60"
        cy="26"
        r="6"
        fill="oklch(0.22 0.1 295)"
        stroke="oklch(0.55 0.2 295)"
        strokeWidth="1.5"
      />
      {/* Eyes */}
      <circle cx="57" cy="25" r="1.8" fill="oklch(0.85 0.12 295)" />
      <circle cx="63" cy="25" r="1.8" fill="oklch(0.85 0.12 295)" />
      {/* Antennae */}
      <path
        d="M57 21 Q48 12 44 8"
        stroke="oklch(0.4 0.15 295)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M63 21 Q72 12 76 8"
        stroke="oklch(0.4 0.15 295)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="44" cy="8" r="2.5" fill="oklch(0.78 0.18 75)" />
      <circle cx="76" cy="8" r="2.5" fill="oklch(0.78 0.18 75)" />
    </svg>
  );
}

function BunnyDoodle({
  size = 100,
  rotate = 0,
  style,
}: {
  size?: number;
  rotate?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size * 0.9}
      height={size}
      viewBox="0 0 90 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
      aria-hidden="true"
    >
      {/* Body */}
      <ellipse
        cx="45"
        cy="75"
        rx="28"
        ry="30"
        fill="oklch(0.92 0.04 295)"
        stroke="oklch(0.6 0.18 295)"
        strokeWidth="2.5"
      />
      {/* Left ear */}
      <ellipse
        cx="30"
        cy="22"
        rx="9"
        ry="22"
        fill="oklch(0.92 0.04 295)"
        stroke="oklch(0.6 0.18 295)"
        strokeWidth="2.5"
        transform="rotate(-12 30 22)"
      />
      <ellipse
        cx="30"
        cy="22"
        rx="5"
        ry="16"
        fill="oklch(0.8 0.12 10 / 0.5)"
        transform="rotate(-12 30 22)"
      />
      {/* Right ear */}
      <ellipse
        cx="60"
        cy="22"
        rx="9"
        ry="22"
        fill="oklch(0.92 0.04 295)"
        stroke="oklch(0.6 0.18 295)"
        strokeWidth="2.5"
        transform="rotate(12 60 22)"
      />
      <ellipse
        cx="60"
        cy="22"
        rx="5"
        ry="16"
        fill="oklch(0.8 0.12 10 / 0.5)"
        transform="rotate(12 60 22)"
      />
      {/* Head */}
      <circle
        cx="45"
        cy="48"
        r="22"
        fill="oklch(0.92 0.04 295)"
        stroke="oklch(0.6 0.18 295)"
        strokeWidth="2.5"
      />
      {/* Eyes */}
      <circle cx="37" cy="45" r="4.5" fill="oklch(0.35 0.15 295)" />
      <circle cx="53" cy="45" r="4.5" fill="oklch(0.35 0.15 295)" />
      <circle cx="38" cy="44" r="1.5" fill="white" />
      <circle cx="54" cy="44" r="1.5" fill="white" />
      {/* Nose */}
      <ellipse cx="45" cy="52" rx="3" ry="2" fill="oklch(0.75 0.18 10)" />
      {/* Mouth */}
      <path
        d="M42 54 Q45 58 48 54"
        stroke="oklch(0.5 0.12 295)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Whiskers */}
      <line
        x1="30"
        y1="51"
        x2="40"
        y2="52"
        stroke="oklch(0.55 0.1 295 / 0.6)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="28"
        y1="53"
        x2="39"
        y2="53"
        stroke="oklch(0.55 0.1 295 / 0.6)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="50"
        y1="52"
        x2="60"
        y2="51"
        stroke="oklch(0.55 0.1 295 / 0.6)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="51"
        y1="53"
        x2="62"
        y2="53"
        stroke="oklch(0.55 0.1 295 / 0.6)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Blush */}
      <circle cx="33" cy="50" r="5" fill="oklch(0.75 0.15 10 / 0.3)" />
      <circle cx="57" cy="50" r="5" fill="oklch(0.75 0.15 10 / 0.3)" />
      {/* Belly */}
      <ellipse
        cx="45"
        cy="80"
        rx="14"
        ry="16"
        fill="oklch(0.88 0.03 295 / 0.6)"
      />
      {/* Feet */}
      <ellipse
        cx="33"
        cy="100"
        rx="13"
        ry="7"
        fill="oklch(0.92 0.04 295)"
        stroke="oklch(0.6 0.18 295)"
        strokeWidth="2"
      />
      <ellipse
        cx="57"
        cy="100"
        rx="13"
        ry="7"
        fill="oklch(0.92 0.04 295)"
        stroke="oklch(0.6 0.18 295)"
        strokeWidth="2"
      />
      {/* Tail */}
      <circle
        cx="70"
        cy="82"
        r="6"
        fill="white"
        stroke="oklch(0.6 0.18 295)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CatDoodle({
  size = 100,
  rotate = 0,
  style,
}: {
  size?: number;
  rotate?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size * 0.9}
      height={size}
      viewBox="0 0 90 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
      aria-hidden="true"
    >
      {/* Body */}
      <ellipse
        cx="45"
        cy="75"
        rx="27"
        ry="28"
        fill="oklch(0.78 0.12 295 / 0.9)"
        stroke="oklch(0.55 0.22 295)"
        strokeWidth="2.5"
      />
      {/* Head */}
      <circle
        cx="45"
        cy="44"
        r="22"
        fill="oklch(0.78 0.12 295 / 0.9)"
        stroke="oklch(0.55 0.22 295)"
        strokeWidth="2.5"
      />
      {/* Ears */}
      <polygon
        points="24,28 18,10 35,20"
        fill="oklch(0.78 0.12 295)"
        stroke="oklch(0.55 0.22 295)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <polygon
        points="66,28 72,10 55,20"
        fill="oklch(0.78 0.12 295)"
        stroke="oklch(0.55 0.22 295)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Inner ear */}
      <polygon points="25,26 21,14 33,21" fill="oklch(0.8 0.15 10 / 0.5)" />
      <polygon points="65,26 69,14 57,21" fill="oklch(0.8 0.15 10 / 0.5)" />
      {/* Eyes — slit pupils */}
      <ellipse cx="36" cy="42" rx="6" ry="5.5" fill="oklch(0.65 0.2 150)" />
      <ellipse cx="54" cy="42" rx="6" ry="5.5" fill="oklch(0.65 0.2 150)" />
      <ellipse cx="36" cy="42" rx="2" ry="4.5" fill="oklch(0.1 0.05 295)" />
      <ellipse cx="54" cy="42" rx="2" ry="4.5" fill="oklch(0.1 0.05 295)" />
      <circle cx="37" cy="40" r="1" fill="white" />
      <circle cx="55" cy="40" r="1" fill="white" />
      {/* Nose */}
      <path d="M42 50 L45 53 L48 50 Z" fill="oklch(0.75 0.18 10)" />
      {/* Mouth */}
      <path
        d="M45 53 Q40 57 37 55"
        stroke="oklch(0.5 0.12 295)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M45 53 Q50 57 53 55"
        stroke="oklch(0.5 0.12 295)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Whiskers */}
      <line
        x1="20"
        y1="50"
        x2="40"
        y2="51"
        stroke="oklch(0.85 0.05 295 / 0.7)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <line
        x1="18"
        y1="53"
        x2="39"
        y2="52"
        stroke="oklch(0.85 0.05 295 / 0.7)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <line
        x1="50"
        y1="51"
        x2="70"
        y2="50"
        stroke="oklch(0.85 0.05 295 / 0.7)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <line
        x1="51"
        y1="52"
        x2="72"
        y2="53"
        stroke="oklch(0.85 0.05 295 / 0.7)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Blush */}
      <circle cx="28" cy="49" r="5" fill="oklch(0.8 0.15 10 / 0.3)" />
      <circle cx="62" cy="49" r="5" fill="oklch(0.8 0.15 10 / 0.3)" />
      {/* Paws */}
      <ellipse
        cx="30"
        cy="98"
        rx="10"
        ry="6"
        fill="oklch(0.78 0.12 295)"
        stroke="oklch(0.55 0.22 295)"
        strokeWidth="1.5"
      />
      <ellipse
        cx="60"
        cy="98"
        rx="10"
        ry="6"
        fill="oklch(0.78 0.12 295)"
        stroke="oklch(0.55 0.22 295)"
        strokeWidth="1.5"
      />
      {/* Tail */}
      <path
        d="M72 90 Q90 80 88 65 Q86 52 78 55"
        stroke="oklch(0.55 0.22 295)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Stripe on body */}
      <path
        d="M38 62 Q45 58 52 62"
        stroke="oklch(0.6 0.18 295 / 0.5)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M36 68 Q45 64 54 68"
        stroke="oklch(0.6 0.18 295 / 0.4)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Heart */}
      <path
        d="M44 8 C44 6 42 4 40 4 C38 4 36 6 36 8 C36 12 44 17 44 17 C44 17 52 12 52 8 C52 6 50 4 48 4 C46 4 44 6 44 8Z"
        fill="oklch(0.75 0.22 10 / 0.8)"
        transform="translate(1 -2) scale(0.8)"
      />
    </svg>
  );
}

function BearDoodle({
  size = 100,
  rotate = 0,
  style,
}: {
  size?: number;
  rotate?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
      aria-hidden="true"
    >
      {/* Body */}
      <ellipse
        cx="50"
        cy="64"
        rx="25"
        ry="28"
        fill="oklch(0.72 0.08 75 / 0.9)"
        stroke="oklch(0.55 0.18 75)"
        strokeWidth="2.5"
      />
      {/* Head */}
      <circle
        cx="50"
        cy="38"
        r="22"
        fill="oklch(0.72 0.08 75 / 0.9)"
        stroke="oklch(0.55 0.18 75)"
        strokeWidth="2.5"
      />
      {/* Ears */}
      <circle
        cx="30"
        cy="20"
        r="10"
        fill="oklch(0.72 0.08 75)"
        stroke="oklch(0.55 0.18 75)"
        strokeWidth="2"
      />
      <circle
        cx="70"
        cy="20"
        r="10"
        fill="oklch(0.72 0.08 75)"
        stroke="oklch(0.55 0.18 75)"
        strokeWidth="2"
      />
      <circle cx="30" cy="20" r="6" fill="oklch(0.62 0.1 10 / 0.5)" />
      <circle cx="70" cy="20" r="6" fill="oklch(0.62 0.1 10 / 0.5)" />
      {/* Eyes */}
      <circle cx="40" cy="36" r="5" fill="oklch(0.2 0.05 295)" />
      <circle cx="60" cy="36" r="5" fill="oklch(0.2 0.05 295)" />
      <circle cx="41" cy="35" r="1.5" fill="white" />
      <circle cx="61" cy="35" r="1.5" fill="white" />
      {/* Snout */}
      <ellipse cx="50" cy="46" rx="9" ry="6.5" fill="oklch(0.82 0.06 75)" />
      {/* Nose */}
      <ellipse cx="50" cy="43" rx="3.5" ry="2.5" fill="oklch(0.2 0.05 295)" />
      {/* Mouth */}
      <path
        d="M46 48 Q50 52 54 48"
        stroke="oklch(0.3 0.08 295)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Blush */}
      <circle cx="33" cy="44" r="5" fill="oklch(0.72 0.18 10 / 0.35)" />
      <circle cx="67" cy="44" r="5" fill="oklch(0.72 0.18 10 / 0.35)" />
      {/* Belly */}
      <ellipse
        cx="50"
        cy="66"
        rx="14"
        ry="16"
        fill="oklch(0.82 0.06 75 / 0.7)"
      />
      {/* Arms */}
      <ellipse
        cx="25"
        cy="65"
        rx="8"
        ry="12"
        fill="oklch(0.72 0.08 75)"
        stroke="oklch(0.55 0.18 75)"
        strokeWidth="2"
        transform="rotate(-15 25 65)"
      />
      <ellipse
        cx="75"
        cy="65"
        rx="8"
        ry="12"
        fill="oklch(0.72 0.08 75)"
        stroke="oklch(0.55 0.18 75)"
        strokeWidth="2"
        transform="rotate(15 75 65)"
      />
      {/* Honey pot */}
      <rect
        x="65"
        y="75"
        width="18"
        height="16"
        rx="4"
        fill="oklch(0.78 0.18 75)"
        stroke="oklch(0.58 0.18 75)"
        strokeWidth="1.5"
      />
      <path
        d="M65 79 Q74 76 83 79"
        stroke="oklch(0.88 0.1 75)"
        strokeWidth="1.5"
        fill="none"
      />
      <text
        x="69"
        y="88"
        fontSize="8"
        fill="oklch(0.4 0.1 75)"
        fontWeight="bold"
      >
        🍯
      </text>
    </svg>
  );
}

function StarsDoodle({
  size = 80,
  style,
}: {
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 130 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      aria-hidden="true"
    >
      {/* Large star */}
      <path
        d="M30 10 L34 22 L47 22 L37 30 L41 42 L30 34 L19 42 L23 30 L13 22 L26 22 Z"
        fill="oklch(0.78 0.18 75 / 0.9)"
        stroke="oklch(0.65 0.2 75)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Medium star */}
      <path
        d="M75 20 L78 29 L88 29 L80 35 L83 44 L75 38 L67 44 L70 35 L62 29 L72 29 Z"
        fill="oklch(0.72 0.2 295 / 0.85)"
        stroke="oklch(0.55 0.22 295)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Small star */}
      <path
        d="M115 8 L117 14 L124 14 L118 18 L120 24 L115 20 L110 24 L112 18 L106 14 L113 14 Z"
        fill="oklch(0.75 0.18 330 / 0.85)"
        stroke="oklch(0.6 0.2 330)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Sparkles */}
      <circle cx="55" cy="55" r="3" fill="oklch(0.78 0.18 75 / 0.7)" />
      <circle cx="95" cy="60" r="2" fill="oklch(0.72 0.2 295 / 0.6)" />
      <circle cx="15" cy="60" r="2.5" fill="oklch(0.75 0.18 330 / 0.6)" />
      <line
        x1="55"
        y1="48"
        x2="55"
        y2="62"
        stroke="oklch(0.78 0.18 75 / 0.5)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="48"
        y1="55"
        x2="62"
        y2="55"
        stroke="oklch(0.78 0.18 75 / 0.5)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleDecorations() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Butterfly - top right — TINY */}
      <div
        className="absolute animate-float"
        style={{ top: "4%", right: "2%", opacity: 0.88 }}
      >
        <ButterflyDoodle size={48} rotate={10} />
      </div>

      {/* Bunny - middle left — MEDIUM */}
      <div
        className="absolute animate-float-slow"
        style={{
          top: "43%",
          left: "0.5%",
          opacity: 0.78,
          animationDelay: "1s",
        }}
      >
        <BunnyDoodle size={95} rotate={6} />
      </div>

      {/* Cat - middle right — LARGE */}
      <div
        className="absolute animate-float"
        style={{
          top: "37%",
          right: "0.5%",
          opacity: 0.8,
          animationDelay: "2s",
        }}
      >
        <CatDoodle size={155} rotate={-8} />
      </div>

      {/* Bear - bottom left — SMALL */}
      <div
        className="absolute animate-float-slow"
        style={{
          bottom: "4%",
          left: "2%",
          opacity: 0.78,
          animationDelay: "0.5s",
        }}
      >
        <BearDoodle size={55} rotate={4} />
      </div>

      {/* Extra butterfly - lower left — HUGE */}
      <div
        className="absolute animate-float-slow"
        style={{
          top: "67%",
          left: "4%",
          opacity: 0.72,
          animationDelay: "2.5s",
        }}
      >
        <ButterflyDoodle size={170} rotate={-18} />
      </div>

      {/* Extra bear - top center — MEDIUM */}
      <div
        className="absolute animate-float"
        style={{
          top: "2%",
          left: "40%",
          opacity: 0.72,
          animationDelay: "1.5s",
        }}
      >
        <BearDoodle size={105} rotate={8} />
      </div>

      {/* Extra bunny - bottom right — LARGE */}
      <div
        className="absolute animate-float-slow"
        style={{
          bottom: "7%",
          right: "4%",
          opacity: 0.75,
          animationDelay: "4s",
        }}
      >
        <BunnyDoodle size={125} rotate={10} />
      </div>

      {/* Stars cluster - various spots */}
      <div
        className="absolute animate-sparkle"
        style={{
          top: "20%",
          left: "16%",
          opacity: 0.7,
          animationDelay: "0.3s",
        }}
      >
        <StarsDoodle size={70} />
      </div>

      <div
        className="absolute animate-sparkle"
        style={{
          bottom: "20%",
          right: "24%",
          opacity: 0.65,
          animationDelay: "1.8s",
        }}
      >
        <StarsDoodle size={55} />
      </div>
    </div>
  );
}
