import type { SVGProps } from "react";

const MongoDB = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 128 128"
    preserveAspectRatio="xMidYMid"
  >
    <path
      fill="#4FAA41"
      d="M64 2s6.7 12.6 6.7 23.5c0 8.7-2.7 16.3-6.7 23.3-4-7-6.7-14.6-6.7-23.3C57.3 14.6 64 2 64 2z"
    />
    <path
      fill="#3F9142"
      d="M64 48.8c-8.3 13.5-16.5 24.4-16.5 38.4 0 11.6 7.4 20.8 16.5 26.8 9.1-6 16.5-15.2 16.5-26.8 0-14-8.2-24.9-16.5-38.4z"
    />
    <path
      fill="#6DB33F"
      d="M64 114c-1.3 4.1-2.1 8.2-2.1 12h4.2c0-3.8-.8-7.9-2.1-12z"
    />
  </svg>
);

export { MongoDB };
