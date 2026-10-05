import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OverviewSection } from './components/OverviewSection';
import { ServicesSection } from './components/ServicesSection';
import { CoverageSection } from './components/CoverageSection';
import { WhyUsSection } from './components/WhyUsSection';
import { PartnersSection } from './components/PartnersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text-main)] transition-colors duration-300">
        {/* Subtle Brand Film Grain Texture Overlay */}
        <div
          aria-hidden="true"
          className="fixed inset-0 grain-overlay pointer-events-none z-40 opacity-[var(--color-grain-opacity)]"
        />

        {/* Sticky Glass-Blur Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main id="main-content" className="relative z-10">
          <HeroSection />
          <OverviewSection />
          <ServicesSection />
          <CoverageSection />
          <WhyUsSection />
          <PartnersSection />
          <ContactSection />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Persistent Floating WhatsApp Speed-Dial for Global Inquiries */}
        <aside
          aria-label="Direct WhatsApp Contact"
          className="fixed bottom-6 right-6 z-40"
        >
          <a
            href="https://wa.me/8801352563803?text=Hello%20Vantage%20HR%20Solution%2C%20I%20would%20like%20to%20discuss%20an%20HR%20or%20recruitment%20proposal."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp (+880 135-2563803)"
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 group"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="text-xs font-bold tracking-wide uppercase hidden sm:inline">
              Chat on WhatsApp
            </span>
          </a>
        </aside>
      </div>
    </ThemeProvider>
  );
};

export default App;
