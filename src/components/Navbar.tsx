import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white text-sm mr-2">
              TX
            </div>
            <span className="text-xl font-semibold">Texpass ID</span>
          </div>
        </Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/contact" className="text-gray-600 hover:text-gray-900">
          Contact
        </Link>
        <Link 
          href="/get-started" 
          className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Get Started
        </Link>
      </div>
      
      <button className="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
