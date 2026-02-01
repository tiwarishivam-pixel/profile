import type { SVGProps } from "react";

const Solidity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 256"
    preserveAspectRatio="xMidYMid"
  >
    <path fill="#343434" d="M128 0 0 128l128 128 128-128L128 0z" />
    <path fill="#8C8C8C" d="M128 32 32 128l96 96 96-96-96-96z" />
    <path fill="#141414" d="M128 64 64 128l64 64 64-64-64-64z" />
  </svg>
);

export { Solidity };
