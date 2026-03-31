interface GalleryProps {
  images: string[];
}

export function Gallery({ images }: GalleryProps) {
  return (
    <section className="py-20 px-4 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Galleria</h2>
          <p className="text-lg text-gray-600">
            Momenti speciali nel nostro caffè
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-72"
            >
              <img 
                src={image} 
                alt={`Galleria ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Scopri di più</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
