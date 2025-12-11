import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Firm', path: '/firm' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Intelligence', path: '/intelligence' },
    { name: 'Partnership', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-rich-950/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/"
          className="group relative z-50"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-serif text-white tracking-widest leading-none uppercase">
              Rhodes-Vivour
            </h1>
            <span className="text-[0.5rem] uppercase tracking-[0.4em] text-bronze-500 ml-[2px]">Capital</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${location.pathname === link.path ? 'text-white border-b border-bronze-500 pb-1' : 'text-gray-400 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-rich-950 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif text-white hover:text-bronze-500 transition-colors italic"
            >
              {link.name}
            </Link>
          ))}
      </div>
    </nav>
  );
};

export default Navbar;