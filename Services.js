function Services() {
  try {
    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    const services = [
      { icon: 'coffee', title: 'Breakfast', desc: 'Delicious continental breakfast served daily' },
      { icon: 'bell', title: 'Room Service', desc: 'In-room dining available throughout your stay' },
      { icon: 'phone', title: '24/7 Concierge', desc: 'Round-the-clock assistance and recommendations' },
      { icon: 'wifi', title: 'Free WiFi', desc: 'High-speed internet throughout the property' }
    ];

    return (
      <section 
        id="services" 
        className="py-20 bg-stone-100"
        data-name="services-section"
        data-file="components/Services.js"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">
              Essential services to ensure your stay is comfortable and memorable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover-zoom fade-in"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i data-lucide={service.icon} className="w-8 h-8 text-green-700"></i>
                </div>
                <h3 className="font-playfair text-xl font-bold text-green-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-green-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Services component error:', error);
    reportError(error);
  }
}
