function Hero() {
  try {
    const { t } = useTranslation();

    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    return (
      <section 
        id="home"
        className="relative h-screen flex items-center justify-center parallax"
        style={{
          backgroundImage: 'url(https://app.trickle.so/storage/public/images/usr_11bcd8f020000001/850060a5-09cb-4f88-98bd-634c1c4fa56e.jpeg)'
        }}
        data-name="hero-section"
        data-file="components/Hero.js"
      >
        <div className="absolute inset-0 gradient-overlay"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <img 
              src="https://app.trickle.so/storage/public/images/usr_11bcd8f020000001/37d7b042-9470-4949-84dd-567f36712f3d.png"
              alt="Hotel Logo"
              className="h-20 w-auto fade-in"
            />
          </div>
          <div className="flex justify-center mb-8">
            <img 
              src="https://app.trickle.so/storage/public/images/usr_11bcd8f020000001/c208d318-8dd7-4743-b9f2-d67c15d903e0.png"
              alt="Hotel Name"
              className="h-16 w-auto fade-in"
              style={{animationDelay: '0.2s'}}
            />
          </div>
          <p className="text-xl md:text-2xl mb-8 fade-in opacity-90" style={{animationDelay: '0.4s'}}>
            {t('experienceText')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{animationDelay: '0.6s'}}>
            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-zoom">
              {t('bookStay')}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              {t('exploreRooms')}
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <i data-lucide="chevron-down" className="w-8 h-8"></i>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    reportError(error);
  }
}
