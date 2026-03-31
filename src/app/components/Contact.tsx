import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Contact() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Contatti & Orari</h2>
          <p className="text-lg text-gray-600">
            Vieni a trovarci, ti aspettiamo!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-amber-700" />
              <h3 className="font-semibold text-lg mb-2">Indirizzo</h3>
              <p className="text-gray-600">
                Via Roma, 123<br />
                20100 Milano, Italia
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-amber-700" />
              <h3 className="font-semibold text-lg mb-2">Telefono</h3>
              <p className="text-gray-600">
                +39 02 1234 5678<br />
                +39 345 678 9012
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-amber-700" />
              <h3 className="font-semibold text-lg mb-2">Orari</h3>
              <p className="text-gray-600">
                Lun - Ven: 7:00 - 20:00<br />
                Sab - Dom: 8:00 - 22:00
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-amber-700" />
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-gray-600">
                info@caffeitaliano.it<br />
                prenotazioni@caffeitaliano.it
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 rounded-lg overflow-hidden shadow-lg h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.2488674022053!2d9.189982376892842!3d45.46427033571058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6cd0c4d4b6f%3A0x8c1f9b0d8c1f9b0d!2sDuomo%20di%20Milano!5e0!3m2!1sit!2sit!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa Caffè Italiano"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
