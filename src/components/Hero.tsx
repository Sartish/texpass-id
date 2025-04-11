import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="w-full px-6 md:px-12 py-16 md:py-24 bg-amber-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 md:pr-8">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                Gör hållbarhet enkelt:
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-emerald-600 leading-tight mt-2 tracking-tight">
                Digital Product Passport
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mt-2 tracking-tight">
                för små och medelstora företag
              </h3>
              <p className="text-lg md:text-xl text-gray-700 mt-8 max-w-xl">
                Nu kan du ta steget mot framtidens hållbarhet med vår lösning för Digital Product Passports (DPP).
              </p>
            </div>
            
            <div className="mt-12">
              <p className="text-lg text-gray-700 mb-6">
                Driver du en mindre eller medelstor verksamhet? Då är vår lösning perfekt för dig – enkel att använda och anpassad för dina behov.
              </p>
              <div>
                <Link
                  href="/register"
                  className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all text-center inline-flex items-center font-medium tracking-wide text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Anmäl dig till väntelistan
                </Link>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative md:absolute md:right-0 md:inset-y-0 md:flex md:items-center">
              <div className="relative z-10 transform md:translate-x-8 md:translate-y-12">
                <Image 
                  src="/Mobile Mockup.svg" 
                  alt="Mobile application mockup" 
                  width={400} 
                  height={800} 
                  className="object-contain drop-shadow-2xl" 
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
