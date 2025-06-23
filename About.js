function About() {
  try {
    const { t } = useTranslation();

    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    const features = [
      { icon: 'map-pin', title: 'Prime Location', desc: 'Heart of Yanahuara District' },
      { icon: 'users', title: 'Personal Service', desc: '24/7 concierge assistance' },
      { icon: 'wifi', title: 'Modern Amenities', desc: 'Free WiFi throughout' },
      { icon: 'coffee', title: 'Local Cuisine', desc: 'Authentic Peruvian dining' }
    ];

    return (
      <section 
        id="about" 
        className="py-20 bg-stone-50"
        data-name="about-section"
        data-file="components/About.js"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-green-800 mb-6">
                {t('welcome')} Piru Wasi
              </h2>
              <p className="text-lg text-green-700 mb-6 leading-relaxed">
                Located in the heart of Yanahuara District, Piru Wasi is housed in a beautifully preserved 
                colonial building from 1800, offering an intimate boutique experience that celebrates 
                Peru's rich architectural heritage.
              </p>
              <p className="text-lg text-green-700 mb-8 leading-relaxed">
                Our carefully curated rooms blend traditional colonial architecture with contemporary 
                amenities, creating a unique sanctuary for discerning travelers seeking authentic 
                Arequipeño charm.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <i data-lucide={feature.icon} className="w-5 h-5 text-green-700"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800 mb-1">{feature.title}</h3>
                      <p className="text-sm text-green-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="fade-in">
              <img 
                src="https://app.trickle.so/storage/public/images/usr_11bcd8f020000001/0f38af0d-f98b-4fb0-b109-27323488fc1f.jpeg"
                alt="Hotel lobby"
                className="rounded-lg shadow-xl hover-zoom w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    reportError(error);
  }
}
