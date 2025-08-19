import * as React from "react";

export const UserIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={29}
    fill="none"
    {...props}
  >
    <path fill="#210045" d="M25.5 9a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z" />
    <path
      fill="#210045"
      d="M27.814 20.515C27.053 19.945 22.974 17 16.5 17S5.938 19.951 5.186 20.515C.607 23.949.5 28.2.5 29h32c0-.8-.107-5.05-4.686-8.485Z"
    />
  </svg>
);
