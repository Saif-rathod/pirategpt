
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { generatePirateName } from '@/utils/pirateTranslator';
import { Ship } from 'lucide-react';
import { toast } from 'sonner';

const PirateNameGenerator: React.FC = () => {
  const [name, setName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateName = () => {
    setIsLoading(true);
    // Simulate loading to make the experience more interactive
    setTimeout(() => {
      setName(generatePirateName());
      setIsLoading(false);
    }, 500);
  };

  const copyName = () => {
    if (name) {
      navigator.clipboard.writeText(name);
      toast.success('Pirate name copied to clipboard!');
    }
  };

  return (
    <div className="nautical-card p-4 my-4 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Ship className="h-5 w-5 text-pirate-gold" />
          Pirate Name Generator
        </h3>
        <Button
          onClick={generateName}
          variant="outline"
          className="bg-pirate-navy text-pirate-gold hover:bg-pirate-navy/80"
          disabled={isLoading}
        >
          {isLoading ? "Thinking..." : "Generate Name"}
        </Button>
      </div>
      
      {name && (
        <div className="mt-2 flex flex-col sm:flex-row items-center justify-between p-4 bg-pirate-parchment/70 rounded-lg border border-pirate-brown/20 text-pirate-midnight dark:bg-pirate-parchment/90">
          <p className="text-xl font-bold pirate-font mb-2 sm:mb-0">{name}</p>
          <Button 
            onClick={copyName} 
            variant="ghost" 
            size="sm" 
            className="text-pirate-navy hover:bg-pirate-navy/10"
          >
            Copy
          </Button>
        </div>
      )}
    </div>
  );
};

export default PirateNameGenerator;
