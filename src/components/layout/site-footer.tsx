import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import AnalyticaLogo from '@/components/icons/analytica-logo';

const navItems = [
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Insights Blog' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
];

const socialLinks = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
];

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <AnalyticaLogo className="h-10 w-auto text-primary" />
              <span className="text-2xl font-bold font-headline text-primary">Analytica AI</span>
            </Link>
            <p className="text-sm">
              Empowering businesses with AI, data analytics, Geoscience, and data modeling solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {navItems.slice(4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link key={label} href={href} aria-label={label} className="text-secondary-foreground hover:text-primary transition-colors">
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
            <p className="text-sm">
              123 Innovation Drive<br />
              Tech City, TX 75001<br />
              <a href="mailto:info@analytica.ai" className="hover:text-primary">info@analytica.ai</a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm">
          <p>&copy; {currentYear} Analytica AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
