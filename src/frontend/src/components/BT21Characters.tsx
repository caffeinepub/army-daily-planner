// BT21 Character inline SVG components — chibi style, BTS purple palette

export function Chimmy({ size = 72 }: { size?: number }) {
  // Jimin's BT21: yellow chick in yellow hoodie, round head, tiny beak, big dot eyes
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="CHIMMY - Jimin's BT21 character"
    >
      {/* Hoodie body */}
      <ellipse cx="40" cy="62" rx="22" ry="16" fill="#FFD93D" />
      {/* Hoodie pocket */}
      <ellipse cx="40" cy="67" rx="9" ry="5" fill="#F7C521" />
      {/* Hoodie ears/hood */}
      <ellipse cx="22" cy="50" rx="6" ry="7" fill="#FFD93D" />
      <ellipse cx="58" cy="50" rx="6" ry="7" fill="#FFD93D" />
      {/* Inner ear */}
      <ellipse cx="22" cy="51" rx="3" ry="4" fill="#F7C521" />
      <ellipse cx="58" cy="51" rx="3" ry="4" fill="#F7C521" />
      {/* Head */}
      <circle cx="40" cy="38" r="22" fill="#FFD93D" />
      {/* Cheek blush */}
      <ellipse cx="27" cy="43" rx="5" ry="3" fill="#FFB347" opacity="0.5" />
      <ellipse cx="53" cy="43" rx="5" ry="3" fill="#FFB347" opacity="0.5" />
      {/* Eyes */}
      <circle cx="32" cy="36" r="5" fill="#1A0533" />
      <circle cx="48" cy="36" r="5" fill="#1A0533" />
      {/* Eye shine */}
      <circle cx="34" cy="34" r="1.5" fill="white" />
      <circle cx="50" cy="34" r="1.5" fill="white" />
      {/* Beak */}
      <ellipse cx="40" cy="44" rx="4" ry="3" fill="#FF8C00" />
      <ellipse cx="40" cy="45.5" rx="3" ry="1.5" fill="#FF6B00" />
      {/* BTS purple accent — tiny heart on hoodie */}
      <path
        d="M37 60 C37 58 39 57 40 58.5 C41 57 43 58 43 60 C43 62 40 64 40 64 C40 64 37 62 37 60Z"
        fill="#8B5CF6"
      />
    </svg>
  );
}

export function Van({ size = 72 }: { size?: number }) {
  // RM's BT21: silver/grey robot, antenna, rectangular face, visor eyes, boxy body
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="VAN - RM's BT21 character"
    >
      {/* Body */}
      <rect x="18" y="48" width="44" height="28" rx="6" fill="#9CA3AF" />
      {/* Body panel */}
      <rect x="24" y="54" width="32" height="16" rx="4" fill="#6B7280" />
      {/* Body light */}
      <circle cx="32" cy="62" r="4" fill="#7C3AED" opacity="0.9" />
      <circle cx="48" cy="62" r="4" fill="#A78BFA" opacity="0.9" />
      {/* Shoulders */}
      <rect x="10" y="50" width="10" height="16" rx="5" fill="#9CA3AF" />
      <rect x="60" y="50" width="10" height="16" rx="5" fill="#9CA3AF" />
      {/* Neck */}
      <rect x="34" y="44" width="12" height="8" rx="2" fill="#6B7280" />
      {/* Head */}
      <rect x="16" y="14" width="48" height="36" rx="8" fill="#D1D5DB" />
      {/* Head sheen */}
      <rect
        x="18"
        y="16"
        width="44"
        height="6"
        rx="4"
        fill="white"
        opacity="0.3"
      />
      {/* Visor/eyes panel */}
      <rect x="20" y="26" width="40" height="16" rx="5" fill="#1E1B4B" />
      {/* Left eye */}
      <rect x="23" y="29" width="14" height="10" rx="3" fill="#7C3AED" />
      <rect
        x="25"
        y="31"
        width="5"
        height="4"
        rx="1"
        fill="#A78BFA"
        opacity="0.7"
      />
      {/* Right eye */}
      <rect x="43" y="29" width="14" height="10" rx="3" fill="#7C3AED" />
      <rect
        x="45"
        y="31"
        width="5"
        height="4"
        rx="1"
        fill="#A78BFA"
        opacity="0.7"
      />
      {/* Antenna */}
      <rect x="38" y="4" width="4" height="14" rx="2" fill="#9CA3AF" />
      <circle cx="40" cy="4" r="4" fill="#7C3AED" />
      <circle cx="40" cy="4" r="2" fill="#A78BFA" />
      {/* Mouth */}
      <rect x="28" y="44" width="24" height="4" rx="2" fill="#6B7280" />
      <rect x="30" y="44" width="8" height="4" rx="2" fill="#9CA3AF" />
    </svg>
  );
}

export function Tata({ size = 72 }: { size?: number }) {
  // V's BT21: heart-shaped red alien face, yellow star on forehead, round body
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="TATA - V's BT21 character"
    >
      {/* Body */}
      <ellipse cx="40" cy="64" rx="20" ry="14" fill="#E53E3E" />
      {/* Heart-shaped head */}
      {/* Left lobe */}
      <circle cx="28" cy="28" r="16" fill="#FC5656" />
      {/* Right lobe */}
      <circle cx="52" cy="28" r="16" fill="#FC5656" />
      {/* Bottom triangle of heart */}
      <polygon points="12,34 68,34 40,62" fill="#FC5656" />
      {/* Forehead star */}
      <polygon
        points="40,10 42.4,17 50,17 44,21.6 46.4,28.6 40,24 33.6,28.6 36,21.6 30,17 37.6,17"
        fill="#FFD93D"
      />
      {/* Eyes */}
      <ellipse cx="30" cy="36" rx="5" ry="6" fill="#1A0533" />
      <ellipse cx="50" cy="36" rx="5" ry="6" fill="#1A0533" />
      {/* Eye shine */}
      <circle cx="32" cy="34" r="2" fill="white" />
      <circle cx="52" cy="34" r="2" fill="white" />
      {/* Smile */}
      <path
        d="M32 46 Q40 52 48 46"
        stroke="#1A0533"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Cheek blush */}
      <ellipse cx="22" cy="44" rx="5" ry="3" fill="#C53030" opacity="0.5" />
      <ellipse cx="58" cy="44" rx="5" ry="3" fill="#C53030" opacity="0.5" />
    </svg>
  );
}

export function RJ({ size = 72 }: { size?: number }) {
  // Jin's BT21: fluffy white alpaca, droopy cute eyes, round ears, scarf
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="RJ - Jin's BT21 character"
    >
      {/* Scarf */}
      <ellipse cx="40" cy="60" rx="22" ry="8" fill="#8B5CF6" />
      <ellipse cx="40" cy="58" rx="20" ry="6" fill="#A78BFA" />
      {/* Scarf knot */}
      <ellipse cx="40" cy="60" rx="6" ry="5" fill="#7C3AED" />
      {/* Body */}
      <ellipse cx="40" cy="66" rx="18" ry="12" fill="#F9FAFB" />
      {/* Fluffy chest */}
      <ellipse cx="40" cy="62" rx="14" ry="10" fill="white" />
      <ellipse cx="33" cy="63" rx="5" ry="5" fill="#F3F4F6" />
      <ellipse cx="47" cy="63" rx="5" ry="5" fill="#F3F4F6" />
      {/* Ears */}
      <ellipse cx="22" cy="22" rx="8" ry="12" fill="#F9FAFB" />
      <ellipse cx="58" cy="22" rx="8" ry="12" fill="#F9FAFB" />
      {/* Inner ear */}
      <ellipse cx="22" cy="22" rx="4" ry="7" fill="#FDB9D0" />
      <ellipse cx="58" cy="22" rx="4" ry="7" fill="#FDB9D0" />
      {/* Head */}
      <circle cx="40" cy="36" r="22" fill="white" />
      {/* Fluffy cheeks */}
      <ellipse cx="20" cy="40" rx="8" ry="7" fill="#F3F4F6" />
      <ellipse cx="60" cy="40" rx="8" ry="7" fill="#F3F4F6" />
      {/* Blush */}
      <ellipse cx="26" cy="43" rx="6" ry="3.5" fill="#FDB9D0" opacity="0.7" />
      <ellipse cx="54" cy="43" rx="6" ry="3.5" fill="#FDB9D0" opacity="0.7" />
      {/* Eyes — droopy cute */}
      <ellipse cx="32" cy="34" rx="5" ry="4" fill="#1A0533" />
      <ellipse cx="48" cy="34" rx="5" ry="4" fill="#1A0533" />
      {/* Droopy lower eyelid */}
      <path
        d="M28 37 Q32 40 36 37"
        stroke="#1A0533"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M44 37 Q48 40 52 37"
        stroke="#1A0533"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Eye shine */}
      <circle cx="34" cy="33" r="1.5" fill="white" />
      <circle cx="50" cy="33" r="1.5" fill="white" />
      {/* Nose */}
      <ellipse cx="40" cy="42" rx="4" ry="2.5" fill="#F8B4C8" />
      {/* Nostril */}
      <ellipse cx="38" cy="42" rx="1" ry="1" fill="#E879A0" />
      <ellipse cx="42" cy="42" rx="1" ry="1" fill="#E879A0" />
    </svg>
  );
}

export function Cooky({ size = 72 }: { size?: number }) {
  // Jungkook's BT21: pink bunny, floppy ears, muscular, determined eyes
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="COOKY - Jungkook's BT21 character"
    >
      {/* Muscular body */}
      <ellipse cx="40" cy="65" rx="20" ry="14" fill="#F9A8C9" />
      {/* Chest muscles */}
      <ellipse cx="34" cy="60" rx="8" ry="9" fill="#F7AFCE" />
      <ellipse cx="46" cy="60" rx="8" ry="9" fill="#F7AFCE" />
      {/* Arms */}
      <ellipse
        cx="17"
        cy="62"
        rx="8"
        ry="12"
        fill="#F9A8C9"
        transform="rotate(-15 17 62)"
      />
      <ellipse
        cx="63"
        cy="62"
        rx="8"
        ry="12"
        fill="#F9A8C9"
        transform="rotate(15 63 62)"
      />
      {/* Floppy ears */}
      <ellipse
        cx="27"
        cy="14"
        rx="7"
        ry="16"
        fill="#F9A8C9"
        transform="rotate(-10 27 14)"
      />
      <ellipse
        cx="53"
        cy="14"
        rx="7"
        ry="16"
        fill="#F9A8C9"
        transform="rotate(10 53 14)"
      />
      {/* Inner ear */}
      <ellipse
        cx="27"
        cy="14"
        rx="3.5"
        ry="10"
        fill="#F472B6"
        transform="rotate(-10 27 14)"
      />
      <ellipse
        cx="53"
        cy="14"
        rx="3.5"
        ry="10"
        fill="#F472B6"
        transform="rotate(10 53 14)"
      />
      {/* Head */}
      <circle cx="40" cy="38" r="21" fill="#FFC0D9" />
      {/* Determined brow lines */}
      <path
        d="M26 28 L34 32"
        stroke="#1A0533"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M54 28 L46 32"
        stroke="#1A0533"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Eyes — determined slant */}
      <ellipse cx="32" cy="36" rx="5" ry="4" fill="#1A0533" />
      <ellipse cx="48" cy="36" rx="5" ry="4" fill="#1A0533" />
      {/* Eye shine */}
      <circle cx="34" cy="35" r="1.5" fill="white" />
      <circle cx="50" cy="35" r="1.5" fill="white" />
      {/* Nose */}
      <ellipse cx="40" cy="43" rx="3" ry="2" fill="#1A0533" />
      {/* Determined mouth */}
      <path
        d="M34 47 L40 45 L46 47"
        stroke="#1A0533"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Blush */}
      <ellipse cx="25" cy="42" rx="5" ry="3" fill="#F472B6" opacity="0.5" />
      <ellipse cx="55" cy="42" rx="5" ry="3" fill="#F472B6" opacity="0.5" />
    </svg>
  );
}

export function Shooky({ size = 72 }: { size?: number }) {
  // Suga's BT21: round dark brown cookie, cracked smile, googly eyes
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="SHOOKY - Suga's BT21 character"
    >
      {/* Cookie body — round */}
      <circle cx="40" cy="42" r="32" fill="#6B3A1F" />
      {/* Cookie edge highlight */}
      <circle
        cx="40"
        cy="42"
        r="32"
        stroke="#8B4A2F"
        strokeWidth="3"
        fill="none"
      />
      {/* Cookie texture dots */}
      <circle cx="28" cy="32" r="2.5" fill="#5A2E14" />
      <circle cx="52" cy="30" r="2" fill="#5A2E14" />
      <circle cx="24" cy="50" r="2" fill="#5A2E14" />
      <circle cx="56" cy="52" r="2.5" fill="#5A2E14" />
      <circle cx="44" cy="62" r="2" fill="#5A2E14" />
      <circle cx="34" cy="64" r="1.5" fill="#5A2E14" />
      {/* Chocolate chips */}
      <ellipse cx="33" cy="38" rx="4" ry="3" fill="#3B1A08" />
      <ellipse cx="50" cy="40" rx="3.5" ry="2.5" fill="#3B1A08" />
      <ellipse cx="38" cy="54" rx="3" ry="2.5" fill="#3B1A08" />
      {/* Cookie crack */}
      <path
        d="M38 18 L40 22 L37 26 L41 30 L39 35"
        stroke="#3B1A08"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      {/* Googly eyes — wide and round */}
      <circle cx="30" cy="36" r="8" fill="white" />
      <circle cx="50" cy="36" r="8" fill="white" />
      <circle cx="30" cy="36" r="4.5" fill="#1A0533" />
      <circle cx="50" cy="36" r="4.5" fill="#1A0533" />
      {/* Eye shine */}
      <circle cx="32" cy="34" r="2" fill="white" />
      <circle cx="52" cy="34" r="2" fill="white" />
      {/* Cracked smile */}
      <path
        d="M26 50 Q30 46 34 49 Q38 52 42 49 Q46 46 50 49 Q54 52 54 50"
        stroke="#3B1A08"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* BTS purple accent */}
      <circle cx="40" cy="10" r="4" fill="#8B5CF6" opacity="0.9" />
    </svg>
  );
}

export function Mang({ size = 72 }: { size?: number }) {
  // J-Hope's BT21: brown horse, pink heart-shaped mask over eyes, dancer pose
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="MANG - J-Hope's BT21 character"
    >
      {/* Dancer body — slightly tilted */}
      <ellipse
        cx="40"
        cy="63"
        rx="16"
        ry="14"
        fill="#8B4513"
        transform="rotate(-5 40 63)"
      />
      {/* Dancer arm up */}
      <ellipse
        cx="62"
        cy="48"
        rx="6"
        ry="14"
        fill="#8B4513"
        transform="rotate(-30 62 48)"
      />
      {/* Dancer arm out */}
      <ellipse
        cx="18"
        cy="56"
        rx="6"
        ry="12"
        fill="#8B4513"
        transform="rotate(20 18 56)"
      />
      {/* Mane */}
      <path d="M20 30 C16 22 18 12 26 10 C24 16 26 20 30 22" fill="#5C2D0A" />
      <path d="M24 26 C18 18 22 8 30 8 C28 14 30 18 34 20" fill="#6B3511" />
      {/* Ears */}
      <ellipse
        cx="28"
        cy="16"
        rx="5"
        ry="9"
        fill="#A0522D"
        transform="rotate(-15 28 16)"
      />
      <ellipse
        cx="52"
        cy="14"
        rx="5"
        ry="9"
        fill="#A0522D"
        transform="rotate(10 52 14)"
      />
      <ellipse
        cx="28"
        cy="16"
        rx="2.5"
        ry="5"
        fill="#FDB9D0"
        transform="rotate(-15 28 16)"
      />
      <ellipse
        cx="52"
        cy="14"
        rx="2.5"
        ry="5"
        fill="#FDB9D0"
        transform="rotate(10 52 14)"
      />
      {/* Head */}
      <ellipse cx="40" cy="34" rx="22" ry="20" fill="#A0522D" />
      {/* Snout */}
      <ellipse cx="40" cy="46" rx="12" ry="8" fill="#C68642" />
      {/* Nostrils */}
      <ellipse cx="35" cy="47" rx="3" ry="2.5" fill="#8B4513" />
      <ellipse cx="45" cy="47" rx="3" ry="2.5" fill="#8B4513" />
      {/* Heart-shaped mask */}
      {/* Left lobe of heart */}
      <circle cx="30" cy="30" r="9" fill="#EC4899" />
      {/* Right lobe */}
      <circle cx="48" cy="30" r="9" fill="#EC4899" />
      {/* Bottom of heart */}
      <polygon points="21,34 57,34 39,48" fill="#EC4899" />
      {/* Eyes on mask */}
      <ellipse cx="30" cy="30" rx="4" ry="5" fill="#1A0533" />
      <ellipse cx="48" cy="30" rx="4" ry="5" fill="#1A0533" />
      {/* Eye shine */}
      <circle cx="32" cy="28" r="1.5" fill="white" />
      <circle cx="50" cy="28" r="1.5" fill="white" />
      {/* Smile — happy J-Hope */}
      <path
        d="M30 44 Q40 50 50 44"
        stroke="#5C2D0A"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// Mapping helper
const BT21_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
  "Jimin (CHIMMY)": Chimmy,
  "RM (VAN)": Van,
  "V (TATA)": Tata,
  "Jin (RJ)": RJ,
  "Jungkook (COOKY)": Cooky,
  "Suga (SHOOKY)": Shooky,
  "J-Hope (MANG)": Mang,
};

export function getBT21Character(
  memberName: string,
): React.ComponentType<{ size?: number }> | null {
  return BT21_MAP[memberName] ?? null;
}
