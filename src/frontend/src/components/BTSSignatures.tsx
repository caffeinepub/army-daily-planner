// BTS member signature decorations — inline SVG calligraphy-style signatures
// Always renders regardless of image loading issues

interface SigPath {
  id: string;
  d: string;
}

interface SignatureProps {
  name: string;
  paths: SigPath[];
  color?: string;
  width?: number;
  height?: number;
}

function Signature({
  name,
  paths,
  color = "oklch(0.72 0.18 295)",
  width = 160,
  height = 60,
}: SignatureProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${name} signature`}
      role="img"
    >
      <title>{name} signature</title>
      {paths.map(({ id, d }) => (
        <path
          key={id}
          d={d}
          stroke={color}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      {/* Member name label underneath */}
      <text
        x="80"
        y="56"
        textAnchor="middle"
        fontSize="8"
        fill={color}
        opacity="0.6"
        fontFamily="Georgia, serif"
        letterSpacing="1"
      >
        {name}
      </text>
    </svg>
  );
}

// Stylized signature path data for each BTS member
// These are hand-crafted flowing calligraphy-inspired curves

function RMSignature() {
  return (
    <Signature
      name="RM"
      color="oklch(0.75 0.2 295)"
      paths={[
        { id: "r-body", d: "M20 15 L20 42 M20 15 Q35 13 36 22 Q37 31 20 33" },
        { id: "r-leg", d: "M20 33 Q32 33 38 42" },
        { id: "m-body", d: "M48 42 L48 15 L62 30 L76 15 L76 42" },
        { id: "flourish", d: "M15 47 Q50 52 80 47" },
        { id: "dot", d: "M85 20 Q90 18 88 22" },
      ]}
    />
  );
}

function JinSignature() {
  return (
    <Signature
      name="Jin"
      color="oklch(0.78 0.18 330)"
      paths={[
        { id: "j", d: "M22 15 L22 38 Q22 45 15 45 Q10 45 8 40" },
        { id: "i-dot", d: "M32 22 L32 42 M32 17 L32 18" },
        { id: "n", d: "M40 42 L40 25 Q40 18 52 18 Q60 18 60 25 L60 42" },
        { id: "flourish", d: "M5 50 Q32 55 65 50" },
        {
          id: "heart",
          d: "M72 18 Q75 14 79 14 Q83 14 83 18 Q83 22 72 27 Q61 22 61 18 Q61 14 65 14 Q69 14 72 18Z",
        },
      ]}
    />
  );
}

function SugaSignature() {
  return (
    <Signature
      name="Suga"
      color="oklch(0.82 0.1 200)"
      paths={[
        {
          id: "s",
          d: "M40 20 Q20 16 18 25 Q16 34 35 32 Q52 30 50 39 Q48 48 28 46",
        },
        { id: "u", d: "M58 25 L58 38 Q58 44 65 44 Q72 44 72 38 L72 25" },
        {
          id: "g",
          d: "M80 25 Q92 25 92 33 Q92 40 80 40 Q68 40 68 33 Q68 25 80 25 M92 33 L92 46 Q92 52 82 52",
        },
        {
          id: "a",
          d: "M100 40 Q100 27 110 27 Q120 27 120 36 L120 40 M100 35 L120 35",
        },
        { id: "swoosh", d: "M12 50 Q65 56 125 50" },
      ]}
    />
  );
}

function JHopeSignature() {
  return (
    <Signature
      name="J-Hope"
      color="oklch(0.8 0.18 75)"
      paths={[
        { id: "j", d: "M20 15 L20 38 Q20 48 10 48 Q5 48 3 44" },
        { id: "h", d: "M28 15 L28 42 M28 28 L40 28 M40 15 L40 42" },
        { id: "ope", d: "M48 30 Q52 20 58 30 Q64 40 70 30" },
        {
          id: "star",
          d: "M80 20 L83 15 L86 20 L91 17 L88 22 L93 25 L87 25 L86 30 L83 25 L77 25 L82 22 Z",
        },
        { id: "flourish", d: "M0 52 Q50 57 95 52" },
      ]}
    />
  );
}

function JiminSignature() {
  return (
    <Signature
      name="Jimin"
      color="oklch(0.78 0.22 310)"
      paths={[
        { id: "j", d: "M18 15 L18 38 Q18 46 10 46" },
        { id: "i-dot", d: "M26 22 L26 42 M26 16 Q27 15 28 16" },
        {
          id: "m",
          d: "M33 25 Q33 18 42 18 Q50 18 50 25 L50 42 M50 25 Q50 18 58 18 Q66 18 66 25 L66 42",
        },
        {
          id: "in",
          d: "M73 22 L73 42 M73 16 Q74 15 75 16 M80 42 L80 25 Q80 18 90 18 Q98 18 98 25 L98 42",
        },
        { id: "flourish", d: "M8 50 Q53 56 100 50" },
        {
          id: "heart",
          d: "M110 20 Q113 16 117 16 Q121 16 121 20 Q121 24 110 29 Q99 24 99 20 Q99 16 103 16 Q107 16 110 20Z",
        },
      ]}
    />
  );
}

function VSignature() {
  return (
    <Signature
      name="V"
      color="oklch(0.72 0.18 180)"
      paths={[
        { id: "v-left", d: "M10 15 Q30 15 40 42" },
        { id: "v-right", d: "M70 15 Q50 15 40 42" },
        { id: "v-inner-left", d: "M20 20 Q40 20 50 38" },
        { id: "v-inner-right", d: "M60 20 Q40 20 50 38" },
        {
          id: "star1",
          d: "M80 10 L82 16 L88 16 L83 20 L85 26 L80 22 L75 26 L77 20 L72 16 L78 16 Z",
        },
        {
          id: "star2",
          d: "M100 18 L101.5 22 L106 22 L102.5 24.5 L104 28 L100 26 L96 28 L97.5 24.5 L94 22 L98.5 22 Z",
        },
        { id: "underline", d: "M5 50 Q45 56 85 50" },
      ]}
    />
  );
}

function JungkookSignature() {
  return (
    <Signature
      name="JK"
      color="oklch(0.7 0.2 260)"
      paths={[
        { id: "j", d: "M20 15 L20 40 Q20 48 12 48 Q7 48 5 43" },
        { id: "k", d: "M30 15 L30 42 M30 28 L45 15 M30 28 L46 42" },
        { id: "ear-left", d: "M58 30 Q58 18 65 18 Q72 18 72 30" },
        { id: "ear-right", d: "M72 30 Q72 18 79 18 Q86 18 86 30" },
        { id: "bunny-top", d: "M55 35 Q70 45 87 35" },
        { id: "bunny-face", d: "M62 36 Q62 42 70 42 Q78 42 78 36" },
        { id: "underline", d: "M2 52 Q50 58 90 52" },
        { id: "swoosh", d: "M88 52 Q100 48 110 52" },
      ]}
    />
  );
}

interface SignaturePlacement {
  name: string;
  component: React.ReactNode;
  style: React.CSSProperties;
  animClass: string;
}

export function BTSSignatures() {
  const placements: SignaturePlacement[] = [
    {
      name: "RM",
      component: <RMSignature />,
      style: {
        bottom: "22%",
        left: "3%",
        opacity: 0.85,
        animationDelay: "1.2s",
      },
      animClass: "animate-float-slow",
    },
    {
      name: "Jimin",
      component: <JiminSignature />,
      style: { top: "18%", right: "4%", opacity: 0.88, animationDelay: "0.8s" },
      animClass: "animate-float",
    },
    {
      name: "V",
      component: <VSignature />,
      style: { top: "54%", right: "5%", opacity: 0.8, animationDelay: "2s" },
      animClass: "animate-float-slow",
    },
    {
      name: "Suga",
      component: <SugaSignature />,
      style: {
        top: "28%",
        left: "2.5%",
        opacity: 0.82,
        animationDelay: "1.8s",
      },
      animClass: "animate-float",
    },
    {
      name: "Jungkook",
      component: <JungkookSignature />,
      style: {
        bottom: "10%",
        right: "7%",
        opacity: 0.82,
        animationDelay: "0.5s",
      },
      animClass: "animate-float-slow",
    },
    {
      name: "Jin",
      component: <JinSignature />,
      style: { top: "71%", left: "26%", opacity: 0.78, animationDelay: "3s" },
      animClass: "animate-float",
    },
    {
      name: "JHope",
      component: <JHopeSignature />,
      style: { top: "10%", left: "20%", opacity: 0.78, animationDelay: "2.2s" },
      animClass: "animate-float-slow",
    },
  ];

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {placements.map(({ component, style, animClass, name: memberName }) => (
        <div key={memberName} className={`absolute ${animClass}`} style={style}>
          {component}
        </div>
      ))}
    </div>
  );
}
