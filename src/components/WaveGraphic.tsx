import React from 'react';

interface WaveGraphicProps {
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  opacity?: number;
}

export const WaveGraphic: React.FC<WaveGraphicProps> = ({
  className = '',
  position = 'top-right',
  opacity = 0.35,
}) => {
  // Fine flowing wave line-art from brand motif
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  }[position];

  return (
    <div
      aria-hidden="true"
      className={`absolute pointer-events-none select-none z-0 ${positionClasses} ${className}`}
      style={{ opacity }}
    >
      <svg
        width="380"
        height="380"
        viewBox="0 0 380 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-48 h-48 md:w-80 md:h-80 text-[#2FA189]"
      >
        <path
          d="M0 40C80 40 140 90 190 150C240 210 290 270 380 270"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="4 2"
        />
        <path
          d="M0 80C90 80 150 130 200 190C250 250 300 310 380 310"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M0 120C100 120 160 170 210 230C260 290 310 350 380 350"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="6 3"
        />
        <path
          d="M0 160C110 160 170 210 220 270C270 330 320 390 380 390"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M0 200C120 200 180 250 230 310C280 370 330 430 380 430"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.6"
        />
      </svg>
    </div>
  );
};
