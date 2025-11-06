import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=800&h=600&fit=crop',
      title: 'Vores Hyggelige Café',
      description: 'Velkommen til vores moderne og hyggelige spilleområde'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&h=600&fit=crop',
      title: 'Brætspil Samling',
      description: 'Over 500 spil at vælge imellem'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1611891490922-dbb5a0a1e3e9?w=800&h=600&fit=crop',
      title: 'Spil Med Venner',
      description: 'Skab uforglemmelige minder sammen'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      title: 'Lækker Mad',
      description: 'Nyd vores udvalg af hjemmelavet mad og snacks'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop',
      title: 'Specialty Kaffe',
      description: 'Perfekt kaffe til en lang spilaften'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&h=600&fit=crop',
      title: 'Turneringer',
      description: 'Deltag i vores spændende turneringer'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
      title: 'Intimt Atmosfære',
      description: 'Perfekt til datenight eller små grupper'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&h=600&fit=crop',
      title: 'Store Grupper',
      description: 'Plads til fødselsdage og firmafester'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1530390902842-bf93eec51093?w=800&h=600&fit=crop',
      title: 'Familie Venligt',
      description: 'Hyggelige aktiviteter for alle aldre'
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      title: 'Events & Fester',
      description: 'Særlige arrangementer hver måned'
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
      title: 'Moderne Design',
      description: 'Stilfuldt indrettet for din komfort'
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop',
      title: 'Velkommen!',
      description: 'Vi ser frem til at se dig'
    }
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentIndex]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4 gradient-text">Galleri</h2>
        <p className="text-2xl text-bastard-700">Se billeder fra vores café og events</p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group relative aspect-square overflow-hidden rounded-xl shadow-minimal cursor-pointer transform transition-all duration-200 hover:shadow-minimal-xl hover:scale-105"
            onClick={() => openModal(index)}
          >
            {/* Gradient Background as Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-red via-accent-orange to-accent-purple"></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-40 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center">
              <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 transform group-hover:scale-110 transition-transform">
                <Maximize2 className="h-10 w-10 mx-auto mb-3 drop-shadow-lg" />
                <h3 className="font-bold text-lg mb-2 drop-shadow-lg">{image.title}</h3>
                <p className="text-sm drop-shadow-md">{image.description}</p>
              </div>
            </div>

            {/* Image Number Badge */}
            <div className="absolute top-3 right-3 bg-white/95 text-primary px-3 py-1 rounded-lg text-sm font-bold shadow-md backdrop-blur-sm">
              {index + 1}/{images.length}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-14 text-center bg-bastard-50 rounded-xl p-10 shadow-minimal-lg border-2 border-bastard-200">
        <h3 className="text-3xl font-bold text-bastard-900 mb-5">Besøg Os i Dag!</h3>
        <p className="text-bastard-700 text-xl mb-8 leading-relaxed">
          Oplevelsen er endnu bedre i virkeligheden. Kom forbi og se selv!
        </p>
        <button className="btn-primary bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-light hover:shadow-dark-lg transition-all transform hover:scale-105">
          Find Os Her
        </button>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-3"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-3"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image Container */}
            <div
              className="relative max-h-full max-w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gradient Background in Modal */}
              <div className="bg-gradient-to-br from-accent-red via-accent-orange to-accent-purple rounded-xl p-1 shadow-2xl">
                <div className="bg-primary rounded-xl p-10">
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">{selectedImage.title}</h3>
                    <p className="text-bastard-200 text-lg">{selectedImage.description}</p>
                  </div>

                  {/* Placeholder box with gradient and emoji */}
                  <div className="bg-gradient-to-br from-accent-red via-accent-orange to-accent-purple rounded-xl aspect-video w-full max-w-4xl flex items-center justify-center shadow-minimal-xl">
                    <div className="text-center text-white">
                      <div className="text-9xl mb-6 animate-gentle-float drop-shadow-2xl">
                        {currentIndex % 4 === 0 && '🎲'}
                        {currentIndex % 4 === 1 && '🎮'}
                        {currentIndex % 4 === 2 && '☕'}
                        {currentIndex % 4 === 3 && '🎉'}
                      </div>
                      <p className="text-2xl font-bold drop-shadow-lg">{selectedImage.title}</p>
                    </div>
                  </div>

                  <div className="text-center mt-6 text-bastard-300 text-base font-medium">
                    Billede {currentIndex + 1} af {images.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
