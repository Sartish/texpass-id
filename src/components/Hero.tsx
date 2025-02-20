import Link from 'next/link';

const Hero = () => {
  return (
    <section className="w-full px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2 mb-12 md:mb-0">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Gör hållbarhet enkelt – 
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 mt-2">
            Digital Product Passport
          </h2>
          <p className="text-xl text-gray-700 mt-2">
            för små och medelstora företag
          </p>
        </div>
        <div className="space-y-6 mb-8">
          <p className="text-gray-600 text-lg">
            Nu kan du ta steget mot framtidens hållbarhet med vår lösning för Digital Product Passports (DPP).
          </p>
          <p className="text-gray-600 text-lg">
            Speciellt utvecklad för produkter som tillverkas på beställning, hjälper vår DPP-lösning dig att:
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span>Skapa transparens och bygga kundförtroende</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span>Uppfylla kommande EU-regler utan att komplicera din produktion</span>
            </li>
          </ul>
          <p className="text-gray-700 font-medium">
            Driver du en mindre eller medelstor verksamhet? Då är vår lösning perfekt för dig – enkel att använda och anpassad för dina behov.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/register"
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-center group"
          >
            <span className="flex items-center justify-center gap-2">
              Anmäl dig här
              <span className="group-hover:translate-x-1 transition-transform">➡️</span>
            </span>
          </Link>
          <Link
            href="/learn-more"
            className="text-gray-600 px-6 py-3 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors text-center"
          >
            Läs mer
          </Link>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 relative">
        <div className="relative w-[280px] h-[560px] mx-auto bg-gray-100 rounded-3xl">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            Phone Mockup Placeholder
          </div>
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-red-500 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
