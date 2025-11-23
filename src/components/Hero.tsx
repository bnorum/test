import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&q=80',
  'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1920&q=80',
  'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1920&q=80',
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToEvents = () => {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Images with Fade Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="mb-6 text-7xl font-bold tracking-tighter md:text-8xl lg:text-9xl">
            <span className="text-gradient">UNTITLED</span>
          </h1>
          <p className="mb-8 text-xl text-gray-300 md:text-2xl lg:text-3xl">
            Boston's Premier Music Experience
          </p>
          <p className="mb-12 max-w-2xl text-lg text-gray-400 md:text-xl">
            Where underground beats meet unforgettable nights. Join the movement.
          </p>
          <Button
            onClick={scrollToEvents}
            size="lg"
            className="border-2 border-white bg-black px-8 py-6 text-lg font-semibold hover:bg-white hover:text-black"
          >
            Explore Events
            <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </motion.div>

        {/* Image Indicators */}
        <div className="absolute bottom-12 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentImage
                  ? 'w-8 bg-white'
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
