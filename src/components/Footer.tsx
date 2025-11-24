import { Instagram, Music, Send } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-secondary-foreground py-12" >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold">Ⓒ Slavery</p>
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:text-primary"
              aria-label="Instagram артиста"
            >
              <Instagram className="w-6 h-6" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:text-primary"
              aria-label="TikTok артиста"
            >
              <Music className="w-6 h-6" />
              <span className="hidden sm:inline">TikTok</span>
            </a>
            
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:text-primary"
              aria-label="Telegram артиста"
            >
              <Send className="w-6 h-6" />
              <span className="hidden sm:inline">Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
