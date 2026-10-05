import React from 'react';
import {
  Compass,
  Scale,
  Sliders,
  CheckCheck,
  Globe2,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { StarburstGraphic } from './StarburstGraphic';
import { WaveGraphic } from './WaveGraphic';

export const WhyUsSection: React.FC = () => {
  const valuePillars = [
    {
      title: 'Global Alignment, Deep Local Roots',
      description:
        'Deep local market expertise combined with globally aligned HR practices. We bridge international workplace expectations with Bangladesh’s talent nuances.',
      icon: Compass,
    },
    {
      title: 'Regulatory & Labor Law Mastery',
      description:
        'Understanding of Bangladesh’s regulatory landscape, labor laws, and workforce dynamics: delivering compliant, risk-free, and culturally relevant solutions.',
      icon: Scale,
    },
    {
      title: 'Customized End-to-End Delivery',
      description:
        'Customized, end-to-end services tailored specifically to your organization size, operating industry, headcount targets, and long-term expansion goals.',
      icon: Sliders,
    },
    {
      title: 'Measurable Outcomes & Ethics',
      description:
        'Practical implementation with measurable outcomes, a responsive support model, transparent SLAs, and an unyielding commitment to business ethics.',
      icon: CheckCheck,
    },
  ];

  /**
   * DEVELOPER / CLIENT NOTE:
   * Do NOT invent fake stats. Below are clearly marked placeholder counters
   * where you can easily swap in your firm's exact audited metrics when ready.
   */
  const statPlaceholders = [
    {
      counter: '[XX]+',
      label: 'Placements',
      caption: 'Executive & Specialized Hires',
      commentKey: 'total_placements',
    },
    {
      counter: '[XX]%',
      label: 'Retention Rate',
      caption: '90-Day Post-Hire Stability',
      commentKey: 'retention_rate',
    },
    {
      counter: '[XX]+',
      label: 'Global Engagements',
      caption: 'Multinational & Regional Clients',
      commentKey: 'global_engagements',
    },
    {
      counter: '[XX]',
      label: 'Days Avg. Turnaround',
      caption: 'Requisition to First Shortlist',
      commentKey: 'avg_time_to_hire',
    },
  ];

  return (
    <section id="why-us" className="relative py-24 md:py-32 bg-[var(--color-bg)] overflow-hidden">
      <WaveGraphic position="top-left" opacity={0.2} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navy Card with Starburst Accent */}
        <div className="relative rounded-3xl bg-[#14284B] border border-[#2FA189]/30 text-white shadow-2xl overflow-hidden p-8 sm:p-12 lg:p-16">
          {/* Subtle Background Radial Teal Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2FA189]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1B4D43]/40 rounded-full blur-3xl pointer-events-none" />

          {/* Starburst Accent in Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-0.5 w-6 bg-[#2FA189]" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#2FA189]">
                  Strategic Advantage
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
                WHY VANTAGE HR SOLUTION BD
              </h2>
            </div>

            {/* White Starburst Motif Accent */}
            <div className="hidden sm:flex flex-col items-center">
              <StarburstGraphic size={44} color="#ffffff" animated />
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#2FA189] mt-1">
                Precision
              </span>
            </div>
          </div>

          {/* 4 Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-14">
            {valuePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#2FA189]/60 hover:bg-white/[0.08] transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2FA189]/20 border border-[#2FA189]/40 flex items-center justify-center text-[#2FA189] group-hover:bg-[#2FA189] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl uppercase tracking-wide text-white group-hover:text-emerald-200 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Working with International Clients Callout Block */}
          <div className="p-7 sm:p-9 rounded-2xl bg-gradient-to-r from-[#102420] to-[#1B4D43] border border-[#2FA189]/40 mb-12 shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2FA189]/20 text-[#2FA189] text-xs font-semibold uppercase tracking-wider">
                  <Globe2 className="w-3.5 h-3.5" />
                  <span>Cross-Border Enterprise Standard</span>
                </div>
                <h4 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-white">
                  Working with International Clients
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                  We serve as your seamless, reliable partner on the ground in Bangladesh. Benefit from transparent English communication, structured international workflows, timezone adaptability across APAC, EMEA, and North America, and rigorous NDA protocols.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 flex-shrink-0">
                <div className="p-3 bg-black/25 rounded-xl border border-white/10 text-xs">
                  <div className="flex items-center gap-1.5 text-[#2FA189] font-semibold mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Timezone Aligned</span>
                  </div>
                  <p className="text-slate-300 text-[11px]">Direct overlap with global office schedules</p>
                </div>

                <div className="p-3 bg-black/25 rounded-xl border border-white/10 text-xs">
                  <div className="flex items-center gap-1.5 text-[#2FA189] font-semibold mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>NDA &amp; IP Protection</span>
                  </div>
                  <p className="text-slate-300 text-[11px]">Strict candidate data confidentiality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Clearly Marked Placeholder Counters */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs font-mono uppercase tracking-widest text-[#2FA189]">
                Audited Performance Benchmarks
              </p>
              <span className="text-[11px] text-slate-400 font-mono">
                {/* DEVELOPER COMMENT: Update placeholder metrics in WhyUsSection.tsx */}
                [Editable Metric Placeholders]
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {statPlaceholders.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center relative group hover:border-[#2FA189]/50 transition-colors"
                >
                  <p className="font-mono text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2FA189] tracking-tight">
                    {stat.counter}
                  </p>
                  <p className="font-display text-lg sm:text-xl uppercase tracking-wider text-white mt-1">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    {stat.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
