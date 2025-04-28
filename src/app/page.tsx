// Trigger Vercel deploy
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhyNow from '@/components/WhyNow';
import DPPSection from '@/components/DPPSection';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <WhyNow />
        <Features />
        <DPPSection />
      </main>
      <Contact />
      <footer className="w-full py-6 px-6 md:px-12 bg-gray-900 text-white text-center">
        <p className="text-sm text-gray-400">@Texpass ID 2025</p>
      </footer>
    </div>
  );
}
