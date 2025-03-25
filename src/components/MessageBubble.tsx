
import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import PirateAvatar from './PirateAvatar';
import MessageReaction, { ReactionType } from './MessageReaction';

interface MessageBubbleProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isUser, timestamp }) => {
  const [reactions, setReactions] = useState<Record<ReactionType, { count: number; reacted: boolean }>>({
    skull: { count: 0, reacted: false },
    ship: { count: 0, reacted: false },
    flag: { count: 0, reacted: false }
  });
  
  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    toast.success('Copied to clipboard!');
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  const handleReaction = (type: ReactionType) => {
    setReactions(prev => {
      const newReactions = { ...prev };
      if (newReactions[type].reacted) {
        // User is unreacting
        newReactions[type] = {
          count: Math.max(0, newReactions[type].count - 1),
          reacted: false
        };
      } else {
        // User is reacting
        newReactions[type] = {
          count: newReactions[type].count + 1,
          reacted: true
        };
      }
      return newReactions;
    });
  };

  return (
    <div className={cn(
      "flex items-start gap-2 my-4",
      isUser ? "justify-end" : "justify-start"
    )}>
      {!isUser && <PirateAvatar className="mt-1" />}
      
      <div className={cn(
        "message-bubble relative group",
        isUser ? "user-message" : "pirate-message dark:bg-pirate-parchment/90 dark:text-pirate-midnight"
      )}>
        <p className="whitespace-pre-wrap break-words">{message}</p>
        
        <div className="flex flex-col mt-2">
          <div className="flex items-center justify-between opacity-60 text-xs">
            <span>{formatTime(timestamp)}</span>
          </div>
          
          {!isUser && <MessageReaction reactions={reactions} onReact={handleReaction} />}
        </div>
        
        <Button
          onClick={handleCopy}
          size="icon"
          variant="ghost"
          className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 bg-background/50 backdrop-blur-sm"
          aria-label="Copy message"
        >
          <Copy className="h-3 w-3" />
        </Button>
      </div>
      
      {isUser && (
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-sm font-medium text-primary">You</span>
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
