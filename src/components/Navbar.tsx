"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 md:px-12 flex justify-between items-center bg-amber-50 relative">
      <div className="flex items-center">
        <Link href="/">
          <span className="text-2xl font-bold tracking-wider text-emerald-600" style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.05em' }}>Texpass ID</span>
        </Link>
      </div>
      {/* Desktop menu */}
      <div className="hidden md:flex items-center space-x-6">
        <a href="#contact" className="text-gray-600 hover:text-gray-900">Kontakt</a>
        <a href="#dpp-section" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">Läs mer</a>
      </div>
      {/* Hamburger button for mobile */}
      <button
        className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-600"
        aria-label="Öppna meny"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg className="h-7 w-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setMenuOpen(false)}></div>
      )}
      {/* Mobile menu dropdown */}
      <div className={`fixed top-0 right-0 z-50 w-2/3 max-w-xs h-full bg-white shadow-lg transform transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-end p-6 space-y-6">
          <button
            className="mb-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-600"
            aria-label="Stäng meny"
            onClick={() => setMenuOpen(false)}
          >
            <svg className="h-7 w-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <a href="#contact" className="text-gray-700 text-lg font-medium hover:text-emerald-600 w-full text-right" onClick={() => setMenuOpen(false)}>Kontakt</a>
          <a href="#dpp-section" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors w-full text-right" onClick={() => setMenuOpen(false)}>Läs mer</a>
        </div>
      </div>
      {showScrollTop && (
        <button
          className="fixed bottom-6 right-6 bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-all z-50 animate-bounce"
          aria-label="Scrolla till toppen"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </nav>
  );
};

export default Navbar;
