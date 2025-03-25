
import React from 'react';
import { cn } from '@/lib/utils';

interface PirateAvatarProps {
  className?: string;
}

const PirateAvatar: React.FC<PirateAvatarProps> = ({ className }) => {
  return (
    <div className={cn("relative w-10 h-10 flex items-center justify-center", className)}>
      <div className="absolute inset-0 bg-pirate-navy rounded-full overflow-hidden border-2 border-pirate-gold flex items-center justify-center">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-7 h-7 text-pirate-gold"
        >
          <path 
            d="M2 22V19.5C2 18.1193 3.11929 17 4.5 17H19.5C20.8807 17 22 18.1193 22 19.5V22" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M6 10L7 11" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M18 10L17 11" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M10.5 7.5C10.5 7.5 11 8 12 8C13 8 13.5 7.5 13.5 7.5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M12 3L12 2" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M8 2L8.5 3.5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M16 2L15.5 3.5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M6 7H5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M19 7H18" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M9 4.5C9 4.5 9.5 6 12 6C14.5 6 15 4.5 15 4.5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M7 15C8.5 14.5 9.5 14 12 14C14.5 14 15.5 14.5 17 15" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>
      {/* Pirate hat */}
      <div className="absolute -top-3 left-0 w-full h-4 bg-pirate-crimson rounded-t-xl transform -rotate-6 z-10">
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-pirate-crimson rounded-t-full"></div>
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-pirate-gold rounded-full"></div>
      </div>
    </div>
  );
};

export default PirateAvatar;
