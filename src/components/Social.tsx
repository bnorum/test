import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Music2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80',
    caption: 'Neon Nights - Electric atmosphere',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80',
    caption: 'Underground Sessions - Raw energy',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80',
    caption: 'Indie Vibes - Intimate moments',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80',
    caption: 'Bass Drop - Pure intensity',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
    caption: 'Crowd energy - Unforgettable nights',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80',
    caption: 'Festival vibes - Summer memories',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80',
    caption: 'Stage presence - Artist spotlight',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=600&q=80',
    caption: 'Jazz nights - Smooth grooves',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=600&q=80',
    caption: 'Rock revival - Guitar heroes',
  },
];

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/untitled.boston',
    handle: '@untitled.boston',
    color: "from-black-400 to-black-500"
  },
  {
    name: 'TikTok',
    icon: Music2,
    url: 'https://www.tiktok.com/@untitledboston',
    handle: '@untitledboston',
    color: "from-black-400 to-black-500"
  },
];

export default function Social() {
  return (
    <section id="social" className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-5xl font-bold md:text-6xl">
            <span>Find Us</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-400">
            Follow us for event updates, behind-the-scenes content, and exclusive announcements
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur transition-all hover:border-transparent hover:shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 transition-opacity group-hover:opacity-10`} />
              <div className="relative">
                <div className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${social.color} p-3`}>
                  <social.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-1 text-xl font-bold">{social.name}</h3>
                <p className="text-sm text-gray-400">{social.handle}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Im Commenting all of this out until I have a better idea. */}
        { /*
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="mb-8 text-center text-3xl font-bold">Event Highlights</h3>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <button className="group relative aspect-square w-full overflow-hidden rounded-lg">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
                      <p className="text-sm font-medium text-white">{image.caption}</p>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl border-gray-800 bg-black/95 p-0">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="h-auto w-full"
                  />
                  <div className="p-6">
                    <p className="text-center text-lg text-gray-300">{image.caption}</p>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
        */}
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          {/*

          <p className="mb-6 text-xl text-gray-400">
            Don't miss out on the latest updates and exclusive content
          </p>
            <Button
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-200"
            asChild
            >
            <a href="https://instagram.com/untitled.boston" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
            </a>
            </Button>
          */}
        </motion.div>

      </div>
    </section>
  );
}
