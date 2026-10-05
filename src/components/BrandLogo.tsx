import React from 'react';

interface BrandLogoProps {
  className?: string;
  isFooter?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', isFooter = false }) => {
  return (
    /**
     * DEVELOPER NOTE:
     * When you receive the final vector or PNG logo file:
     * 1. Place your logo file in /src/assets/logo.svg or /public/logo.png
     * 2. Replace this placeholder component markup with:
     *    <img src="/logo.svg" alt="Vantage HR Solution BD" className="h-10 w-auto" />
     */
    <a
      href="#hero"
      aria-label="Vantage HR Solution BD Home"
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-90 ${className}`}
    >
      {/* VR Monogram Crest */}
      <div className="relative flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-lg bg-gradient-to-br from-[#1B4D43] via-[#14284B] to-[#0E1E1B] border border-[#2FA189]/40 shadow-inner group-hover:border-[#2FA189] transition-colors">
        <span className="font-display text-xl md:text-2xl text-[#2FA189] font-bold tracking-tight">
          VR
        </span>
        {/* Subtle corner sparkle */}
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#2FA189] animate-pulse" />
      </div>

      {/* Wordmark */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-display text-xl md:text-2xl tracking-wider text-[var(--color-text-heading)] font-bold">
            VANTAGE
          </span>
          <span className="text-[10px] uppercase font-semibold text-[#2FA189] bg-[#2FA189]/10 px-1 py-0.5 rounded tracking-widest border border-[#2FA189]/20">
            BD
          </span>
        </div>
        <span className="text-[10px] md:text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--color-text-muted)] group-hover:text-[#2FA189] transition-colors leading-tight">
          HR SOLUTION
        </span>
      </div>
    </a>
  );
};
