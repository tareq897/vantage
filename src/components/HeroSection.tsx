import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import { WaveGraphic } from './WaveGraphic';
import { StarburstGraphic } from './StarburstGraphic';
import heroSkyscraperImg from '../assets/images/vantage_hero_skyscraper_1791221856187.jpg';

export const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 lg:py-0"
    >
      {/* Background Skyscraper with Parallax & Teal Tint Filter */}
      <div
        className="absolute inset-0 z-0 will-change-transform scale-105"
        style={{
          transform: `translate3d(0, ${scrollY * 0.22}px, 0)`,
        }}
      >
        <img
          src={heroSkyscraperImg}
          alt="Modern architectural glass skyscraper tower representing global corporate excellence"
          className="w-full h-full object-cover object-center filter saturate-110 contrast-105"
          referrerPolicy="no-referrer"
        />

        {/* Teal & Midnight Navy Cinematic Scrim Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#091513]/85 via-[#102420]/75 to-[var(--color-bg)] mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#091513]/90 via-[#14284B]/60 to-[#091513]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2FA189]/25 via-transparent to-transparent" />
      </div>

      {/* Brand Deck Wave Line Art in Corners */}
      <WaveGraphic position="top-right" className="opacity-40" />
      <WaveGraphic position="bottom-left" className="opacity-25" />

      {/* Decorative Starburst Accent */}
      <div className="absolute top-28 right-8 md:top-36 md:right-24 z-10 hidden sm:block">
        <StarburstGraphic size={36} color="#2FA189" animated />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 md:pt-16">
        {/* International Audience Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B4D43]/60 border border-[#2FA189]/30 backdrop-blur-md mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#2FA189]" />
          <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-emerald-200">
            Global HR Advisory & Talent Acquisition · Bangladesh
          </span>
        </div>

        {/* Giant Headline: Bebas Neue / Condensed Tall Display */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-tight font-extrabold uppercase text-white leading-none drop-shadow-md select-none">
            VANTAGE
          </h1>

          <div className="relative mt-1 sm:mt-2 mb-6 inline-block">
            <span className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider uppercase text-[#2FA189] drop-shadow-sm">
              HR SOLUTION BD
            </span>
            {/* Animated Teal Underline */}
            <div className="h-1.5 md:h-2 w-full bg-gradient-to-r from-transparent via-[#2FA189] to-transparent rounded-full mt-1.5 animate-pulse" />
          </div>
        </div>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-light text-slate-200 mt-2 mb-10 tracking-wide leading-relaxed">
          &ldquo;The Right Talent, Handpicked for Your Business&rdquo;
        </p>

        {/* Trust Badges / Value Markers for International Companies */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-10 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/10">
            <ShieldCheck className="w-4 h-4 text-[#2FA189]" />
            <span>Labor Act Compliant</span>
          </div>
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/10">
            <Compass className="w-4 h-4 text-[#2FA189]" />
            <span>Bilingual Executive Sourcing</span>
          </div>
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#2FA189]" />
            <span>Global Corporate SLAs</span>
          </div>
        </div>

        {/* Two CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm md:text-base font-bold uppercase tracking-wider text-white bg-[#2FA189] hover:bg-[#207764] rounded-xl shadow-lg hover:shadow-[#2FA189]/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>Request a Proposal</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm md:text-base font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl transition-all duration-200 hover:scale-[1.02]"
          >
            <span>Explore Services</span>
          </a>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#overview"
        aria-label="Scroll to Company Overview"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-slate-300 hover:text-[#2FA189] transition-colors group cursor-pointer"
      >
        <span className="text-[11px] uppercase tracking-widest font-medium opacity-75 group-hover:opacity-100">
          Scroll to explore
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 group-hover:border-[#2FA189] flex items-start justify-center p-1.5 transition-colors">
          <div className="w-1.5 h-2.5 bg-[#2FA189] rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};
