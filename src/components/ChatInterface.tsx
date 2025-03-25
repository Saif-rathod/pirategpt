
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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    // Add user message
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
      // Add pirate response
      const pirateResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: translateToPirate(userMessage.text),
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
        <h2 className="text-xl font-semibold">Pirate Translator</h2>
        <Button 
          onClick={clearChat} 
          variant="ghost" 
          size="icon"
          className="text-muted-foreground hover:text-destructive"
        >
          <Trash2 className="h-5 w-5" />
        </Button>
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
