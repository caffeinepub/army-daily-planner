// BTS member signature-style SVG decorations — clearly visible
export function BTSSignatures() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* RM signature - bottom left area */}
      <svg
        role="img"
        aria-label="RM signature decoration"
        className="absolute animate-float-slow"
        style={{
          bottom: "22%",
          left: "4%",
          opacity: 0.85,
          animationDelay: "1.2s",
        }}
        width="120"
        height="50"
        viewBox="0 0 120 50"
        fill="none"
      >
        <title>RM signature decoration</title>
        <path
          d="M8 38 C15 10, 30 8, 35 25 C40 40, 38 45, 45 38 C52 30, 55 15, 60 12 C65 9, 68 18, 70 28 C72 38, 70 44, 75 40"
          stroke="oklch(0.72 0.18 295)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M80 35 C85 15, 95 12, 100 25 C105 38, 103 42, 110 36"
          stroke="oklch(0.72 0.18 295)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <text
          x="5"
          y="48"
          fontSize="9"
          fill="oklch(0.82 0.16 295)"
          fontFamily="Georgia, serif"
          opacity="1"
        >
          RM
        </text>
      </svg>

      {/* Jimin signature - top right area */}
      <svg
        role="img"
        aria-label="Jimin signature decoration"
        className="absolute animate-float"
        style={{
          top: "18%",
          right: "5%",
          opacity: 0.85,
          animationDelay: "0.8s",
        }}
        width="130"
        height="55"
        viewBox="0 0 130 55"
        fill="none"
      >
        <title>Jimin signature decoration</title>
        <path
          d="M5 40 C12 20, 22 15, 28 28 C34 42, 32 48, 38 42 C44 35, 48 20, 56 15 C62 10, 68 20, 70 32 C72 44, 68 50, 78 44 C88 38, 95 28, 102 20 C109 12, 115 18, 118 30"
          stroke="oklch(0.82 0.14 330)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <text
          x="4"
          y="53"
          fontSize="8"
          fill="oklch(0.86 0.14 330)"
          fontFamily="Georgia, serif"
          opacity="1"
        >
          Jimin
        </text>
      </svg>

      {/* V signature - middle right */}
      <svg
        role="img"
        aria-label="V signature decoration"
        className="absolute animate-float-slow"
        style={{ top: "55%", right: "6%", opacity: 0.85, animationDelay: "2s" }}
        width="100"
        height="45"
        viewBox="0 0 100 45"
        fill="none"
      >
        <title>V signature decoration</title>
        <path
          d="M5 10 C12 10, 15 12, 20 30 C25 48, 28 48, 34 30 C40 12, 44 10, 50 10"
          stroke="oklch(0.82 0.2 75)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M60 38 C65 15, 72 10, 80 25 C88 40, 90 42, 95 35"
          stroke="oklch(0.82 0.2 75)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <text
          x="4"
          y="44"
          fontSize="9"
          fill="oklch(0.88 0.18 75)"
          fontFamily="Georgia, serif"
          opacity="1"
        >
          V
        </text>
      </svg>

      {/* Suga signature - left middle */}
      <svg
        role="img"
        aria-label="Suga signature decoration"
        className="absolute animate-float"
        style={{
          top: "28%",
          left: "3%",
          opacity: 0.85,
          animationDelay: "1.8s",
        }}
        width="110"
        height="50"
        viewBox="0 0 110 50"
        fill="none"
      >
        <title>Suga signature decoration</title>
        <path
          d="M8 18 C20 8, 35 10, 38 20 C41 30, 30 35, 20 32 C10 29, 8 38, 22 40 C36 42, 50 38, 58 28 C66 18, 68 10, 75 12"
          stroke="oklch(0.82 0.1 220)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <text
          x="5"
          y="48"
          fontSize="8"
          fill="oklch(0.86 0.1 220)"
          fontFamily="Georgia, serif"
          opacity="1"
        >
          Suga
        </text>
      </svg>

      {/* JK (Jungkook) signature - bottom right */}
      <svg
        role="img"
        aria-label="Jungkook signature decoration"
        className="absolute animate-float-slow"
        style={{
          bottom: "10%",
          right: "8%",
          opacity: 0.85,
          animationDelay: "0.5s",
        }}
        width="115"
        height="52"
        viewBox="0 0 115 52"
        fill="none"
      >
        <title>Jungkook signature decoration</title>
        <path
          d="M5 25 C8 10, 18 8, 22 20 C26 32, 22 42, 18 42 C14 42, 12 36, 14 28"
          stroke="oklch(0.8 0.16 295)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M35 40 C40 12, 50 8, 58 22 C62 30, 60 40, 55 42 C68 35, 75 25, 82 38 C85 44, 88 46, 95 40"
          stroke="oklch(0.8 0.16 295)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <text
          x="4"
          y="50"
          fontSize="8"
          fill="oklch(0.86 0.16 295)"
          fontFamily="Georgia, serif"
          opacity="1"
        >
          JK
        </text>
      </svg>
    </div>
  );
}
