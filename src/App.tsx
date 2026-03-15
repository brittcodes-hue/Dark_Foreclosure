import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTE_PATHS } from '@/lib/index';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Resources from '@/pages/Resources';
import FAQ from '@/pages/FAQ';
import NotFound from '@/pages/not-found/Index';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTE_PATHS.HOME} element={<Home />} />
          <Route path={ROUTE_PATHS.RESOURCES} element={<Resources />} />
          <Route path={ROUTE_PATHS.FAQ} element={<FAQ />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
