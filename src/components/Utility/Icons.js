import React from "react";

export const ArrowLeft = () => (
  <svg viewBox="0 0 512 512">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
      d="M328 112L184 256l144 144"
    />
  </svg>
);

export const ArrowRight = () => (
  <svg viewBox="0 0 512 512">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M184 112l144 144-144 144"
    />
  </svg>
);

export const User = () => (
  <svg viewBox="0 0 512 512">
    <path
      fill="currentColor"
      d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z"
    />
  </svg>
);

export const Close = () => (
  <svg viewBox="0 0 512 512">
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M368 368L144 144M368 144L144 368"
    />
  </svg>
);
