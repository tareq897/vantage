import React, { useState } from 'react';
import { Building, Sparkles, ExternalLink } from 'lucide-react';
import skylineBannerImg from '../assets/images/vantage_skyline_corporate_1791221913693.jpg';

export const PartnersSection: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  /**
   * DEVELOPER NOTE:
   * To supply custom vector or PNG logos:
   * 1. Place logo assets in /public/partners/ or /src/assets/partners/
   * 2. Replace the SVG icons in the partner items below with <img src="/partners/triedge.svg" />
   */
  const partners = [
    {
      id: 'triedge',
      name: 'TriEdge Ventures Ltd.',
      sector: 'Venture Capital & Technology Investment',
      engagement: 'Executive Search & Strategic HR Policy',
      tag: 'Strategic Client',
      badgeLetter: 'TE',
    },
    {
      id: 'kfl',
      name: 'KFL Solartech Limited',
      sector: 'Renewable Energy & CleanTech Infrastructure',
      engagement: 'Engineering Talent Acquisition & Payroll Compliance',
      tag: 'Enterprise Partner',
      badgeLetter: 'KFL',
    },
    {
      id: 'solution9',
      name: 'Solution9',
      sector: 'Enterprise Software & Cloud Systems',
      engagement: 'Offshore Team Sourcing & Performance Framework',
      tag: 'Tech Client',
      badgeLetter: 'S9',
    },
    {
      id: 'partner4',
      name: '[Partner 4 Logo Space]',
      secondaryTitle: 'Apex Global Technologies / Client',
      sector: 'International Corporate Enterprise',
      engagement: 'Cross-Border Talent Deployment',
      tag: 'Partner Slot Available',
      badgeLetter: 'VR+',
      isPlaceholder: true,
    },
  ];

  // Repeat array twice to create a seamless marquee loop
  const marqueeItems = [...partners, ...partners];

  return (
    <section id="partners" className="relative py-24 md:py-32 overflow-hidden bg-[#091513]">
      {/* Black-and-White Corporate Skyline Banner with Dark Teal Tint Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={skylineBannerImg}
          alt="Corporate skyline and modern business architecture"
          className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091513] via-[#091513]/70 to-[#091513]" />
        <div className="absolute inset-0 bg-[#14284B]/30 mix-blend-color" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2FA189]/15 border border-[#2FA189]/30 text-[#2FA189] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trusted By Leading Enterprises</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
            PARTNERS &amp; CLIENTS
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-300">
            Empowering visionary domestic institutions and multinational corporations through disciplined talent advisory.
          </p>
        </div>

        {/* Marquee Scroller Wrapper */}
        <div className="relative overflow-hidden py-6 border-y border-white/10 bg-black/40 backdrop-blur-md rounded-2xl">
          {/* Subtle gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="animate-marquee flex items-center gap-6 sm:gap-10">
            {marqueeItems.map((p, idx) => {
              const tooltipKey = `${p.id}-${idx}`;
              const isHovered = activeTooltip === tooltipKey;

              return (
                <div
                  key={tooltipKey}
                  onMouseEnter={() => setActiveTooltip(tooltipKey)}
                  onMouseLeave={() => setActiveTooltip(null)}
                  className="relative flex-shrink-0 group cursor-pointer"
                >
                  {/* Partner Brand Box */}
                  <div className="w-64 sm:w-72 p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-[#2FA189] group-hover:bg-[#102420]/80 group-hover:shadow-lg group-hover:shadow-[#2FA189]/20">
                    <div className="flex items-center gap-3.5">
                      {/* Monogram / Logo Mark (Grayscale default -> Color on hover) */}
                      <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center filter grayscale group-hover:grayscale-0 group-hover:bg-[#2FA189]/20 group-hover:border-[#2FA189] transition-all duration-300">
                        <span className="font-display text-lg font-bold text-slate-400 group-hover:text-[#2FA189] transition-colors">
                          {p.badgeLetter}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="font-display text-base sm:text-lg uppercase tracking-wide text-slate-300 group-hover:text-white transition-colors truncate">
                          {p.name}
                        </p>
                        <p className="text-[11px] text-slate-400 group-hover:text-emerald-300 transition-colors truncate">
                          {p.sector}
                        </p>
                      </div>
                    </div>

                    {/* Active Tooltip Popover on Hover */}
                    {isHovered && (
                      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 p-3 rounded-xl bg-[#0E1E1B] border border-[#2FA189] text-white shadow-2xl z-30 pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#2FA189] font-semibold mb-1">
                          <span>{p.tag}</span>
                          <span>Dhaka &middot; Global</span>
                        </div>
                        <p className="text-xs font-semibold text-white">{p.name}</p>
                        <p className="text-[11px] text-slate-300 mt-0.5">{p.engagement}</p>
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0E1E1B] border-r border-b border-[#2FA189] transform rotate-45" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Developer / Partner Supply Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400">
            {/* DEVELOPER COMMENT: Replace placeholder slots with client partner vector logos */}
            Hover over any partner badge to view engagement scope. Additional partner logos will populate into this marquee.
          </p>
        </div>
      </div>
    </section>
  );
};
