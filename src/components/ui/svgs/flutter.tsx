import type { SVGProps } from "react";

const Flutter = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path
      d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"
      fill="#0B1D28"
    />
    <g transform="translate(58, 48) scale(0.55)">
      <path d="M143.02 0L51.34 91.68l42.66 42.66L228.34 0h-85.32z" fill="#40c4ff" />
      <path d="M143.02 122.36L94.04 171.34l48.98 48.98H228.34l-85.32-85.32V122.36z" fill="#02569b" />
      <path d="M94.04 171.34l33.32 33.32 58.32-58.32h-42.66l-48.98 25z" fill="#0175c2" />
    </g>
  </svg>
);

export { Flutter };