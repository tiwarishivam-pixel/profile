import type { SVGProps } from "react";

const Foundry = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 17h18" />
    <path d="M5 17c0-4 4-7 7-7s7 3 7 7" />
    <path d="M12 3v7" />
    <path d="M9 6h6" />
  </svg>
);

export { Foundry };
