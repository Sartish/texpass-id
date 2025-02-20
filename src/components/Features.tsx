import Image from 'next/image';

const Features = () => {
  return (
    <section className="w-full px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Vad gör vår DPP-lösning unik?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Vår plattform är utformad för små och medelstora företag och fungerar lika bra för:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Produkter som tillverkas på beställning</h3>
                  <p className="text-gray-600">Perfekt för skräddarsydd produktion</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Traditionella produkter</h3>
                  <p className="text-gray-600">Effektivt även för regelbunden produktion</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mt-6">
              Med enkel implementering och användarvänliga verktyg är det lätt att komma igång – utan krångel.
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
            <div className="text-gray-400">
              Interface Mockup Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
