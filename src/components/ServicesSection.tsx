import React, { useState } from 'react';
import {
  ShieldCheck,
  FileCheck,
  Layers,
  BookOpen,
  Scale,
  Users2,
  CheckCircle,
  FileText,
  Search,
  Filter,
  UserCheck,
  CalendarCheck,
  Award,
  HeartHandshake,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { WaveGraphic } from './WaveGraphic';
import { StarburstGraphic } from './StarburstGraphic';
import policyImg from '../assets/images/vantage_policy_consulting_1791221885531.jpg';
import recruitmentImg from '../assets/images/vantage_recruitment_talent_1791221900699.jpg';

export const ServicesSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2); // default to step 3: Source & Screen

  const recruitmentSteps = [
    {
      step: 1,
      shortTitle: 'Receive Requisition',
      title: 'Receive Job Requisition',
      description: 'Intake of role specifications, organizational hierarchy, salary benchmark, and talent personas from the client.',
      deliverable: 'Role Blueprint & SLA Confirmation',
      turnaround: 'Day 1',
      icon: FileText,
    },
    {
      step: 2,
      shortTitle: 'Hiring Requirements',
      title: 'Understand Hiring Requirements',
      description: 'Deep-dive consultation into technical competencies, behavioral culture fit, reporting structure, and remote/hybrid model.',
      deliverable: 'Talent Persona Matrix',
      turnaround: 'Days 2–3',
      icon: Search,
    },
    {
      step: 3,
      shortTitle: 'Source & Screen',
      title: 'Source & Screen Candidates',
      description: 'Multi-channel sourcing across Bangladesh’s premier talent pools, executive databases, and technical communities, followed by stringent pre-screening.',
      deliverable: 'Longlist Evaluation & Initial Screening',
      turnaround: 'Days 4–7',
      icon: Filter,
    },
    {
      step: 4,
      shortTitle: 'Shortlist & Submit',
      title: 'Shortlist & Submit Profiles',
      description: 'Delivery of vetted candidate dossiers including verified career histories, salary expectations, notice period, and recruiter notes.',
      deliverable: 'Top 3–5 Curated Candidate Dossiers',
      turnaround: 'Days 8–10',
      icon: UserCheck,
    },
    {
      step: 5,
      shortTitle: 'Coordinate Interviews',
      title: 'Coordinate Interviews',
      description: 'End-to-end scheduling across international time zones, brief preparation for both hiring managers and candidates, and timely feedback loops.',
      deliverable: 'Structured Interview Logistics & Feedback',
      turnaround: 'Days 11–16',
      icon: CalendarCheck,
    },
    {
      step: 6,
      shortTitle: 'Offer & Joining',
      title: 'Offer Management & Joining Formalities',
      description: 'Negotiation support, reference checks, Bangladesh labor compliance contracts, and onboarding verification.',
      deliverable: 'Executed Offer Letter & Compliance Dossier',
      turnaround: 'Days 17–20',
      icon: Award,
    },
    {
      step: 7,
      shortTitle: 'Post-Joining',
      title: 'Post-Joining Follow-Up',
      description: 'Structured 30-day, 60-day, and 90-day check-ins with client leadership and the candidate to safeguard retention and satisfaction.',
      deliverable: '90-Day Retention Review',
      turnaround: 'Post-Hire',
      icon: HeartHandshake,
    },
  ];

  const policyPillars = [
    {
      title: 'Custom HR Manuals',
      detail: 'Tailored employee handbooks aligning company values with statutory Bangladesh labor standards.',
      icon: BookOpen,
    },
    {
      title: 'Workplace Conduct Rules',
      detail: 'Clear anti-harassment, DEI, disciplinary procedures, grievance redressal, and integrity codes.',
      icon: Scale,
    },
    {
      title: 'Recruitment & Onboarding',
      detail: 'Standardized talent assessment protocols, background vetting pipelines, and digital onboarding templates.',
      icon: Users2,
    },
    {
      title: 'Performance Management',
      detail: 'KPI frameworks, quarterly OKR architectures, appraisal metrics, and 360-degree review roadmaps.',
      icon: Layers,
    },
    {
      title: 'Leave & Benefits Structures',
      detail: 'Statutory annual leave, earned leave, provident fund/gratuity blueprints, and health benefits setups.',
      icon: ShieldCheck,
    },
    {
      title: 'Compliance Documentation',
      detail: 'Bangladesh Labor Act 2006 (and Labor Rules 2015) audit-proof contracts and legal audit checklists.',
      icon: FileCheck,
    },
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[var(--color-bg-alt)] overflow-hidden">
      <WaveGraphic position="top-right" opacity={0.25} />
      <WaveGraphic position="bottom-left" opacity={0.2} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-[#2FA189]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#2FA189]">
              Core Specializations
            </span>
            <span className="h-0.5 w-8 bg-[#2FA189]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[var(--color-text-heading)]">
            Strategic HR &amp; Talent Solutions
          </h2>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-[var(--color-text-muted)]">
            Tailored human resource frameworks and executive talent solutions designed for companies demanding global standards with local precision.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* FEATURE A: HR Policy Development */}
        {/* ========================================================================= */}
        <div className="mb-24 lg:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2FA189]/10 text-[#2FA189] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Feature A · Organizational Architecture</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[var(--color-text-heading)] leading-none">
                HR Policy Development
              </h3>

              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                Build an audit-proof, high-performing organization. We draft and calibrate custom HR manuals, workplace conduct rules, recruitment and onboarding frameworks, performance management systems, leave and benefits structures, and regulatory compliance documentation—all fully customized to your corporate DNA.
              </p>

              {/* Required Two Shield-With-Checkmark Highlight Cards */}
              <div className="space-y-4 pt-2">
                {/* Shield Card 1 */}
                <div className="p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[#2FA189] transition-colors shadow-sm group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#2FA189]/15 text-[#2FA189] flex items-center justify-center group-hover:bg-[#2FA189] group-hover:text-white transition-colors">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-[var(--color-text-heading)] leading-snug">
                        Custom HR Manuals, Workplace Rules &amp; Recruitment Policies
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                        Designed for your unique organizational culture, operational realities, and complete legal compliance under Bangladesh labor statutes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Shield Card 2 */}
                <div className="p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[#2FA189] transition-colors shadow-sm group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#14284B]/15 dark:bg-[#2FA189]/15 text-[#14284B] dark:text-[#2FA189] flex items-center justify-center group-hover:bg-[#14284B] group-hover:text-white transition-colors">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-[var(--color-text-heading)] leading-snug">
                        Performance Management, Leave &amp; Benefits Frameworks
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                        Structured appraisal systems, statutory benefit matrices, and end-to-end compliance implementation support for foreign and domestic ventures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Policy Deliverables Mini Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {policyPillars.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border-subtle)] text-xs"
                  >
                    <p className="font-semibold text-[var(--color-text-main)] flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#2FA189]" />
                      <span>{p.title}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Collage: Image with rounded corners and hover zoom */}
            <div className="lg:col-span-6 relative">
              <div className="relative group overflow-hidden rounded-3xl border-2 border-[var(--color-border)] shadow-xl bg-[var(--color-surface)]">
                <img
                  src={policyImg}
                  alt="Corporate HR policy manuals, legal frameworks and consultation desk"
                  className="w-full h-80 sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Teal Overlay Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#091513]/90 via-[#091513]/25 to-transparent" />

                {/* Floating Tag Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[var(--color-surface)]/90 backdrop-blur-md border border-[var(--color-border)] shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-widest text-[#2FA189] font-bold">
                        100% Customized Deliverable
                      </p>
                      <p className="text-sm font-semibold text-[var(--color-text-heading)] mt-0.5">
                        Bangladesh Labor Act 2006 &amp; Labor Rules 2015 Harmonized
                      </p>
                    </div>
                    <StarburstGraphic size={28} color="#2FA189" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FEATURE B: End-to-End Recruitment */}
        {/* ========================================================================= */}
        <div className="relative">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2FA189]/10 text-[#2FA189] text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Feature B · Talent Acquisition Workflow</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[var(--color-text-heading)] leading-none">
                End-to-End Recruitment
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[var(--color-text-muted)]">
                A seamless 7-stage hiring lifecycle engineered for speed, accuracy, and international governance. From initial requisition intake to 90-day retention follow-ups.
              </p>
            </div>

            {/* Collage Thumbnail */}
            <div className="lg:col-span-5 relative">
              <div className="group overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-md bg-[var(--color-surface)] h-44 sm:h-52 relative">
                <img
                  src={recruitmentImg}
                  alt="Executive interview and candidate assessment"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2FA189]">
                    Vetted Candidates
                  </span>
                  <p className="text-sm font-medium">Over 20,000+ Screened Profiles in BD</p>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Horizontal Process Timeline (Desktop Scroll / Responsive Grid) */}
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-6 border-b border-[var(--color-border-subtle)] mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-mono tracking-wider font-semibold text-[#2FA189]">
                  Interactive Roadmap
                </span>
                <span className="text-xs text-[var(--color-text-muted)]">
                  · Select any step to inspect delivery standards
                </span>
              </div>
              <span className="text-xs font-medium text-[var(--color-text-muted)] hidden sm:inline">
                Step {activeStep + 1} of 7
              </span>
            </div>

            {/* Horizontal Timeline Steps Bar */}
            <div className="overflow-x-auto pb-4 no-scrollbar">
              <div className="flex items-center gap-2 sm:gap-3 min-w-[760px]">
                {recruitmentSteps.map((s, idx) => {
                  const IconComp = s.icon;
                  const isCurrent = activeStep === idx;
                  const isCompleted = idx < activeStep;

                  return (
                    <button
                      key={s.step}
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={`flex-1 flex flex-col items-center p-3 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                        isCurrent
                          ? 'bg-[#2FA189]/15 border-[#2FA189] shadow-sm'
                          : isCompleted
                          ? 'bg-[var(--color-surface-hover)] border-[var(--color-border)] opacity-85 hover:opacity-100'
                          : 'border-[var(--color-border-subtle)] hover:bg-[var(--color-surface-hover)] opacity-70 hover:opacity-95'
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 font-display text-base transition-colors ${
                          isCurrent
                            ? 'bg-[#2FA189] text-white'
                            : 'bg-[var(--color-bg)] text-[var(--color-text-muted)]'
                        }`}
                      >
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#2FA189]">
                        0{s.step}
                      </span>
                      <span
                        className={`text-xs font-medium line-clamp-1 mt-0.5 ${
                          isCurrent
                            ? 'text-[var(--color-text-heading)] font-semibold'
                            : 'text-[var(--color-text-muted)]'
                        }`}
                      >
                        {s.shortTitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Step Detail Inspector */}
            <div className="mt-6 p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border-subtle)]">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-[#2FA189] text-white">
                      Stage 0{recruitmentSteps[activeStep].step}
                    </span>
                    <span className="text-xs font-medium text-[var(--color-text-muted)]">
                      Typical SLA: {recruitmentSteps[activeStep].turnaround}
                    </span>
                  </div>
                  <h4 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-[var(--color-text-heading)]">
                    {recruitmentSteps[activeStep].title}
                  </h4>
                  <p className="mt-2 text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                    {recruitmentSteps[activeStep].description}
                  </p>
                </div>

                <div className="md:col-span-4 p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#2FA189] font-semibold">
                    Core Milestone
                  </p>
                  <p className="text-sm font-semibold text-[var(--color-text-heading)] mt-1">
                    {recruitmentSteps[activeStep].deliverable}
                  </p>
                  <div className="mt-3 pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveStep((prev) => (prev < recruitmentSteps.length - 1 ? prev + 1 : 0))
                      }
                      className="text-xs font-semibold text-[#2FA189] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Next Stage</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] text-[var(--color-text-muted)]">
                      Fast Track Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
