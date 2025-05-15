"use client";

import Image from 'next/image';

const DPPSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const services = [
    {
      title: "Praktiska workshops som gör det enkelt att starta",
      icon: "🎓"
    },
    {
      title: "Användarvänliga verktyg för smidig integration i din verksamhet",
      icon: "🛠️"
    },
    {
      title: "Personlig rådgivning för att möta dina specifika behov",
      icon: "💡"
    }
  ];

  return (
    <section id="dpp-section" className="w-full px-4 sm:px-6 md:px-12 py-10 sm:py-20 md:py-24 bg-emerald-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Vi är med dig på resan
            </h2>
            <p className="text-emerald-100 text-base sm:text-lg mb-6 sm:mb-8">
              Vi erbjuder inte bara en teknisk lösning – vi är din partner hela vägen:
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-xl sm:text-2xl">{service.icon}</div>
                  <p className="text-emerald-50 text-sm sm:text-lg">{service.title}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 bg-white text-emerald-900 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors group"
              >
                Registrera dig idag
                <span className="group-hover:translate-x-1 transition-transform">➡️</span>
              </button>
              <p className="text-emerald-100 mt-3 text-sm">
                Få exklusiv tillgång till våra evenemang och verktyg!
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-emerald-800 rounded-2xl p-2 sm:p-4 md:p-6 aspect-auto flex items-center justify-center overflow-hidden">
              <Image 
                src="/desktop-mockup.svg" 
                alt="Desktop application mockup" 
                width={220} 
                height={160} 
                className="object-contain scale-100 sm:scale-110 transform hover:scale-105 transition-transform duration-500 w-[150px] sm:w-[220px] md:w-[500px] h-auto mx-auto" 
                priority
              />
            </div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-emerald-800 -z-10 rounded-2xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-emerald-800 -z-10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DPPSection;
