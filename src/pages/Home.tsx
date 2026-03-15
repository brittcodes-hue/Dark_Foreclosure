import { Link } from 'react-router-dom';
import { Home, Phone, Shield, Star, Quote, ExternalLink, ChevronRight } from 'lucide-react';
import { IMAGES } from '@/assets/images';
import {
  ROUTE_PATHS,
  PHONE,
  PHONE_HREF,
  REVIEWS_URL,
  TRUST_STATS,
  TESTIMONIALS,
} from '@/lib/index';
import ContactForm from '@/components/ContactForm';

const TRUST_ICONS: Record<string, React.ReactNode> = {
  Home: <Home size={28} className="text-teal-400" />,
  Phone: <Phone size={28} className="text-teal-400" />,
  Shield: <Shield size={28} className="text-teal-400" />,
  Star: <Star size={28} className="text-teal-400" />,
};

export default function HomePage() {
  return (
    <>
      {/* SEO head handled in index.html — page-specific meta via document.title */}
      {/* Hero Section */}
      <section
        className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center text-center overflow-hidden"
        aria-label="Hero section — Foreclosure Prevention Resources"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.HERO_HOME_2}
            alt="A row of homes in a quiet Colorado neighborhood representing the communities we serve in foreclosure prevention"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Teal gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f766e]/30 via-transparent to-[#28282b]/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-600/30 border border-teal-500/40 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <Shield size={13} />
            Colorado Foreclosure Help
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 font-[Montserrat]">
            Foreclosure Prevention Resources{' '}
            <span className="text-teal-400">&amp; Support</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-10">
            Verified educational resources to help you understand your options, protect your home,
            and navigate foreclosure prevention with dignity and support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold bg-teal-600 hover:bg-teal-500 text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/50 w-full sm:w-auto justify-center"
              aria-label={`Call to get help now at ${PHONE}`}
            >
              <Phone size={18} />
              Get Help Now
            </a>
            <Link
              to={ROUTE_PATHS.FAQ}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/70 transition-all duration-200 hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              FAQ
              <ChevronRight size={18} />
            </Link>
          </div>

          <p className="mt-6 text-teal-300 text-sm font-semibold">
            <Phone size={14} className="inline mr-1.5" />
            {PHONE} — Free Consultations Available
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1 h-1.5 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* You're Not Alone Section */}
      <section className="bg-[#28282b] py-16 md:py-20" id="about">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-teal-900/50 border border-teal-700/40 text-teal-400 text-xs font-semibold uppercase tracking-widest mb-4">
                You Are Not Alone
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 font-[Montserrat] leading-tight">
                Help Is <span className="text-teal-400">Available</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-base">
                Facing foreclosure can feel overwhelming, but help is available. This page provides
                verified, trusted resources from government agencies, legal experts, and local
                organizations dedicated to supporting homeowners like you.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                You will find curated educational resources to help you understand your rights,
                explore your options, and connect with professionals who can guide you through this
                challenging time.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <img
                src={IMAGES.CONSULTATION_1}
                alt="A housing counselor helping a homeowner understand foreclosure prevention options in a professional consultation"
                className="w-full h-60 md:h-72 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#1e1e21] border-y border-teal-900/30 py-10 md:py-12" id="trust">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {TRUST_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-white/5 border border-teal-900/20 hover:border-teal-700/40 hover:bg-white/10 transition-all duration-200"
              >
                {TRUST_ICONS[stat.icon]}
                <p className="text-xs sm:text-sm font-semibold text-gray-300 leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#28282b] py-16 md:py-20" id="testimonials">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-teal-900/50 border border-teal-700/40 text-teal-400 text-xs font-semibold uppercase tracking-widest mb-4">
              Real Stories
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-[Montserrat]">
              Homeowners We've <span className="text-teal-400">Helped</span>
            </h2>
            <p className="text-gray-400 mt-3 text-sm max-w-xl mx-auto">
              Don't take our word for it — hear from Colorado homeowners who found hope and solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#1e1e21] border border-teal-900/30 rounded-2xl p-6 hover:border-teal-700/50 hover:shadow-lg hover:shadow-teal-900/20 hover:-translate-y-1 transition-all duration-300 group"
              >
                <Quote className="text-teal-600 mb-4 group-hover:text-teal-400 transition-colors" size={28} />
                <p className="text-gray-300 text-sm leading-relaxed italic mb-5">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-teal-900/20">
                  <div className="w-9 h-9 rounded-full bg-teal-700/40 border border-teal-600/30 flex items-center justify-center text-teal-300 text-sm font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-teal-700/50 text-teal-400 text-sm font-semibold hover:bg-teal-900/30 hover:border-teal-500 transition-all duration-200"
            >
              Read All Reviews
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Resources Preview */}
      <section
        className="relative py-14 md:py-18 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f4c45 0%, #0d3d38 50%, #28282b 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-[Montserrat]">
            Access <span className="text-teal-400">Verified Resources</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            We've curated trusted links from HUD, CHFA, the City of Denver, Colorado Housing Connects,
            and more—so you can find help fast.
          </p>
          <Link
            to={ROUTE_PATHS.RESOURCES}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold bg-teal-600 hover:bg-teal-500 text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/50"
          >
            Browse Resources
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#28282b] py-16 md:py-20" id="contact">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 rounded-full bg-teal-900/50 border border-teal-700/40 text-teal-400 text-xs font-semibold uppercase tracking-widest mb-4">
              Free Consultation
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-[Montserrat] mb-2">
              Talk to an Expert Today
            </h2>
            <p className="text-gray-400 text-sm">
              Complete the form below and our team will contact you within 24 hours to discuss your options.
              All consultations are{' '}
              <span className="text-teal-400 font-semibold">completely free and confidential</span>.
            </p>
          </div>
          <div className="bg-[#1e1e21] border border-teal-900/30 rounded-2xl p-6 md:p-8">
            <ContactForm
              title=""
              subtitle=""
              dark
            />
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">
            Or call us directly:{' '}
            <a href={PHONE_HREF} className="text-teal-400 hover:underline font-semibold">
              {PHONE}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
