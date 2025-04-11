import Link from 'next/link';
import Image from 'next/image';

const DPPSection = () => {
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
    <section id="dpp-section" className="w-full px-6 md:px-12 py-20 md:py-24 bg-emerald-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vi är med dig på resan
            </h2>
            <p className="text-emerald-100 text-lg mb-8">
              Vi erbjuder inte bara en teknisk lösning – vi är din partner hela vägen:
            </p>
            
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-2xl">{service.icon}</div>
                  <p className="text-emerald-50 text-lg">{service.title}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 bg-white text-emerald-900 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors group"
              >
                Registrera dig idag
                <span className="group-hover:translate-x-1 transition-transform">➡️</span>
              </Link>
              <p className="text-emerald-100 mt-3 text-sm">
                Få exklusiv tillgång till våra evenemang och verktyg!
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-emerald-800 rounded-2xl p-4 md:p-6 aspect-auto flex items-center justify-center overflow-hidden">
              <Image 
                src="/desktop-mockup.svg" 
                alt="Desktop application mockup" 
                width={500} 
                height={400} 
                className="object-contain scale-110 transform hover:scale-105 transition-transform duration-500" 
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
