import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Philosophy from './components/Philosophy';
import Portfolio from './components/Portfolio';
import AIOpportunity from './components/AIOpportunity';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Layout wrapper to handle scroll to top on route change and persistent nav/footer
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-rich-950 text-white font-sans overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/firm" element={<Philosophy />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/intelligence" element={<AIOpportunity />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;