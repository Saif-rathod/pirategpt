
import React from 'react';
import { Anchor, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import ChatInterface from '@/components/ChatInterface';
import { toast } from 'sonner';

const Index = () => {
  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Pirate Dialect AI',
        text: 'Communicate Like a True Buccaneer! Check out this awesome pirate translator!',
        url: window.location.href,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pirate-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute top-32 -right-32 w-96 h-96 bg-pirate-seafoam/5 rounded-full blur-3xl"></div>
        
        {/* Subtle waves pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <pattern id="wave" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,10 C30,20 70,0 100,10 L100,0 L0,0 Z" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#wave)" />
          </svg>
        </div>
        
        {/* Subtle compass rose */}
        <div className="absolute right-12 bottom-12 w-64 h-64 opacity-5">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M50,5 L50,95 M5,50 L95,50 M15,15 L85,85 M15,85 L85,15" stroke="currentColor" strokeWidth="0.5" />
            <path d="M50,10 L53,50 L50,90 L47,50 Z" fill="currentColor" />
            <path d="M10,50 L50,47 L90,50 L50,53 Z" fill="currentColor" transform="rotate(90, 50, 50)" />
          </svg>
        </div>
      </div>
      
      <div className="container px-4 mx-auto py-8 relative z-10">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Anchor className="w-8 h-8 text-pirate-gold" />
              <h1 className="text-2xl font-bold tracking-tight">Pirate Dialect AI</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleShareClick}
                className="bg-background/50 backdrop-blur-sm hover:bg-background/80"
              >
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share</span>
              </Button>
              <ThemeToggle />
            </div>
          </div>
          
          <div className="text-center mx-auto max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pirate-navy to-pirate-ocean dark:from-pirate-gold dark:to-pirate-sand animate-shimmer bg-[length:200%_auto]">
              Communicate Like a True Buccaneer!
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Transform your everyday speech into authentic pirate lingo with our advanced AI translator.
              Perfect for Talk Like a Pirate Day or whenever you need to add some swashbuckling flair to your communication!
            </p>
          </div>
        </header>
        
        <main className="mx-auto max-w-4xl">
          <div className="weathered-border bg-card/90 backdrop-blur-sm shadow-lg rounded-xl overflow-hidden h-[600px]">
            <ChatInterface />
          </div>
          
          <div className="mt-8 text-center text-muted-foreground text-sm">
            <p>
              Pirate Dialect AI © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
