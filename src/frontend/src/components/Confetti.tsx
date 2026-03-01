import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  delay: number;
  size: number;
  shape: "square" | "circle" | "heart";
}

const COLORS = [
  "#7c3aed", // purple
  "#a855f7", // light purple
  "#c084fc", // lavender
  "#f59e0b", // gold
  "#fbbf24", // light gold
  "#ec4899", // pink
  "#fff", // white
];

export function Confetti({ active }: { active: boolean }) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (!active) {
      setPieces([]);
      return;
    }

    const newPieces: ConfettiPiece[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: Math.random() * 1.5,
      size: 6 + Math.random() * 10,
      shape: (["square", "circle", "heart"] as const)[
        Math.floor(Math.random() * 3)
      ],
    }));

    setPieces(newPieces);

    const timer = setTimeout(() => setPieces([]), 3000);
    return () => clearTimeout(timer);
  }, [active]);

  if (pieces.length === 0) return null;

  return (
    <div className="confetti-container">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.left}%`,
            top: "-20px",
            backgroundColor:
              piece.shape !== "heart" ? piece.color : "transparent",
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            borderRadius:
              piece.shape === "circle"
                ? "50%"
                : piece.shape === "square"
                  ? "2px"
                  : "50%",
            animationDelay: `${piece.delay}s`,
            animationDuration: `${2 + Math.random()}s`,
            fontSize:
              piece.shape === "heart" ? `${piece.size + 4}px` : undefined,
            lineHeight: 1,
            display: piece.shape === "heart" ? "flex" : "block",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {piece.shape === "heart" ? "💜" : null}
        </div>
      ))}
    </div>
  );
}
