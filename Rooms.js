function Rooms() {
  try {
    const { t } = useTranslation();

    const rooms = [
      {
        id: 1,
        name: 'Single Room',
        image: 'https://app.trickle.so/storage/public/images/usr_11bcd8f020000001/f96cfa1e-32e3-4cdb-a67a-b5070a2438a3.jpeg',
        price: '$120',
        features: ['Single Bed', 'City View', 'Private Bathroom', 'Minibar']
      },
      {
        id: 2,
        name: 'Double Room',
        image: 'https://app.trickle.so/storage/public/images/usr_11bcd8f020000001/35813caa-6ebf-4a53-a91c-c22a90ddf42d.jpeg',
        price: '$180',
        features: ['Double Bed', 'Mountain View', 'Private Bathroom', 'Room Service']
      },
      {
        id: 3,
        name: 'Colonial Suite',
        image: 'https://app.trickle.so/storage/public/images/usr_11bcd8f020000001/8c190a6f-7ff5-445b-be07-1dbd3982b5fc.jpeg',
        price: '$280',
        features: ['Master Suite', 'Panoramic View', 'Private Terrace', 'Butler Service']
      }
    ];

    return (
      <section 
        id="rooms" 
        className="py-20 bg-white"
        data-name="rooms-section"
        data-file="components/Rooms.js"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-green-800 mb-4">
              {t('luxuryAccommodations')}
            </h2>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">
              Single rooms, double rooms, and one suite available - each thoughtfully designed with colonial charm
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div 
                key={room.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover-zoom fade-in border border-green-100"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full font-semibold">
                    {room.price}/night
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-green-800 mb-4">
                    {room.name}
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-green-600">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Rooms component error:', error);
    reportError(error);
  }
}
