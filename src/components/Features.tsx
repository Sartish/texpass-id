import Image from 'next/image';

const Features = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 py-10 sm:py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-gray-900">
              Vad gör vår DPP-lösning unik?
            </h2>
            <p className="text-base sm:text-lg text-gray-800 mb-6 sm:mb-8">
              Vår plattform är utformad för små och medelstora företag och fungerar lika bra för:
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start bg-white rounded-xl border border-gray-200 shadow-sm p-4 mb-2">
                <div className="mr-4">
                  <div className="w-1 h-6 bg-emerald-600"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Produkter som tillverkas på beställning</h3>
                  <p className="text-gray-600">
                    Perfekt för skräddarsydd produktion.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start bg-white rounded-xl border border-gray-200 shadow-sm p-4 mb-2">
                <div className="mr-4">
                  <div className="w-1 h-6 bg-emerald-600"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Traditionella produkter</h3>
                  <p className="text-gray-600">
                    Effektivt även för regelbunden produktion.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-base sm:text-lg text-gray-700 mt-6 sm:mt-8">
              Med enkel implementering och användarvänliga verktyg är det lätt att komma igång, utan krångel.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden">
            <Image 
              src="/image.svg" 
              alt="Interface mockup" 
              width={250} 
              height={250} 
              className="w-full max-w-[180px] sm:max-w-[250px] md:max-w-[500px] h-auto object-cover mx-auto" 
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
