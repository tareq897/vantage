import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe2 } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['hero', 'overview', 'services', 'coverage', 'why-us', 'partners', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview', id: 'overview' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Coverage', href: '#coverage', id: 'coverage' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'Partners', href: '#partners', id: 'partners' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--color-bg)]/85 backdrop-blur-md border-b border-[var(--color-border)] shadow-md py-3'
          : 'bg-[var(--color-bg)]/40 backdrop-blur-sm border-b border-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo Lockup */}
          <div className="flex items-center">
            <BrandLogo />
          </div>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-medium"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 transition-colors ${
                    isActive
                      ? 'text-[#2FA189] font-semibold'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-heading)]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2FA189] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle + Proposal Button */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] border-r border-[var(--color-border)] pr-3 mr-1">
              <Globe2 className="w-3.5 h-3.5 text-[#2FA189]" />
              <span className="tracking-wide">Global Client Desk</span>
            </div>

            <ThemeToggle />

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs md:text-sm font-semibold tracking-wide uppercase text-white bg-[#2FA189] hover:bg-[#207764] rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA189] whitespace-nowrap"
            >
              <span>Get a Proposal</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger + Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="p-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-main)] hover:bg-[var(--color-surface)] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--color-surface)] border-b border-[var(--color-border)] px-4 pt-4 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] pb-2 border-b border-[var(--color-border-subtle)]">
            <Globe2 className="w-3.5 h-3.5 text-[#2FA189]" />
            <span>International HR & Recruitment Desk · Bangladesh</span>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#2FA189]/15 text-[#2FA189] font-semibold'
                    : 'text-[var(--color-text-main)] hover:bg-[var(--color-surface-hover)]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[var(--color-border-subtle)] flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white bg-[#2FA189] hover:bg-[#207764] rounded-lg shadow"
            >
              <span>Get a Proposal</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
