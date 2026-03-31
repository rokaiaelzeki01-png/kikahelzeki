import { Coffee } from 'lucide-react';
import { Button } from './ui/button';

interface HeroProps {
  heroImage: string;
}

export function Hero({ heroImage }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <div className="flex justify-center mb-6">
          <Coffee className="w-16 h-16" />
        </div>
        <h1 className="text-5xl md:text-7xl mb-6">Caffè Italiano</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          L'arte del caffè nel cuore della città
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="bg-amber-700 hover:bg-amber-800">
            Scopri il Menu
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Dove Siamo
          </Button>
        </div>
      </div>
    </section>
  );
}
