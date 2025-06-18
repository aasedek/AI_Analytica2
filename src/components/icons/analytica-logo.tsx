import type { SVGProps } from 'react';

export default function AnalyticaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      aria-label="Analytica AI Logo"
      role="img"
      {...props}
    >
      <path
        d="M20 80 L50 20 L80 80 Z"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="50" cy="50" r="10" fill="currentColor" />
    </svg>
  );
}
