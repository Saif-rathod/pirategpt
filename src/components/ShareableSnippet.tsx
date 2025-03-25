
import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Flag, Download, Share2 } from 'lucide-react';
import { toast } from 'sonner';
import html2canvas from 'html2canvas';

interface ShareableSnippetProps {
  message: string;
}

const ShareableSnippet: React.FC<ShareableSnippetProps> = ({ message }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const snippetRef = useRef<HTMLDivElement>(null);

  const generateImage = async () => {
    if (!snippetRef.current) return;
    
    setIsGenerating(true);
    
    try {
      const canvas = await html2canvas(snippetRef.current, {
        backgroundColor: null,
        scale: 2, // Higher resolution
      });
      
      const imageURL = canvas.toDataURL('image/png');
      
      // Create a download link
      const downloadLink = document.createElement('a');
      downloadLink.href = imageURL;
      downloadLink.download = 'pirate-translation.png';
      
      // Click the download link
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      
      toast.success('Image generated and downloaded!');
    } catch (error) {
      console.error('Error generating image:', error);
      toast.error('Failed to generate image');
    } finally {
      setIsGenerating(false);
    }
  };

  const shareImage = async () => {
    if (!snippetRef.current) return;
    
    setIsGenerating(true);
    
    try {
      const canvas = await html2canvas(snippetRef.current, {
        backgroundColor: null,
        scale: 2, // Higher resolution
      });
      
      const imageURL = canvas.toDataURL('image/png');
      
      // Convert data URL to blob
      const blobData = await fetch(imageURL).then(res => res.blob());
      
      // Share the image if Web Share API is available
      if (navigator.share) {
        await navigator.share({
          title: 'My Pirate Translation',
          text: 'Check out this pirate translation!',
          files: [new File([blobData], 'pirate-translation.png', { type: 'image/png' })],
        });
        toast.success('Shared successfully!');
      } else {
        // Fallback if Web Share API is not available
        toast.error('Sharing not supported on your device');
        // Still download the image as fallback
        generateImage();
      }
    } catch (error) {
      console.error('Error sharing image:', error);
      toast.error('Failed to share image');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="nautical-card p-4 my-4 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Flag className="h-5 w-5 text-pirate-gold" />
          Share Your Translation
        </h3>
        <div className="flex gap-2">
          <Button
            onClick={generateImage}
            variant="outline"
            className="text-pirate-navy hover:bg-pirate-navy/10"
            disabled={isGenerating}
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          <Button
            onClick={shareImage}
            variant="outline"
            className="bg-pirate-navy text-pirate-gold hover:bg-pirate-navy/80"
            disabled={isGenerating}
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </div>
      
      <div className="relative">
        <div 
          ref={snippetRef} 
          className="w-full p-6 bg-pirate-parchment rounded-lg border border-pirate-brown/20 text-pirate-midnight"
        >
          <div className="mb-4 text-center">
            <h4 className="text-xl font-bold pirate-font">Pirate Dialect AI</h4>
            <p className="text-sm text-pirate-navy/70">Translation Card</p>
          </div>
          
          <p className="text-lg italic mb-4">{message}</p>
          
          <div className="text-right text-sm text-pirate-navy/70">
            - Translated by Pirate Dialect AI
          </div>
        </div>
        
        {isGenerating && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
            <div className="animate-spin h-8 w-8 border-4 border-pirate-gold border-t-transparent rounded-full"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShareableSnippet;
