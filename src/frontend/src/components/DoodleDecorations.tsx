// Doodle decorations — images are already purple/lavender, no filter needed

export function DoodleDecorations() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Panda - top left — HUGE (190px) */}
      <img
        src="/assets/generated/doodle-panda-transparent.dim_200x200.png"
        alt=""
        aria-hidden="true"
        className="absolute animate-float-slow"
        style={{
          top: "6%",
          left: "1.5%",
          width: "190px",
          opacity: 0.9,
          transform: "rotate(-12deg)",
        }}
      />
      {/* Butterfly - top right — TINY (38px) */}
      <img
        src="/assets/generated/doodle-butterfly-transparent.dim_200x160.png"
        alt=""
        aria-hidden="true"
        className="absolute animate-float"
        style={{
          top: "4%",
          right: "2.5%",
          width: "38px",
          opacity: 0.9,
          transform: "rotate(10deg)",
        }}
      />
      {/* Bunny - middle left — MEDIUM (90px) */}
      <img
        src="/assets/generated/doodle-bunny-transparent.dim_180x200.png"
        alt=""
        aria-hidden="true"
        className="absolute animate-float-slow"
        style={{
          top: "44%",
          left: "0.5%",
          width: "90px",
          opacity: 0.88,
          transform: "rotate(6deg)",
          animationDelay: "1s",
        }}
      />
      {/* Cat - middle right — LARGE (160px) */}
      <img
        src="/assets/generated/doodle-cat-transparent.dim_180x200.png"
        alt=""
        aria-hidden="true"
        className="absolute animate-float"
        style={{
          top: "38%",
          right: "1%",
          width: "160px",
          opacity: 0.88,
          transform: "rotate(-8deg)",
          animationDelay: "2s",
        }}
      />
      {/* Bear - bottom left — TINY (48px) */}
      <img
        src="/assets/generated/doodle-bear-transparent.dim_180x200.png"
        alt=""
        aria-hidden="true"
        className="absolute animate-float-slow"
        style={{
          bottom: "4%",
          left: "2.5%",
          width: "48px",
          opacity: 0.88,
          transform: "rotate(4deg)",
          animationDelay: "0.5s",
        }}
      />
      {/* Stars - top center — LARGE (170px) */}
      <img
        src="/assets/generated/doodle-stars-transparent.dim_300x200.png"
        alt=""
        aria-hidden="true"
        className="absolute animate-sparkle"
        style={{
          top: "1%",
          left: "32%",
          width: "170px",
          opacity: 0.85,
        }}
      />
      {/* Stars - bottom right — TINY (42px) */}
      <img
        src="/assets/generated/doodle-stars-transparent.dim_300x200.png"
        alt=""
        aria-hidden="true"
        className="absolute animate-sparkle"
        style={{
          bottom: "7%",
          right: "3%",
          width: "42px",
          opacity: 0.8,
          transform: "rotate(18deg)",
          animationDelay: "1.5s",
        }}
      />
      {/* Extra panda - bottom right area, mirrored — SMALL (70px) */}
      <img
        src="/assets/generated/doodle-panda-transparent.dim_200x200.png"
        alt=""
        aria-hidden="true"
        className="absolute animate-float"
        style={{
          bottom: "14%",
          right: "18%",
          width: "70px",
          opacity: 0.82,
          transform: "rotate(-7deg) scaleX(-1)",
          animationDelay: "3s",
        }}
      />
      {/* Extra butterfly - lower left — HUGE (175px) */}
      <img
        src="/assets/generated/doodle-butterfly-transparent.dim_200x160.png"
        alt=""
        aria-hidden="true"
        className="absolute animate-float-slow"
        style={{
          top: "68%",
          left: "6%",
          width: "175px",
          opacity: 0.82,
          transform: "rotate(-18deg)",
          animationDelay: "2.5s",
        }}
      />
    </div>
  );
}
