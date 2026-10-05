import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
  Clock,
  Send,
  CheckCircle2,
  Globe2,
  Sparkles,
  ArrowRight,
  RefreshCw,
} from 'lucide-react';
import { WaveGraphic } from './WaveGraphic';
import { StarburstGraphic } from './StarburstGraphic';
import { InquiryFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    companyName: '',
    country: 'United States',
    email: '',
    phone: '',
    serviceInterest: 'Recruitment',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const countries = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'United Arab Emirates',
    'Singapore',
    'Netherlands',
    'Saudi Arabia',
    'Malaysia',
    'Japan',
    'Bangladesh',
    'Other International Location',
  ];

  const services = [
    'Recruitment',
    'Policy Development',
    'HR Consulting',
    'Training',
    'Payroll',
    'Full-Suite Package',
  ] as const;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.companyName.trim()) {
      setErrorMessage('Please fill in your name, company, and valid corporate email.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please enter a valid business email address.');
      return;
    }

    setIsSubmitting(true);
    // Simulate real brief dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      country: 'United States',
      email: '',
      phone: '',
      serviceInterest: 'Recruitment',
      message: '',
    });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[var(--color-bg)] overflow-hidden">
      <WaveGraphic position="top-right" opacity={0.3} />
      <WaveGraphic position="bottom-left" opacity={0.25} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-[#2FA189]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#2FA189]">
              Engagement &amp; Inquiry
            </span>
            <span className="h-0.5 w-8 bg-[#2FA189]" />
          </div>

          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[var(--color-text-heading)]">
            CONTACT VANTAGE
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            Ready to strengthen your HR function? We're here to help you build a high-performing, policy-driven organization. Reach out today to discuss your requirements, receive a tailored proposal, and begin your engagement with our expert team.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Channels (Left) + Inquiry Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Response Banner */}
            <div className="p-6 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#2FA189]/15 border border-[#2FA189]/30 flex items-center justify-center text-[#2FA189] flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#2FA189] font-bold">
                    Global SLA Guarantee
                  </span>
                  <h3 className="font-display text-2xl uppercase tracking-wide text-[var(--color-text-heading)] mt-0.5">
                    We Respond Within One Business Day
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1 leading-relaxed">
                    Operating out of Dhaka (GMT+6) with dedicated communication windows aligned to North American, European, and Asia-Pacific working hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:info.vantagehrsolution@gmail.com"
                className="flex items-center gap-4 p-5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[#2FA189] transition-all duration-200 group shadow-sm hover:shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-[#2FA189]/10 text-[#2FA189] flex items-center justify-center group-hover:bg-[#2FA189] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[var(--color-text-muted)] font-medium">Direct Email</p>
                  <p className="text-sm sm:text-base font-semibold text-[var(--color-text-heading)] group-hover:text-[#2FA189] transition-colors truncate">
                    info.vantagehrsolution@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone / WhatsApp */}
              <div className="p-5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#14284B]/10 dark:bg-[#2FA189]/10 text-[#14284B] dark:text-[#2FA189] flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-[var(--color-text-muted)] font-medium">Phone &amp; WhatsApp</p>
                    <p className="text-sm sm:text-base font-semibold text-[var(--color-text-heading)]">
                      +880 135-2563803
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[var(--color-border-subtle)]">
                  {/* Click to Call */}
                  <a
                    href="tel:+8801352563803"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-main)] hover:bg-[var(--color-surface-hover)] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#2FA189]" />
                    <span>Click to Call</span>
                  </a>

                  {/* Direct WhatsApp */}
                  <a
                    href="https://wa.me/8801352563803?text=Hello%20Vantage%20HR%20Solution%2C%20I%20would%20like%20to%20discuss%20an%20HR%20or%20recruitment%20proposal."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/vantage-hr-solution-bd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[#0A66C2] transition-all duration-200 group shadow-sm hover:shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0A66C2]/15 text-[#0A66C2] flex items-center justify-center group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[var(--color-text-muted)] font-medium">Official Company Page</p>
                  <p className="text-sm sm:text-base font-semibold text-[var(--color-text-heading)] group-hover:text-[#0A66C2] transition-colors truncate">
                    linkedin.com/company/vantage-hr-solution-bd
                  </p>
                </div>
              </a>
            </div>

            {/* International Client Reassurance */}
            <div className="p-5 rounded-2xl bg-[#14284B] text-white border border-[#2FA189]/40 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Globe2 className="w-4 h-4 text-[#2FA189]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2FA189]">
                  Offshore Engagement Protocols
                </span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                We accept inquiries from global corporations, offshore software houses, international NGOs, and venture investors seeking dedicated HR advisory and talent fulfillment in Bangladesh.
              </p>
            </div>
          </div>

          {/* Right Column: Tailored Proposal Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-10 shadow-lg relative">
              <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-5 mb-6">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-[var(--color-text-heading)]">
                    Request a Customized Proposal
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1">
                    Tell us about your headcount or HR consulting objectives.
                  </p>
                </div>
                <StarburstGraphic size={32} color="#2FA189" />
              </div>

              {submitted ? (
                /* Submission Confirmation Banner */
                <div className="p-8 rounded-2xl bg-[var(--color-bg)] border border-[#2FA189] text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-[#2FA189]/15 border border-[#2FA189] flex items-center justify-center text-[#2FA189] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-3xl uppercase tracking-wider text-[var(--color-text-heading)]">
                    Proposal Request Received
                  </h4>
                  <p className="text-sm text-[var(--color-text-muted)] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[var(--color-text-heading)]">{formData.fullName}</strong>. A Vantage HR Senior Consultant will review your requirements for <strong className="text-[#2FA189]">{formData.companyName}</strong> and send a tailored proposal to <strong className="text-[var(--color-text-heading)]">{formData.email}</strong> within one business day.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="https://wa.me/8801352563803?text=Hello%20Vantage%20HR%20Solution%2C%20I%20just%20submitted%20an%20inquiry%20from%20your%20website."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#20ba5a] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-semibold text-[var(--color-text-main)] hover:bg-[var(--color-surface-hover)] transition-colors"
                    >
                      <RefreshCw className="w-4 h-4 text-[#2FA189]" />
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-medium">
                      {errorMessage}
                    </div>
                  )}

                  {/* Row 1: Full Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold text-[var(--color-text-heading)] mb-1.5 uppercase tracking-wide"
                      >
                        Your Name <span className="text-[#2FA189]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-main)] placeholder-[var(--color-text-faint)] text-sm focus:outline-none focus:border-[#2FA189] focus:ring-1 focus:ring-[#2FA189] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-xs font-semibold text-[var(--color-text-heading)] mb-1.5 uppercase tracking-wide"
                      >
                        Company / Organization <span className="text-[#2FA189]">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Horizon Labs UK Ltd."
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-main)] placeholder-[var(--color-text-faint)] text-sm focus:outline-none focus:border-[#2FA189] focus:ring-1 focus:ring-[#2FA189] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Country Dropdown & Corporate Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="country"
                        className="block text-xs font-semibold text-[var(--color-text-heading)] mb-1.5 uppercase tracking-wide"
                      >
                        Country / Headquarters <span className="text-[#2FA189]">*</span>
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-main)] text-sm focus:outline-none focus:border-[#2FA189] focus:ring-1 focus:ring-[#2FA189] transition-colors"
                      >
                        {countries.map((c) => (
                          <option key={c} value={c} className="bg-[var(--color-surface)]">
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-[var(--color-text-heading)] mb-1.5 uppercase tracking-wide"
                      >
                        Corporate Email <span className="text-[#2FA189]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="s.jenkins@horizonlabs.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-main)] placeholder-[var(--color-text-faint)] text-sm focus:outline-none focus:border-[#2FA189] focus:ring-1 focus:ring-[#2FA189] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service of Interest Radio/Select */}
                  <div>
                    <label
                      htmlFor="serviceInterest"
                      className="block text-xs font-semibold text-[var(--color-text-heading)] mb-1.5 uppercase tracking-wide"
                    >
                      Service of Interest
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {services.map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, serviceInterest: srv }))
                          }
                          className={`p-2.5 rounded-xl border text-xs font-medium text-center transition-all ${
                            formData.serviceInterest === srv
                              ? 'bg-[#2FA189] text-white border-[#2FA189] shadow-sm font-semibold'
                              : 'bg-[var(--color-bg)] border-[var(--color-border-subtle)] text-[var(--color-text-main)] hover:border-[#2FA189]/40'
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-[var(--color-text-heading)] mb-1.5 uppercase tracking-wide"
                    >
                      Brief Requirements / Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details on roles to hire, timeline, or HR policy requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-main)] placeholder-[var(--color-text-faint)] text-sm focus:outline-none focus:border-[#2FA189] focus:ring-1 focus:ring-[#2FA189] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#2FA189] hover:bg-[#207764] text-white font-bold uppercase tracking-wider text-sm shadow-md hover:shadow-lg hover:shadow-[#2FA189]/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Brief...</span>
                      ) : (
                        <>
                          <span>Submit Proposal Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-[var(--color-text-muted)] mt-2">
                      Protected by strict confidentiality &amp; non-disclosure guidelines.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
