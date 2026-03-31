import { Heart, Award, Users } from 'lucide-react';

interface AboutProps {
  coffeeBeansImage: string;
}

export function About({ coffeeBeansImage }: AboutProps) {
  return (
    <section className="py-20 px-4 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6">La Nostra Storia</h2>
            <p className="text-lg mb-6 text-gray-700">
              Dal 1985, Caffè Italiano è sinonimo di qualità e passione. 
              Ogni tazza racconta la storia di chicchi selezionati, tostati 
              artigianalmente e preparati con amore dai nostri baristi esperti.
            </p>
            <p className="text-lg mb-8 text-gray-700">
              Utilizziamo solo i migliori chicchi provenienti dalle piantagioni 
              più rinomate del mondo, garantendo un'esperienza unica ad ogni sorso.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Heart className="w-10 h-10 mx-auto mb-3 text-amber-700" />
                <h3 className="font-semibold mb-2">Passione</h3>
                <p className="text-sm text-gray-600">Dal 1985</p>
              </div>
              <div className="text-center">
                <Award className="w-10 h-10 mx-auto mb-3 text-amber-700" />
                <h3 className="font-semibold mb-2">Qualità</h3>
                <p className="text-sm text-gray-600">Premiata</p>
              </div>
              <div className="text-center">
                <Users className="w-10 h-10 mx-auto mb-3 text-amber-700" />
                <h3 className="font-semibold mb-2">Comunità</h3>
                <p className="text-sm text-gray-600">10k+ clienti</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={coffeeBeansImage} 
              alt="Chicchi di caffè" 
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
