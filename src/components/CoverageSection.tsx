import React, { useState } from 'react';
import {
  UserSearch,
  Briefcase,
  GraduationCap,
  CreditCard,
  ArrowUpRight,
  CheckCircle2,
  Building2,
  Cpu,
  Shirt,
  DollarSign,
  HeartPulse,
} from 'lucide-react';
import { WaveGraphic } from './WaveGraphic';
import { StarburstGraphic } from './StarburstGraphic';

export const CoverageSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const coverageItems = [
    {
      id: 'talent-acquisition',
      title: 'Talent Acquisition',
      subtitle: 'Executive & Specialized Sourcing',
      icon: UserSearch,
      accentColor: '#2FA189',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', // Fallback URL with styled fallback container
      summary:
        'From C-suite leaders and niche engineering leads to entry-level mass hiring cohorts.',
      hoverDescription:
        'Targeted headhunting, bespoke technical assessments, bilingual fluency vetting, and background verification designed for multinational operating units.',
      capabilities: [
        'Executive Search & CXO Roles',
        'Tech & Software Engineers',
        'Offshore Staffing & BPO Leads',
        'Mid-Level Functional Managers',
      ],
      deliverable: 'Avg. 10-14 Days to First Qualified Shortlist',
    },
    {
      id: 'hr-consulting',
      title: 'HR Consulting',
      subtitle: 'Strategic Org Architecture',
      icon: Briefcase,
      accentColor: '#14284B',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
      summary:
        'Organizational structuring, statutory compliance audits, job grading, and workforce planning.',
      hoverDescription:
        'We help international ventures establish compliant legal frameworks, performance management pipelines, and culture harmonization in Bangladesh.',
      capabilities: [
        'Labor Law & Statutory Audits',
        'Compensation & Benefits Benchmarking',
        'Organizational Restructuring',
        'Workplace Culture Diagnostics',
      ],
      deliverable: 'Customized Implementation Roadmap',
    },
    {
      id: 'training-development',
      title: 'Training & Development',
      subtitle: 'Workforce Capability Uplift',
      icon: GraduationCap,
      accentColor: '#1B4D43',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      summary:
        'Executive coaching, workplace ethics, and cross-cultural communication training for local teams.',
      hoverDescription:
        'Prepare your Bangladesh teams for frictionless collaboration with overseas management, European & North American clients, and agile workflows.',
      capabilities: [
        'Global Business Communication',
        'Leadership & Supervisory Coaching',
        'POSH & Workplace Ethics Seminars',
        'Performance Optimization Bootcamps',
      ],
      deliverable: 'Measurable Skill Gap Closures',
    },
    {
      id: 'payroll-service',
      title: 'Payroll Service',
      subtitle: 'Compliant & Timely Disbursements',
      icon: CreditCard,
      accentColor: '#2FA189',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      summary:
        'Automated payroll calculation, statutory deductions (TDS, PF), pay slips, and compliant disbursement.',
      hoverDescription:
        'Eliminate compliance risks and administrative overhead. We manage monthly payroll cycles with complete banking, tax withholding, and labor registry compliance.',
      capabilities: [
        'Tax Deducted at Source (TDS) Filing',
        'Provident Fund & Gratuity Ledgers',
        'Confidential Pay Slip Distribution',
        'Multi-Currency Expatriate Support',
      ],
      deliverable: '100% On-Time Statutory Audit Trails',
    },
  ];

  const industrySectors = [
    { name: 'Tech & Offshore Development', icon: Cpu },
    { name: 'RMG, Apparel & Supply Chain', icon: Shirt },
    { name: 'Banking, FinTech & NBFI', icon: DollarSign },
    { name: 'Healthcare & Pharmaceuticals', icon: HeartPulse },
    { name: 'Foreign Subsidiaries & Conglomerates', icon: Building2 },
  ];

  return (
    <section id="coverage" className="relative py-24 md:py-32 bg-[var(--color-bg)] overflow-hidden">
      <WaveGraphic position="bottom-right" opacity={0.3} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-[#2FA189]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#2FA189]">
              Scope &amp; Reach
            </span>
            <span className="h-0.5 w-8 bg-[#2FA189]" />
          </div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[var(--color-text-heading)]">
            COVERAGE
          </h2>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            End-to-end talent and industry coverage across Bangladesh and beyond. From executive search to entry-level recruitment, we serve diverse sectors with precision.
          </p>
        </div>

        {/* 4 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coverageItems.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = activeCard === idx;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                className="group relative flex flex-col justify-between rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[#2FA189] transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden min-h-[420px] p-7"
              >
                {/* Background Glow on hover */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#2FA189]/15 blur-2xl group-hover:bg-[#2FA189]/25 transition-all duration-300" />

                {/* Top Section: Icon + Subtitle */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center text-[#2FA189] group-hover:bg-[#2FA189] group-hover:text-white transition-colors duration-300 shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#2FA189]">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-text-muted)]">
                    {item.subtitle}
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-[var(--color-text-heading)] mt-1 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* Middle / Hover-Reveal Content */}
                <div className="relative z-10 my-4 pt-4 border-t border-[var(--color-border-subtle)] space-y-2">
                  <p className="text-xs text-[var(--color-text-main)] font-medium leading-relaxed italic bg-[var(--color-bg)]/80 p-2.5 rounded-lg border border-[var(--color-border-subtle)]">
                    &ldquo;{item.hoverDescription}&rdquo;
                  </p>

                  <div className="pt-2 space-y-1.5">
                    {item.capabilities.slice(0, 3).map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2FA189] flex-shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA / Milestone */}
                <div className="relative z-10 pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#2FA189] font-medium">
                    {item.deliverable}
                  </span>
                  <a
                    href="#contact"
                    className="w-8 h-8 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] group-hover:bg-[#2FA189] group-hover:text-white transition-colors"
                    aria-label={`Inquire about ${item.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industry Sector Expertise Band */}
        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-[#2FA189] font-semibold">
                Sectors in Demand
              </span>
              <h4 className="font-display text-2xl uppercase tracking-wide text-[var(--color-text-heading)] mt-0.5">
                Specialized Talent Verticals
              </h4>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {industrySectors.map((sec, idx) => {
                const SecIcon = sec.icon;
                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border-subtle)] text-xs font-medium text-[var(--color-text-main)]"
                  >
                    <SecIcon className="w-3.5 h-3.5 text-[#2FA189]" />
                    <span>{sec.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
