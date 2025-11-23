import { Instagram, Twitter, Facebook, Music2, Mail } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Contact', href: '#contact' },
  ],
  resources: [
    { label: 'Artist Booking', href: '#contact' },
    { label: 'Venue Partnerships', href: '#contact' },
    { label: 'Sponsorships', href: '#contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/untitledboston', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/untitledboston', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com/untitledboston', label: 'Facebook' },
  { icon: Music2, href: 'https://open.spotify.com/user/untitledboston', label: 'Spotify' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="border-t border-gray-800 bg-black px-4 py-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-3xl font-bold">
              <span className="text-gradient">UNTITLED</span>
            </h3>
            <p className="mb-6 max-w-md text-gray-400">
              Boston's premier music event hosting business. Creating unforgettable experiences 
              and building community through music.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gray-800 p-2 transition-colors hover:bg-purple-600"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-gray-400 transition-colors hover:text-purple-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="mb-4 font-semibold">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-gray-400 transition-colors hover:text-purple-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-purple-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h4 className="mb-2 font-semibold">Stay in the loop</h4>
              <p className="text-sm text-gray-400">
                Subscribe to our newsletter for exclusive updates and early access to tickets
              </p>
            </div>
            <div className="flex w-full max-w-md gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-lg border border-gray-800 bg-gray-900 px-4 py-2 text-sm focus:border-purple-500 focus:outline-none"
              />
              <button className="rounded-lg bg-purple-600 px-6 py-2 text-sm font-medium transition-colors hover:bg-purple-700">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Untitled Boston. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
