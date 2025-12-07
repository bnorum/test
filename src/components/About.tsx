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
            <span>About Untitled</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-400">
            Founded in 2022, Untitled made a name for itself by hosting killer events across Boston
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nisi ac velit ultricies fringilla. Sed sit amet odio nec odio dictum placerat quis vitae nibh. Etiam facilisis commodo bibendum. Praesent et urna quis neque posuere efficitur. Pellentesque id est metus. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
              <p>
                Quisque id quam fringilla, vehicula purus eu, laoreet risus. Vestibulum vitae mattis neque. Maecenas sed vehicula diam. Vestibulum tincidunt purus odio, ac pellentesque tortor molestie id. Cras fringilla mi eu commodo mollis. Pellentesque interdum sem eu nisi molestie elementum. Curabitur fermentum lectus eget libero rhoncus, ac maximus leo hendrerit. In in libero dui. Duis porta condimentum tellus, sed interdum lectus finibus posuere. In ornare scelerisque tortor, et efficitur augue sollicitudin at. Etiam vitae dictum quam.
              </p>
              <p>
                Mauris ante quam, hendrerit ac nulla vitae, venenatis cursus ipsum. Etiam at purus sed neque lobortis feugiat posuere non enim. Nunc orci ex, elementum ut nulla vel, placerat auctor mauris. Praesent nec urna non justo ultricies mattis id sed erat. Ut eleifend ligula eget velit rutrum finibus. Integer pharetra fringilla ante, nec tristique risus varius nec. Vivamus at urna orci. Nam imperdiet risus ac tellus feugiat ultrices. Cras sem sapien, luctus nec euismod at, efficitur non ex. Vivamus eget molestie erat. Nulla interdum nulla in sapien consectetur, bibendum eleifend nibh elementum. Sed eu odio sit amet odio sagittis efficitur. Suspendisse at tempor libero. Mauris vel suscipit ante. Donec eu nulla tincidunt ex venenatis vestibulum sed et dui. Proin quis mauris ex.
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
            <div className="relative w-full overflow-hidden rounded-lg">
              <img
              src="images/untitledlogo.png"
              alt="Untitled Events"
              className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 " />
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
              className="group rounded-lg border-2 border-white bg-gray-900/50 p-6 backdrop-blur transition-all"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis id nisi ac velit ultricies fringilla. Sed sit amet odio nec odio dictum placerat quis vitae nibh.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
