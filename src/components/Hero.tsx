"use client";

import Image from 'next/image';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 py-10 sm:py-16 md:py-24 bg-amber-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 md:pr-8">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                Gör hållbarhet enkelt:
              </h1>
              <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-emerald-600 leading-tight mt-2 tracking-tight">
                Digital Product Passport
              </h2>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight mt-2 tracking-tight">
                för små och medelstora företag
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-6 sm:mt-8 max-w-xl">
                Nu kan du ta steget mot framtidens hållbarhet med vår lösning för Digital Product Passports (DPP).
              </p>
            </div>
            
            <div className="mt-12">
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                Driver du en mindre eller medelstor verksamhet? Då är vår lösning perfekt för dig – enkel att använda och anpassad för dina behov.
              </p>
              <div>
                <button
                  onClick={scrollToContact}
                  className="bg-emerald-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-emerald-700 transition-all text-center inline-flex items-center font-medium tracking-wide text-base sm:text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Anmäl dig till väntelistan
                </button>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative md:absolute md:right-0 md:inset-y-0 md:flex md:items-center">
              <div className="relative z-10 transform md:translate-x-8 md:translate-y-12">
                <Image 
                  src="/Mobile Mockup.svg" 
                  alt="Mobile application mockup" 
                  width={250} 
                  height={500} 
                  className="object-contain drop-shadow-2xl w-[180px] sm:w-[250px] md:w-[400px] h-auto mx-auto" 
                  priority
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white rounded-full -z-10 opacity-80 shadow-lg" />
              <div className="absolute top-20 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse" />
              <div className="absolute bottom-20 -left-4 w-8 h-8 bg-red-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
