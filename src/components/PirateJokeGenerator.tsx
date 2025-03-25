
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { getRandomPirateJoke } from '@/utils/pirateTranslator';
import { Skull } from 'lucide-react';

const PirateJokeGenerator: React.FC = () => {
  const [joke, setJoke] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateJoke = () => {
    setIsLoading(true);
    // Simulate loading to make the experience more interactive
    setTimeout(() => {
      setJoke(getRandomPirateJoke());
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="nautical-card p-4 my-4 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Skull className="h-5 w-5 text-pirate-gold" />
          Pirate Joke Generator
        </h3>
        <Button
          onClick={generateJoke}
          variant="outline"
          className="bg-pirate-navy text-pirate-gold hover:bg-pirate-navy/80"
          disabled={isLoading}
        >
          {isLoading ? "Finding a joke..." : "Tell me a joke!"}
        </Button>
      </div>
      
      {joke && (
        <div className="mt-2 p-4 bg-pirate-parchment/70 rounded-lg border border-pirate-brown/20 text-pirate-midnight dark:bg-pirate-parchment/90">
          <p className="italic">{joke}</p>
        </div>
      )}
    </div>
  );
};

export default PirateJokeGenerator;
