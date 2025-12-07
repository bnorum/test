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
  ticketLink?: string;
  price: string;
  isPast?: boolean;
}

const events: Event[] = [
  {
    id: 101,
    title: 'Untitled Forever (19+)',
    date: 'December 13, 2025 @ 9PM',
    venue: 'God\'s Country',
    genre: 'Shotgun Wedding',
    artists: ['ali rq', "10cust", "the girl", "doecaine", "brightviolet", "grant p", "mtm", "stan", "jeff"],
    image: 'https://i.imgur.com/P24Z8GU.png',
    ticketsAvailable: true,
    ticketLink: "https://posh.vip/e/untitled-forever",
    price: '$25',
  }
];

const pastEvents: Event[] = [
  {
    id: 101,
    title: 'Asalto',
    date: 'March 21, 2024',
    venue: 'Community Center',
    genre: 'It\'s Complicated',
    artists: ['jeff', 'stan', 'betsy'],
    image: 'eventimages/asalto.png',
    ticketsAvailable: false,
    price: '$20',
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
            <span>Events</span>
          </h2>
          <p className="mb-12 text-center text-xl text-gray-400">
            Experience the best of the Massachusetts music scene
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
              <Card className="group overflow-hidden border-2 border-white bg-gray-900/50 backdrop-blur transition-all">
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
                      onClick={() => event.ticketLink && window.open(event.ticketLink, '_blank')}
                    >
                      <Ticket className="mr-2 h-4 w-4" />
                      {event.ticketsAvailable && !event.isPast ? 'Get Tickets' : 'Unavailable'}
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
