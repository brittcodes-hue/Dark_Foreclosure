import { Link } from 'react-router-dom';
import { ROUTE_PATHS, PHONE, PHONE_HREF } from '@/lib/index';
import { Home, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#28282b] flex items-center justify-center px-4 text-center">
      <div className="max-w-md">
        <div className="text-7xl font-extrabold text-teal-700/40 font-[Montserrat] mb-4">404</div>
        <h1 className="text-2xl font-bold text-white font-[Montserrat] mb-3">Page Not Found</h1>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
          The page you're looking for doesn't exist. If you're looking for foreclosure help,
          our team is just a call away.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to={ROUTE_PATHS.HOME}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-teal-600 hover:bg-teal-500 text-white transition-all"
          >
            <Home size={16} />
            Back to Home
          </Link>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold border border-teal-800 text-teal-400 hover:bg-teal-900/30 transition-all"
          >
            <Phone size={16} />
            {PHONE}
          </a>
        </div>
      </div>
    </div>
  );
}
