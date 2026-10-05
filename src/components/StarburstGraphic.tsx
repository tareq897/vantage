import React from 'react';

interface StarburstGraphicProps {
  className?: string;
  size?: number;
  color?: string;
  animated?: boolean;
}

export const StarburstGraphic: React.FC<StarburstGraphicProps> = ({
  className = '',
  size = 48,
  color = '#2FA189',
  animated = false,
}) => {
  return (
    <div
      aria-hidden="true"
      className={`inline-flex items-center justify-center select-none ${animated ? 'animate-slow-spin' : ''} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* 4-point primary star with secondary 45-deg facets */}
        <path
          d="M50 0 C49 26 26 49 0 50 C26 51 49 74 50 100 C51 74 74 51 100 50 C74 49 51 26 50 0 Z"
          fill={color}
        />
        <circle cx="50" cy="50" r="4" fill="#ffffff" />
      </svg>
    </div>
  );
};
