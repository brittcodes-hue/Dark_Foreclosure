import { ExternalLink, Building, Scale, MapPin, Home, Phone, ArrowRight } from 'lucide-react';
import { IMAGES } from '@/assets/images';
import { PHONE, PHONE_HREF, DEBT_HELP_URL, RESOURCE_CATEGORIES } from '@/lib/index';
import ContactForm from '@/components/ContactForm';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Building: <Building size={20} className="text-teal-400" />,
  Scale: <Scale size={20} className="text-teal-400" />,
  MapPin: <MapPin size={20} className="text-teal-400" />,
  Home: <Home size={20} className="text-teal-400" />,
};

const BADGE_COLORS: Record<string, string> = {
  Federal: 'bg-blue-900/40 text-blue-300 border border-blue-700/30',
  Legal: 'bg-purple-900/40 text-purple-300 border border-purple-700/30',
  Colorado: 'bg-teal-900/40 text-teal-300 border border-teal-700/30',
  Local: 'bg-amber-900/40 text-amber-300 border border-amber-700/30',
};

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[50vh] md:min-h-[55vh] flex items-center justify-center text-center overflow-hidden"
        aria-label="Foreclosure Resources page hero"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.RESOURCES_HERO_4}
            alt="Aerial view of a Colorado suburban neighborhood representing the communities we help with foreclosure prevention resources"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f766e]/25 via-transparent to-[#28282b]/60" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-600/30 border border-teal-500/40 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-5">
            <Home size={13} />
            Educational Resources
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-[Montserrat] leading-tight mb-4">
            Trusted{' '}
            <span className="text-teal-400">Foreclosure Resources</span>
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-xl mx-auto leading-relaxed">
            Explore verified educational resources organized by category. Each link connects you to
            official government agencies, legal guidance, or local counseling services.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#28282b] pt-12 pb-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-teal-900/20 border border-teal-800/40 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-700/40 flex items-center justify-center">
              <Phone size={18} className="text-teal-300" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold mb-1">
                Need Immediate Help? Call the Colorado Foreclosure Hotline
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">
                <span className="text-teal-400 font-bold">1-877-601-HOPE</span> — Free, HUD-approved counselors
                available to help Colorado homeowners. Or call us directly at{' '}
                <a href={PHONE_HREF} className="text-teal-400 font-semibold hover:underline">
                  {PHONE}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="bg-[#28282b] py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-12">
          {RESOURCE_CATEGORIES.map((category) => (
            <div key={category.title}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-teal-900/50 border border-teal-800/40 flex items-center justify-center">
                  {CATEGORY_ICONS[category.icon]}
                </div>
                <h2 className="text-lg md:text-xl font-bold text-white font-[Montserrat]">
                  {category.title}
                </h2>
              </div>

              {/* Resource cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.resources.map((resource) => (
                  <a
                    key={resource.url}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#1e1e21] border border-teal-900/30 rounded-xl p-5 hover:border-teal-600/60 hover:bg-white/5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-900/20 transition-all duration-200 flex flex-col gap-3"
                    aria-label={`Visit ${resource.title} — foreclosure prevention resource`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold text-white group-hover:text-teal-300 transition-colors leading-snug flex-1">
                        {resource.title}
                      </h3>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${BADGE_COLORS[resource.badge]}`}>
                          {resource.badge}
                        </span>
                        <ExternalLink size={14} className="text-gray-500 group-hover:text-teal-400 transition-colors" />
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{resource.description}</p>
                    <div className="flex items-center gap-1 text-xs text-teal-500 group-hover:text-teal-400 transition-colors font-medium mt-auto">
                      <span>Visit Resource</span>
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#1e1e21] border-y border-teal-900/30 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            This page is educational and built with the intention of being a resource for those trying
            to navigate or avoid foreclosure. All links are verified to the best of our ability.
            We are not affiliated with any government agency. Content is not legal advice.
          </p>
        </div>
      </section>

      {/* Take the Next Step */}
      <section
        className="relative py-14 md:py-20 overflow-hidden"
        aria-label="Take the next step — foreclosure help section"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.CONSULTATION_3}
            alt="A HUD-approved housing counselor writing notes during a free foreclosure prevention consultation"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#28282b]/80 via-[#28282b]/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-[Montserrat] mb-4">
            Take the <span className="text-teal-400">Next Step</span>
          </h2>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6">
            These resources are here to educate and empower you. Many offer free counseling services
            from HUD-approved professionals who can help you understand your options and negotiate
            with lenders. Don't wait—early action gives you more options.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-8">
            Reach out to a counselor today to discuss your situation in confidence.{' '}
            <a
              href="https://www.chfainfo.com/homeownership/foreclosure-prevention"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline font-semibold"
            >
              Colorado Foreclosure Hotline
            </a>{' '}
            — all counseling services are <strong className="text-white">free and confidential</strong>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-teal-600 hover:bg-teal-500 text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/50 w-full sm:w-auto justify-center"
            >
              <Phone size={16} />
              Call {PHONE}
            </a>
            <a
              href={DEBT_HELP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/70 transition-all duration-200 hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              Debt Help Resources
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#28282b] py-16 md:py-20" id="contact">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-[Montserrat] mb-2">
              Connect With Our Team
            </h2>
            <p className="text-gray-400 text-sm">
              Have questions about the resources above or need help navigating your options?
              Our team is here to guide you through this process.
            </p>
          </div>
          <div className="bg-[#1e1e21] border border-teal-900/30 rounded-2xl p-6 md:p-8">
            <ContactForm dark />
          </div>
        </div>
      </section>
    </>
  );
}
