
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnalyticaLogo from '@/components/icons/analytica-logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import AIChatAssistantDialog from '@/components/ai/ai-chat-assistant-dialog';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Insights' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className={cn("sticky top-0 z-50 w-full transition-all duration-300", isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent")}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <AnalyticaLogo className="h-8 w-auto text-primary" />
          <span className="text-2xl font-bold font-headline text-primary">Analytica AI</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:text-accent-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          <AIChatAssistantDialog>
            <Button variant="outline" size="icon" className="hidden md:inline-flex" aria-label="Open AI Chat Assistant">
              <MessageSquare className="h-5 w-5" />
            </Button>
          </AIChatAssistantDialog>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background shadow-lg animate-in fade-in-20 slide-in-from-top-5 duration-300">
          <nav className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
             <AIChatAssistantDialog>
              <Button variant="outline" className="w-full mt-2 justify-start">
                <MessageSquare className="mr-2 h-5 w-5" /> AI Chat Assistant
              </Button>
            </AIChatAssistantDialog>
          </nav>
        </div>
      )}
    </header>
  );
}
