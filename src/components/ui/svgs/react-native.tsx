import type { SVGProps } from "react";

const ReactNative = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path
      d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"
      fill="#222222"
    />
    <g transform="translate(64, 64) scale(0.5)">
      <ellipse cx="128" cy="128" rx="110" ry="42" fill="none" stroke="#61dafb" strokeWidth="15" transform="rotate(0 128 128)" />
      <ellipse cx="128" cy="128" rx="110" ry="42" fill="none" stroke="#61dafb" strokeWidth="15" transform="rotate(60 128 128)" />
      <ellipse cx="128" cy="128" rx="110" ry="42" fill="none" stroke="#61dafb" strokeWidth="15" transform="rotate(120 128 128)" />
      <circle cx="128" cy="128" r="18" fill="#61dafb" />
    </g>
  </svg>
);

export { ReactNative };