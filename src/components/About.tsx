import { motion } from 'framer-motion';
import { Music, Heart, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: Music,
    title: 'Curated Experiences',
    description: 'Hand-picked artists and carefully crafted lineups that define Boston\'s underground scene',
  },
  {
    icon: Heart,
    title: 'Community First',
    description: 'Building connections through music, one unforgettable night at a time',
  },
  {
    icon: Zap,
    title: 'Electric Energy',
    description: 'High-energy productions with cutting-edge sound and immersive visuals',
  },
  {
    icon: Users,
    title: 'Inclusive Vibes',
    description: 'A safe space where everyone belongs and the music brings us together',
  },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-5xl font-bold md:text-6xl">
            <span className="text-gradient">About Untitled</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-400">
            More than just events. We're a movement.
          </p>
        </motion.div>

        <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-6 text-3xl font-bold">Our Story</h3>
            <div className="space-y-4 text-lg text-gray-400">
              <p>
                Born from Boston's vibrant underground music scene, Untitled started as a passion project 
                in 2020. What began as intimate warehouse gatherings has evolved into the city's most 
                sought-after music experience.
              </p>
              <p>
                We believe music is more than entertainment—it's a catalyst for connection, expression, 
                and transformation. Every event we host is designed to create those magical moments where 
                strangers become friends and the music takes you somewhere new.
              </p>
              <p>
                From electronic beats to hip-hop flows, indie vibes to jazz grooves, we showcase the 
                diverse sounds that make Boston's music scene truly special. Our commitment to quality, 
                community, and unforgettable experiences drives everything we do.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
                alt="Untitled Events"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-lg border-2 border-white bg-gray-900/50 p-6 backdrop-blur transition-all hover:bg-white hover:text-black"
            >
              <div className="mb-4 inline-flex rounded-lg border-2 border-white bg-black p-3">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="mb-2 text-xl font-bold">{feature.title}</h4>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-lg border-2 border-white bg-black p-12 text-center backdrop-blur"
        >
          <h3 className="mb-4 text-3xl font-bold">Our Mission</h3>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            To create transformative music experiences that unite Boston's diverse communities, 
            elevate emerging artists, and push the boundaries of what a night out can be.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
