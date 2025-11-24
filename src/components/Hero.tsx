import { Button } from "@/components/ui/button";
import heroKitten from "@/assets/hero-kitten.jpg";

interface HeroProps {
  onBuyClick: () => void;
}

export const Hero = ({ onBuyClick }: HeroProps) => {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroKitten})` }}
      >
        <div className="absolute inset-0 from-background/80 via-background/60 to-background" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-foreground text-white animate-fade-in">
          Вардан, не трогай кота
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 md:mb-12 text-muted-foreground text-white animate-fade-in">
          Он тебе ничего не сделал
        </p>
        <Button 
          size="lg"
          className="text-lg px-8 py-6 transition-all duration-300 hover:scale-105 animate-fade-in"
          onClick={onBuyClick}
        >
          Купить шмот
        </Button>
      </div>
    </section>
  );
};
