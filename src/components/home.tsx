import Navigation from './Navigation';
import Hero from './Hero';
import Events from './Events';
import About from './About';
import Contact from './Contact';
import Social from './Social';
import Footer from './Footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Events />
      <About />
      <Contact />
      <Social />
      <Footer />
      <Toaster />
    </div>
  );
}
