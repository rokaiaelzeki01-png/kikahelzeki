import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const heroImage = "https://images.unsplash.com/photo-1668884405041-aa8963908538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3IlMjBjb3p5fGVufDF8fHx8MTc3NDg3MzcwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  
  const espressoImage = "https://images.unsplash.com/photo-1649612427727-31f1e184e9e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGN1cCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3NDg4MTU0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  
  const latteArtImage = "https://images.unsplash.com/photo-1667388363683-a07bbf0c84b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwbGF0dGUlMjBhcnR8ZW58MXx8fHwxNzc0OTI3MDM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  
  const coffeeBeansImage = "https://images.unsplash.com/photo-1672570050756-4f1953bde478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzc0ODg1NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  
  const baristaImage = "https://images.unsplash.com/photo-1680980892281-f818d9791398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwbWFraW5nJTIwY29mZmVlfGVufDF8fHx8MTc3NDkxMzAyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  
  const pastriesImage = "https://images.unsplash.com/photo-1587912001191-0cd4f14fd89e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cmllcyUyMGJha2VyeSUyMGNyb2lzc2FudHxlbnwxfHx8fDE3NzQ5NDEyODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const galleryImages = [
    heroImage,
    baristaImage,
    latteArtImage,
    coffeeBeansImage,
    espressoImage,
    pastriesImage
  ];

  return (
    <div className="size-full">
      <Hero heroImage={heroImage} />
      <About coffeeBeansImage={coffeeBeansImage} />
      <Menu 
        espressoImage={espressoImage}
        latteArtImage={latteArtImage}
        pastriesImage={pastriesImage}
      />
      <Gallery images={galleryImages} />
      <Contact />
      <Footer />
    </div>
  );
}
