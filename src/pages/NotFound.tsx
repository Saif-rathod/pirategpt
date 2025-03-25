
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { MapPin, Compass, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pirate-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute top-32 -right-32 w-96 h-96 bg-pirate-seafoam/5 rounded-full blur-3xl"></div>
        
        {/* Map grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="map-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#map-grid)" />
          </svg>
        </div>
        
        {/* Compass rose */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
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
      
      <div className="text-center relative z-10 p-8 max-w-md mx-auto weathered-border bg-card/90 backdrop-blur-sm rounded-xl">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <Compass className="w-24 h-24 text-pirate-gold animate-float" />
            <MapPin className="w-8 h-8 text-pirate-crimson absolute right-0 bottom-0" />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pirate-crimson to-pirate-navy">404</h1>
        <p className="text-xl text-foreground mb-2">Ye Be Off Course, Matey!</p>
        <p className="text-muted-foreground mb-6">
          This treasure map leads nowhere. The page ye seek has been swallowed by the briny deep or never existed in the first place.
        </p>
        
        <Button asChild className="bg-pirate-navy hover:bg-pirate-navy/90">
          <a href="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Safe Harbor
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
