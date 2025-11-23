import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Users, Ticket } from 'lucide-react';
import { motion } from 'framer-motion';

interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
  genre: string;
  artists: string[];
  image: string;
  ticketsAvailable: boolean;
  price: string;
  isPast?: boolean;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Neon Nights',
    date: 'Dec 28, 2024',
    venue: 'The Sinclair',
    genre: 'Electronic',
    artists: ['DJ Shadow', 'Bonobo', 'Four Tet'],
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
    ticketsAvailable: true,
    price: '$35',
  },
  {
    id: 2,
    title: 'Underground Sessions',
    date: 'Jan 5, 2025',
    venue: 'Brighton Music Hall',
    genre: 'Hip-Hop',
    artists: ['Joey Bada$$', 'Denzel Curry', 'JID'],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    ticketsAvailable: true,
    price: '$40',
  },
  {
    id: 3,
    title: 'Indie Vibes',
    date: 'Jan 12, 2025',
    venue: 'Paradise Rock Club',
    genre: 'Indie',
    artists: ['Tame Impala', 'Mac DeMarco', 'Unknown Mortal Orchestra'],
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80',
    ticketsAvailable: false,
    price: '$45',
  },
  {
    id: 4,
    title: 'Bass Drop',
    date: 'Jan 19, 2025',
    venue: 'House of Blues',
    genre: 'Electronic',
    artists: ['Skrillex', 'Zeds Dead', 'Rezz'],
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80',
    ticketsAvailable: true,
    price: '$50',
  },
  {
    id: 5,
    title: 'Jazz After Dark',
    date: 'Jan 26, 2025',
    venue: 'Wally\'s Cafe',
    genre: 'Jazz',
    artists: ['Robert Glasper', 'Kamasi Washington', 'Thundercat'],
    image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80',
    ticketsAvailable: true,
    price: '$30',
  },
  {
    id: 6,
    title: 'Rock Revival',
    date: 'Feb 2, 2025',
    venue: 'Middle East',
    genre: 'Rock',
    artists: ['The Strokes', 'Arctic Monkeys', 'Interpol'],
    image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=800&q=80',
    ticketsAvailable: true,
    price: '$55',
  },
];

const pastEvents: Event[] = [
  {
    id: 101,
    title: 'Summer Solstice Festival',
    date: 'Jun 21, 2024',
    venue: 'Boston Common',
    genre: 'Electronic',
    artists: ['Disclosure', 'ODESZA', 'Flume'],
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
    ticketsAvailable: false,
    price: '$60',
    isPast: true,
  },
  {
    id: 102,
    title: 'Autumn Beats',
    date: 'Oct 15, 2024',
    venue: 'Royale',
    genre: 'Hip-Hop',
    artists: ['Tyler, The Creator', 'Earl Sweatshirt', 'Vince Staples'],
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80',
    ticketsAvailable: false,
    price: '$45',
    isPast: true,
  },
];

export default function Events() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('upcoming');
  const [genreFilter, setGenreFilter] = useState<string>('all');

  const displayEvents = filter === 'past' ? pastEvents : events;
  const filteredEvents = genreFilter === 'all' 
    ? displayEvents 
    : displayEvents.filter(e => e.genre === genreFilter);

  const genres = ['all', ...Array.from(new Set(events.map(e => e.genre)))];

  return (
    <section id="events" className="min-h-screen bg-gradient-to-b from-black to-gray-900 px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-5xl font-bold md:text-6xl">
            <span className="text-gradient">Events</span>
          </h2>
          <p className="mb-12 text-center text-xl text-gray-400">
            Experience the best of Boston's music scene
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-12 flex flex-col items-center gap-6">
          <Tabs value={filter} onValueChange={(v) => setFilter(v as any)} className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-2 bg-gray-800">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
          </Tabs>

          {filter === 'upcoming' && (
            <div className="flex flex-wrap justify-center gap-2">
              {genres.map((genre) => (
                <Button
                  key={genre}
                  variant={genreFilter === genre ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setGenreFilter(genre)}
                  className={genreFilter === genre ? 'border-2 border-white bg-white text-black hover:bg-gray-200' : ''}
                >
                  {genre.charAt(0).toUpperCase() + genre.slice(1)}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-2 border-white bg-gray-900/50 backdrop-blur transition-all hover:bg-white hover:text-black">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  <Badge className="absolute right-4 top-4 border-2 border-white bg-black text-white">
                    {event.genre}
                  </Badge>
                </div>

                <CardHeader>
                  <h3 className="text-2xl font-bold">{event.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="h-4 w-4" />
                    {event.venue}
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="mb-4">
                    <div className="mb-2 flex items-center gap-2 text-sm text-gray-400">
                      <Users className="h-4 w-4" />
                      <span>Lineup:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {event.artists.map((artist) => (
                        <Badge key={artist} variant="outline" className="border-gray-700">
                          {artist}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between">
                  <span className="text-xl font-bold text-white">{event.price}</span>
                  {!event.isPast && (
                    <Button
                      disabled={!event.ticketsAvailable}
                      className={event.ticketsAvailable ? 'border-2 border-white bg-white text-black hover:bg-gray-200' : ''}
                    >
                      <Ticket className="mr-2 h-4 w-4" />
                      {event.ticketsAvailable ? 'Get Tickets' : 'Sold Out'}
                    </Button>
                  )}
                  {event.isPast && (
                    <Button variant="outline">View Recap</Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
