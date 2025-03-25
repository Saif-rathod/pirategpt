
import React, { useState, useRef, useEffect } from 'react';
import { Send, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { translateToPirate, getRandomPiratePhrase } from '@/utils/pirateTranslator';
import MessageBubble from './MessageBubble';
import { toast } from 'sonner';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: getRandomPiratePhrase(),
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedPirateDialect, setSelectedPirateDialect] = useState<'caribbean' | 'golden-age' | 'blackbeard'>('caribbean');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Pirate conversation additions
  const pirateResponses = [
    "Arr, that be interestin'! Tell me more, matey!",
    "Ye speak with wisdom beyond yer years, landlubber!",
    "By Davy Jones' locker, that reminds me of me adventures in the Caribbean!",
    "Blow me down! I never thought about it that way before!",
    "That be soundin' like somethin' a navy dog would say! Ha!",
    "Ye got the makin's of a fine pirate, ye do!",
    "I once sailed those very waters ye speak of!",
    "Shiver me timbers! Ye've got quite the story there!",
    "Ye know, that reminds me of me days sailin' under Captain Flint!",
    "Avast! Ye've given this old sea dog somethin' to ponder!",
    "Yarr! I've seen many strange things on the high seas, but never that!",
    "Pass the grog and tell me more o' yer tale!",
    "If me crew heard ye talkin' like that, they'd make ye walk the plank!"
  ];

  const getPirateResponse = (userMessage: string): string => {
    // Simple evaluation of user message to give a more contextual response
    const lowercaseMsg = userMessage.toLowerCase();
    
    // If user message is a question, answer with a pirate explanation
    if (lowercaseMsg.endsWith('?')) {
      return `Arr, that be a fine question! ${translateToPirate(userMessage, selectedPirateDialect)}`;
    }
    
    // If user message mentions sea, ocean, ship, etc. respond with a sea story
    if (lowercaseMsg.includes('sea') || lowercaseMsg.includes('ocean') || 
        lowercaseMsg.includes('ship') || lowercaseMsg.includes('sail')) {
      return `Ye speak of the sea! I've sailed the seven seas for many a year. ${translateToPirate(userMessage, selectedPirateDialect)}`;
    }
    
    // If message is short, add more pirate banter
    if (userMessage.split(' ').length < 5) {
      const randomResponse = pirateResponses[Math.floor(Math.random() * pirateResponses.length)];
      return `${randomResponse} ${translateToPirate(userMessage, selectedPirateDialect)}`;
    }
    
    // Standard translation with occasional pirate wisdom
    if (Math.random() > 0.7) {
      const randomResponse = pirateResponses[Math.floor(Math.random() * pirateResponses.length)];
      return `${randomResponse} And to respond to ye: ${translateToPirate(userMessage, selectedPirateDialect)}`;
    }
    
    return translateToPirate(userMessage, selectedPirateDialect);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    // Regular translation
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate processing delay
    setTimeout(() => {
      // Add pirate response with enhanced communication
      const pirateResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getPirateResponse(userMessage.text),
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, pirateResponse]);
      setIsTyping(false);
    }, 500 + Math.random() * 1000); // Random delay between 500-1500ms
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        text: getRandomPiratePhrase(),
        isUser: false,
        timestamp: new Date(),
      },
    ]);
    toast.success('Chat history cleared!');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h2 className="text-xl font-semibold">Pirate Conversation</h2>
        <div className="flex items-center gap-2">
          <select 
            className="bg-background border border-input rounded px-2 py-1 text-sm"
            value={selectedPirateDialect}
            onChange={(e) => setSelectedPirateDialect(e.target.value as any)}
          >
            <option value="caribbean">Caribbean Pirate</option>
            <option value="golden-age">Golden Age Pirate</option>
            <option value="blackbeard">Blackbeard Style</option>
          </select>
          <Button 
            onClick={clearChat} 
            variant="ghost" 
            size="icon"
            className="text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto px-4 py-4 scroll-container fade-mask">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message.text}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}
        
        {isTyping && (
          <div className="flex items-center gap-2 mt-2 ml-12">
            <div className="w-2 h-2 bg-pirate-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-pirate-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-pirate-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        )}
        
        <div ref={messagesEndRef}></div>
      </div>
      
      <div className="px-4 py-3 border-t bg-background/95 backdrop-blur-sm">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message here..."
            className="flex-1 bg-background/50 backdrop-blur-sm"
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={!inputValue.trim() || isTyping}
            className="bg-pirate-navy hover:bg-pirate-navy/90 text-white"
          >
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
