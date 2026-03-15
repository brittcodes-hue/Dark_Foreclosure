import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { ROUTE_PATHS, PHONE, PHONE_HREF, REVIEWS_URL } from '@/lib/index';

const NAV_LINKS = [
  { label: 'Home', to: ROUTE_PATHS.HOME },
  { label: 'Foreclosure Resources', to: ROUTE_PATHS.RESOURCES },
  { label: 'FAQ', to: ROUTE_PATHS.FAQ },
  { label: 'Reviews', to: REVIEWS_URL, external: true },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#28282b] text-white">
      {/* Sticky Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#28282b]/95 shadow-lg shadow-black/30 backdrop-blur-sm'
            : 'bg-[#28282b]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <NavLink
              to={ROUTE_PATHS.HOME}
              className="flex flex-col leading-tight group"
            >
              <span className="text-lg md:text-xl font-bold text-white font-[Montserrat] group-hover:text-teal-400 transition-colors">
                StopMyForeclosure
              </span>
              <span className="text-[10px] md:text-xs text-teal-400 uppercase tracking-widest font-semibold">
                .com
              </span>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors rounded-md hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    end={link.to === ROUTE_PATHS.HOME}
                    className={({ isActive }) =>
                      `px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                        isActive
                          ? 'text-teal-400 bg-teal-400/10'
                          : 'text-gray-300 hover:text-teal-400 hover:bg-white/5'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
            </nav>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-3 lg:gap-4">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-1.5 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                aria-label={`Call us at ${PHONE}`}
              >
                <Phone size={15} />
                <span>{PHONE}</span>
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center px-4 py-2 text-sm font-bold rounded-lg bg-teal-600 hover:bg-teal-500 text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-900/40 whitespace-nowrap"
              >
                Get Free Consultation
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-[#1e1e21] border-t border-teal-900/40 px-4 pb-4 pt-2 space-y-1">
            {NAV_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-3 text-sm font-medium text-gray-300 hover:text-teal-400 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === ROUTE_PATHS.HOME}
                  className={({ isActive }) =>
                    `block px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'text-teal-400 bg-teal-400/10'
                        : 'text-gray-300 hover:text-teal-400 hover:bg-white/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
            <div className="pt-3 border-t border-teal-900/30 flex flex-col gap-2">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 px-3 py-3 text-sm font-semibold text-teal-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                <Phone size={16} />
                {PHONE}
              </a>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center px-4 py-3 text-sm font-bold rounded-lg bg-teal-600 hover:bg-teal-500 text-white transition-all"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1d] border-t border-teal-900/30 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <NavLink to={ROUTE_PATHS.HOME} className="inline-block mb-3">
                <span className="text-xl font-bold text-white font-[Montserrat]">
                  StopMyForeclosure<span className="text-teal-400">.com</span>
                </span>
              </NavLink>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                Verified resources and expert support to help Colorado homeowners
                prevent foreclosure and reduce debt.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-4 font-[Montserrat]">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) =>
                  link.external ? (
                    <li key={link.label}>
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <NavLink
                        to={link.to}
                        className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-4 font-[Montserrat]">
                Contact Us
              </h3>
              <div className="space-y-3">
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-teal-400 transition-colors"
                >
                  <Phone size={15} className="text-teal-500 flex-shrink-0" />
                  <span>{PHONE}</span>
                </a>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Free consultations available. Serving Colorado homeowners in the
                  Denver metro and beyond.
                </p>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center px-4 py-2 text-xs font-bold rounded-lg bg-teal-700 hover:bg-teal-600 text-white transition-all"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 border-t border-teal-900/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} StopMyForeclosure.com. All rights
              reserved.
            </p>
            <p className="text-center sm:text-right">
              Educational resources only. Not legal advice.{' '}
              <a
                href="https://gmash.co/foreclosuresupport"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:text-teal-400 transition-colors"
              >
                Debt Help →
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
