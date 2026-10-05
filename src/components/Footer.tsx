import React from 'react';
import {
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
  MapPin,
  ArrowUp,
  Sparkles,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { ThemeToggle } from './ThemeToggle';
import { StarburstGraphic } from './StarburstGraphic';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#091513] text-slate-300 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Decorative Glow & Starburst */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#2FA189]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Col 1: Brand Logo & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo isFooter />
            <p className="text-sm text-slate-400 italic font-light pt-1">
              &ldquo;The Right Talent, Handpicked for Your Business&rdquo;
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Connecting global enterprises and forward-thinking domestic organizations with elite human capital and audit-proof HR frameworks across Bangladesh.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/vantage-hr-solution-bd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vantage HR Solution BD on LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/8801352563803"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct WhatsApp Message"
                className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="mailto:info.vantagehrsolution@gmail.com"
                aria-label="Send Email to Vantage HR"
                className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#2FA189] hover:border-[#2FA189] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-lg uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#overview" className="hover:text-[#2FA189] transition-colors">
                  Overview &amp; Mission
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2FA189] transition-colors">
                  HR Policy Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#2FA189] transition-colors">
                  End-to-End Recruitment
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-[#2FA189] transition-colors">
                  Industry Coverage
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#2FA189] transition-colors">
                  Why Vantage HR
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-[#2FA189] transition-colors">
                  Partners &amp; Marquee
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#2FA189] transition-colors">
                  Contact &amp; Proposals
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-lg uppercase tracking-wider text-white">
              Dhaka Headquarters
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2FA189] flex-shrink-0 mt-0.5" />
                <span>Dhaka, Bangladesh · Serving Global Clients Across Timezones</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2FA189] flex-shrink-0" />
                <a
                  href="mailto:info.vantagehrsolution@gmail.com"
                  className="hover:text-[#2FA189] transition-colors truncate"
                >
                  info.vantagehrsolution@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2FA189] flex-shrink-0" />
                <a href="tel:+8801352563803" className="hover:text-[#2FA189] transition-colors">
                  +880 135-2563803
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a
                  href="https://wa.me/8801352563803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp: +880 135-2563803
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Theme Toggle & Back to Top (2 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start md:items-end gap-6">
            <div className="flex flex-col items-start md:items-end gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                Appearance
              </span>
              {/* Theme toggle repeat */}
              <ThemeToggle showLabel />
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top of page"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#2FA189] text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#2FA189]" />
            </button>
          </div>
        </div>

        {/* Bottom Closing Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <StarburstGraphic size={16} color="#2FA189" />
            <p>© {new Date().getFullYear()} Vantage HR Solution BD. All rights reserved.</p>
          </div>

          <p className="font-medium text-emerald-300 tracking-wide text-center md:text-right">
            The Right Talent, Handpicked for Your Business.
          </p>
        </div>
      </div>
    </footer>
  );
};
