import React from 'react';
import { Target, Eye, CheckCircle2, ArrowRight } from 'lucide-react';
import { WaveGraphic } from './WaveGraphic';
import { StarburstGraphic } from './StarburstGraphic';
import overviewMeetingImg from '../assets/images/vantage_overview_meeting_1791221873624.jpg';

export const OverviewSection: React.FC = () => {
  return (
    <section id="overview" className="relative py-24 md:py-32 overflow-hidden bg-[var(--color-bg)]">
      {/* Background Graphic Accents */}
      <WaveGraphic position="top-left" opacity={0.2} />
      <WaveGraphic position="bottom-right" opacity={0.25} />

      {/* Oversized Outline Watermark */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 overflow-hidden w-full text-center"
      >
        <span className="font-display text-[15vw] font-black uppercase text-transparent stroke-watermark opacity-10 dark:opacity-15 tracking-widest whitespace-nowrap">
          OVERVIEW
        </span>
      </div>

      <style>{`
        .stroke-watermark {
          -webkit-text-stroke: 1.5px currentColor;
          color: transparent;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start mb-16 text-center md:text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-[#2FA189]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#2FA189]">
              Who We Are
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[var(--color-text-heading)]">
            Empowering Organizations In Bangladesh &amp; Beyond
          </h2>
          <div className="mt-4 max-w-3xl">
            <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
              A leading hiring talent and human resource consulting firm dedicated to empowering organizations across Bangladesh. We specialize in strategic HR services, talent acquisition, policy development, and workforce management.
            </p>
          </div>
        </div>

        {/* 2-Column Grid: Left (Framed Photo), Right (Mission & Vision Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Framed Dark Meeting Room Photo with Tilted Look */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Outer Glow / Framing accent */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#1B4D43] via-[#2FA189]/30 to-[#14284B] rounded-3xl opacity-60 blur-lg group-hover:opacity-85 transition duration-500" />

              {/* Tilted frame container */}
              <div className="relative transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 ease-out rounded-2xl overflow-hidden border-2 border-[var(--color-border)] shadow-2xl bg-[#091513]">
                <img
                  src={overviewMeetingImg}
                  alt="Vantage HR executive board consultation room"
                  className="w-full h-80 sm:h-96 md:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Photo bottom label overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#2FA189] font-medium">
                        Dhaka Operations Hub
                      </p>
                      <p className="text-sm font-semibold tracking-wide">
                        Executive Talent &amp; Strategic Advisory Room
                      </p>
                    </div>
                    <StarburstGraphic size={24} color="#2FA189" />
                  </div>
                </div>
              </div>

              {/* Starburst badge accent on bottom-left */}
              <div className="absolute -bottom-4 -left-4 z-20 hidden sm:flex items-center gap-2 bg-[var(--color-surface)] border border-[var(--color-border)] px-4 py-2 rounded-xl shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-[#2FA189]" />
                <span className="text-xs font-semibold text-[var(--color-text-main)]">
                  Global Standard HR
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Mission and Vision as Two Elegant Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Mission Card */}
            <div className="relative p-7 sm:p-9 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[#2FA189]/50 transition-all duration-300 shadow-sm hover:shadow-lg group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2FA189]/10 border border-[#2FA189]/30 flex items-center justify-center text-[#2FA189] group-hover:bg-[#2FA189] group-hover:text-white transition-colors duration-300">
                  <Target className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-[var(--color-text-heading)]">
                      Our Mission
                    </h3>
                    <span className="text-[11px] font-mono text-[#2FA189] uppercase tracking-wider font-semibold">
                      01 / Purpose
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                    To deliver practical, people-focused HR solutions that drive organizational growth, foster inclusive workplace cultures, and enable businesses to unlock the full potential of their human capital.
                  </p>
                  <div className="mt-4 pt-4 border-t border-[var(--color-border-subtle)] flex items-center gap-2 text-xs font-semibold text-[#2FA189]">
                    <span>People-First Methodologies</span>
                    <span aria-hidden="true">·</span>
                    <span>Measurable ROI</span>
                    <span aria-hidden="true">·</span>
                    <span>Cultural Alignment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative p-7 sm:p-9 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[#2FA189]/50 transition-all duration-300 shadow-sm hover:shadow-lg group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#14284B]/15 border border-[#14284B]/30 flex items-center justify-center text-[#14284B] dark:text-[#52cbb2] group-hover:bg-[#14284B] group-hover:text-white transition-colors duration-300">
                  <Eye className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-[var(--color-text-heading)]">
                      Our Vision
                    </h3>
                    <span className="text-[11px] font-mono text-[#2FA189] uppercase tracking-wider font-semibold">
                      02 / Horizon
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                    To become the most trusted and impactful HR partner for organizations in Bangladesh and beyond, setting the benchmark for excellence in human resource management and consulting services.
                  </p>
                  <div className="mt-4 pt-4 border-t border-[var(--color-border-subtle)] flex items-center gap-2 text-xs font-semibold text-[#2FA189]">
                    <span>Benchmark Standards</span>
                    <span aria-hidden="true">·</span>
                    <span>Cross-Border Reach</span>
                    <span aria-hidden="true">·</span>
                    <span>Sustainable Growth</span>
                  </div>
                </div>
              </div>
            </div>

            {/* International Client Assurance note */}
            <div className="p-4 rounded-xl bg-[var(--color-bg-alt)] border border-[var(--color-border-subtle)] flex items-center justify-between text-xs sm:text-sm text-[var(--color-text-muted)]">
              <span>Looking to set up or scale operations in Bangladesh?</span>
              <a
                href="#contact"
                className="font-semibold text-[#2FA189] hover:underline inline-flex items-center gap-1"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
