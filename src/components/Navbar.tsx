"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <>
      <nav className="w-full py-4 px-6 md:px-12 flex justify-between items-center bg-amber-50">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center">
              <span className="text-2xl font-bold tracking-wider text-emerald-600" style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.05em' }}>Texpass ID</span>
            </div>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="#contact" 
            className="text-gray-600 hover:text-gray-900"
          >
            Kontakt
          </a>
          <a 
            href="#dpp-section" 
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Läs mer
          </a>
        </div>
        
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-all z-50 animate-bounce"
          aria-label="Scrolla till toppen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
};

export default Navbar;
