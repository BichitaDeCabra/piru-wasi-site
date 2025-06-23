function Gallery() {
  try {
    const images = [
      'https://app.trickle.so/storage/public/images/usr_11bcd8f020000001/f591e342-fffd-4ab7-8044-77f9d4adfcb4.jpeg',
      'https://app.trickle.so/storage/public/images/usr_11bcd8f020000001/5bd126a6-34eb-443b-abb0-afa0dd773bef.jpeg',
      'https://app.trickle.so/storage/public/images/usr_11bcd8f020000001/251360f0-6d48-4654-82de-fe600a60a991.jpeg',
      'https://app.trickle.so/storage/public/images/usr_11bcd8f020000001/2b2c022c-2cf6-4a7d-91ee-07df564b942f.jpeg',
      'https://app.trickle.so/storage/public/images/usr_11bcd8f020000001/e4554297-f6b4-4da2-9cc9-7e6c60510337.jpeg',
      'https://app.trickle.so/storage/public/images/usr_11bcd8f020000001/144707b0-4023-42eb-9f41-2db4601c8524.jpeg'
    ];

    return (
      <section 
        id="gallery" 
        className="py-20 bg-white"
        data-name="gallery-section"
        data-file="components/Gallery.js"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Gallery
            </h2>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">
              Discover the beauty and elegance of Piru Wasi through our curated photo collection
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg hover-zoom fade-in group cursor-pointer"
              >
                <img 
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Gallery component error:', error);
    reportError(error);
  }
}
