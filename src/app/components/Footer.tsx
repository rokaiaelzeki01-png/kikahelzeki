import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8" />
              <span className="text-xl font-semibold">Caffè Italiano</span>
            </div>
            <p className="text-amber-200">
              L'arte del caffè dal 1985
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Menu</h3>
            <ul className="space-y-2 text-amber-200">
              <li><a href="#" className="hover:text-white transition-colors">Bevande</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dolci</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Specialità</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Promozioni</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Informazioni</h3>
            <ul className="space-y-2 text-amber-200">
              <li><a href="#" className="hover:text-white transition-colors">Chi Siamo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">La Nostra Storia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lavora Con Noi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Social</h3>
            <p className="text-amber-200 mb-4">Seguici sui social media</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-8 text-center text-amber-200">
          <p>© 2026 Caffè Italiano. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
