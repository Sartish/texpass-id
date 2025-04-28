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
        <p className="text-sm text-gray-400">@TexpassID 2025 created and powered by <a href="https://elobina.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-400">elobina.com</a></p>
      </footer>
    </div>
  );
}
// Trigger Vercel deploy for rollback test branch
