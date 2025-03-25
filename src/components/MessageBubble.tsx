
import React from 'react';
import { Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import PirateAvatar from './PirateAvatar';

interface MessageBubbleProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isUser, timestamp }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    toast.success('Copied to clipboard!');
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={cn(
      "flex items-start gap-2 my-4",
      isUser ? "justify-end" : "justify-start"
    )}>
      {!isUser && <PirateAvatar className="mt-1" />}
      
      <div className={cn(
        "message-bubble relative group",
        isUser ? "user-message" : "pirate-message"
      )}>
        <p className="whitespace-pre-wrap break-words">{message}</p>
        
        <div className="flex items-center justify-between mt-2 opacity-60 text-xs">
          <span>{formatTime(timestamp)}</span>
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
