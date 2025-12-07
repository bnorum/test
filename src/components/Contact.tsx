import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formType, setFormType] = useState('artist');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24-48 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-black to-gray-900 px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-5xl font-bold md:text-6xl">
            <span>Get In Touch</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-400">
            Hey. I'm Untitled. Talk to me.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-gray-800 bg-gray-900/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Choose your inquiry type and fill out the form below
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={formType} onValueChange={setFormType}>
                  <TabsList className="mb-6 grid w-full grid-cols-3 bg-gray-800">
                    <TabsTrigger value="artist">Artist</TabsTrigger>
                    <TabsTrigger value="venue">Venue</TabsTrigger>
                    <TabsTrigger value="general">General</TabsTrigger>
                  </TabsList>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <TabsContent value="artist" className="mt-0 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="artist-name">Artist/Band Name *</Label>
                        <Input
                          id="artist-name"
                          placeholder="Your artist name"
                          required
                          className="bg-gray-800 border-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="artist-genre">Genre *</Label>
                        <Input
                          id="artist-genre"
                          placeholder="Electronic, Hip-Hop, etc."
                          required
                          className="bg-gray-800 border-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="artist-links">Links (Spotify, SoundCloud, etc.)</Label>
                        <Input
                          id="artist-links"
                          placeholder="https://..."
                          className="bg-gray-800 border-gray-700"
                        />
                      </div>
                    </TabsContent>

                    <TabsContent value="venue" className="mt-0 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="venue-name">Venue Name *</Label>
                        <Input
                          id="venue-name"
                          placeholder="Your venue name"
                          required
                          className="bg-gray-800 border-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="venue-location">Location *</Label>
                        <Input
                          id="venue-location"
                          placeholder="Boston, MA"
                          required
                          className="bg-gray-800 border-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="venue-capacity">Capacity</Label>
                        <Input
                          id="venue-capacity"
                          placeholder="500"
                          type="number"
                          className="bg-gray-800 border-gray-700"
                        />
                      </div>
                    </TabsContent>

                    <TabsContent value="general" className="mt-0 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="general-name">Name *</Label>
                        <Input
                          id="general-name"
                          placeholder="Your name"
                          required
                          className="bg-gray-800 border-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="general-subject">Subject *</Label>
                        <Input
                          id="general-subject"
                          placeholder="What's this about?"
                          required
                          className="bg-gray-800 border-gray-700"
                        />
                      </div>
                    </TabsContent>

                    {/* Common fields for all tabs */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        required
                        rows={5}
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full border-2 border-white bg-white text-black hover:bg-gray-200"
                      size="lg"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6 text-3xl font-bold">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg border-2 border-white bg-black p-3">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Email</h4>
                    <p className="text-gray-400">contact@untitled.boston</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg border-2 border-white bg-black p-3">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Phone</h4>
                    <p className="text-gray-400">Available Upon Request</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg border-2 border-white bg-black p-3">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Location</h4>
                    <p className="text-gray-400">Boston, Massachusetts</p>
                    <p className="text-sm text-gray-500">Various venues across the city</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-2 border-white bg-black backdrop-blur">
              <CardHeader>
                <CardTitle>Partnership Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div>
                  <h4 className="mb-2 font-semibold text-white">For Artists</h4>
                  <p className="text-sm">
                    We're always looking for talented artists to feature. Send us your EPK, 
                    music samples, and social media links.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">For Venues</h4>
                  <p className="text-sm">
                    Interested in hosting an Untitled event? Let's discuss how we can bring 
                    our unique experience to your space.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-white">For Sponsors</h4>
                  <p className="text-sm">
                    Partner with Boston's premier music event brand. Contact us for 
                    sponsorship opportunities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
