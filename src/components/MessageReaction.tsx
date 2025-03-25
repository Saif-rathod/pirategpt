
import React from 'react';
import { Ship, Skull, Flag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export type ReactionType = 'skull' | 'ship' | 'flag';

interface ReactionButtonProps {
  type: ReactionType;
  count: number;
  isSelected: boolean;
  onClick: () => void;
}

const ReactionButton: React.FC<ReactionButtonProps> = ({ type, count, isSelected, onClick }) => {
  const getIcon = () => {
    switch (type) {
      case 'skull':
        return <Skull className="h-4 w-4" />;
      case 'ship':
        return <Ship className="h-4 w-4" />;
      case 'flag':
        return <Flag className="h-4 w-4" />;
    }
  };
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      className={cn(
        "flex items-center gap-1 py-1 px-2 h-8 rounded-full text-xs",
        isSelected ? "bg-pirate-gold/20 text-pirate-gold" : "hover:bg-background/80"
      )}
    >
      {getIcon()}
      <span>{count}</span>
    </Button>
  );
};

export interface MessageReactionProps {
  reactions: Record<ReactionType, { count: number; reacted: boolean }>;
  onReact: (type: ReactionType) => void;
}

const MessageReaction: React.FC<MessageReactionProps> = ({ reactions, onReact }) => {
  return (
    <div className="flex gap-1 mt-1">
      {Object.entries(reactions).map(([type, data]) => (
        <ReactionButton
          key={type}
          type={type as ReactionType}
          count={data.count}
          isSelected={data.reacted}
          onClick={() => onReact(type as ReactionType)}
        />
      ))}
    </div>
  );
};

export default MessageReaction;
