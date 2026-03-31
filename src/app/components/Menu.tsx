import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface MenuProps {
  espressoImage: string;
  latteArtImage: string;
  pastriesImage: string;
}

export function Menu({ espressoImage, latteArtImage, pastriesImage }: MenuProps) {
  const drinks = [
    {
      name: 'Espresso',
      description: 'Caffè italiano classico, intenso e aromatico',
      price: '2.50€',
      image: espressoImage
    },
    {
      name: 'Cappuccino',
      description: 'Espresso con latte montato e schiuma cremosa',
      price: '3.50€',
      image: latteArtImage
    },
    {
      name: 'Caffè Latte',
      description: 'Espresso con latte caldo e delicata schiuma',
      price: '3.80€',
      image: latteArtImage
    },
    {
      name: 'Macchiato',
      description: 'Espresso "macchiato" con un tocco di latte',
      price: '2.80€',
      image: espressoImage
    },
    {
      name: 'Americano',
      description: 'Espresso allungato con acqua calda',
      price: '3.00€',
      image: espressoImage
    },
    {
      name: 'Mocha',
      description: 'Cappuccino con cioccolato e panna',
      price: '4.20€',
      image: latteArtImage
    }
  ];

  const food = [
    {
      name: 'Cornetto Classico',
      description: 'Cornetto fragrante appena sfornato',
      price: '2.00€',
      image: pastriesImage
    },
    {
      name: 'Cornetto alla Crema',
      description: 'Con crema pasticcera fatta in casa',
      price: '2.50€',
      image: pastriesImage
    },
    {
      name: 'Cornetto al Cioccolato',
      description: 'Ripieno di cioccolato fondente',
      price: '2.50€',
      image: pastriesImage
    },
    {
      name: 'Bombolone',
      description: 'Soffice bombolone con crema o cioccolato',
      price: '2.80€',
      image: pastriesImage
    },
    {
      name: 'Ciambella',
      description: 'Ciambella dolce tradizionale',
      price: '2.20€',
      image: pastriesImage
    },
    {
      name: 'Torta del Giorno',
      description: 'Torta artigianale fatta in casa',
      price: '3.50€',
      image: pastriesImage
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Il Nostro Menu</h2>
          <p className="text-lg text-gray-600">
            Scopri le nostre specialità preparate con passione
          </p>
        </div>

        <Tabs defaultValue="drinks" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="drinks">Bevande</TabsTrigger>
            <TabsTrigger value="food">Dolci</TabsTrigger>
          </TabsList>
          
          <TabsContent value="drinks">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {drinks.map((item) => (
                <Card key={item.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{item.name}</CardTitle>
                      <span className="text-xl text-amber-700 font-semibold">{item.price}</span>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="food">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {food.map((item) => (
                <Card key={item.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{item.name}</CardTitle>
                      <span className="text-xl text-amber-700 font-semibold">{item.price}</span>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
