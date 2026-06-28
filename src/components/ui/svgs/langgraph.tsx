import type { SVGProps } from "react";

const LangGraph = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path
      d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"
      fill="#1C1C1E"
    />
    <g stroke="#FF7A00" strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="translate(28, 28)">
      {/* Node Paths */}
      <path d="M40 100 L100 50 L160 100 L100 150 Z" stroke="#00C787" strokeWidth="10" />
      <line x1="100" y1="50" x2="100" y2="150" />
      <line x1="40" y1="100" x2="160" y2="100" />
      {/* Agent Outer Rings */}
      <circle cx="100" cy="50" r="14" fill="#1C1C1E" stroke="#00C787" strokeWidth="8"/>
      <circle cx="40" cy="100" r="14" fill="#1C1C1E" stroke="#FF7A00" strokeWidth="8"/>
      <circle cx="160" cy="100" r="14" fill="#1C1C1E" stroke="#FF7A00" strokeWidth="8"/>
      <circle cx="100" cy="150" r="14" fill="#1C1C1E" stroke="#3A86FF" strokeWidth="8"/>
    </g>
  </svg>
);

export { LangGraph };