import * as React from "react";

type BackgroundProps = React.SVGProps<SVGSVGElement>;

export const Background = (props: BackgroundProps) => (
  <svg width={1920} height={1080} fill="none" {...props}>
    <g clipPath="url(#a)">
      <rect width={1920} height={1080} fill="url(#b)" rx={12} />
      <g
        stroke="#C68907"
        strokeLinecap="round"
        strokeWidth={72}
        opacity={0.08}
        style={{
          mixBlendMode: "screen",
        }}
      >
        <path d="M1082 546 879 343M879 546l203-203" />
      </g>
      <g
        stroke="#C68907"
        strokeLinecap="round"
        strokeWidth={82}
        opacity={0.21}
        style={{
          mixBlendMode: "screen",
        }}
      >
        <path d="m2013 1040-241-241M1772 1040l241-241" />
      </g>
      <circle
        cx={632}
        cy={15}
        r={145}
        stroke="#400CB9"
        strokeWidth={100}
        opacity={0.32}
        style={{
          mixBlendMode: "screen",
        }}
      />
      <g
        stroke="#C68907"
        strokeLinecap="round"
        strokeWidth={72}
        opacity={0.21}
        style={{
          mixBlendMode: "screen",
        }}
      >
        <path d="M114 252-89 49M-89 252 114 49" />
      </g>
      <circle
        cx={15.5}
        cy={770.5}
        r={98.5}
        stroke="#F9BE3E"
        strokeWidth={80}
        opacity={0.33}
        style={{
          mixBlendMode: "screen",
        }}
      />
      <circle
        cx={1478}
        cy={-48}
        r={145}
        stroke="#400CB9"
        strokeWidth={100}
        opacity={0.32}
        style={{
          mixBlendMode: "screen",
        }}
      />
      <circle
        cx={1893}
        cy={356}
        r={145}
        stroke="#400CB9"
        strokeWidth={100}
        opacity={0.32}
        style={{
          mixBlendMode: "screen",
        }}
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={960}
        x2={960}
        y1={0}
        y2={1080}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A949F2" />
        <stop offset={1} stopColor="#3304B3" />
      </linearGradient>
      <clipPath id="a">
        <rect width={1920} height={1080} fill="#fff" rx={12} />
      </clipPath>
    </defs>
  </svg>
);
