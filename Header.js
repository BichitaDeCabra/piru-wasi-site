function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [showLanguages, setShowLanguages] = React.useState(false);
    const { t, language, setLanguage } = useTranslation();

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    React.useEffect(() => {
      lucide.createIcons();
    }, [isMenuOpen, showLanguages]);

    const languages = [
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'es', name: 'Español', flag: '🇪🇸' },
      { code: 'fr', name: 'Français', flag: '🇫🇷' }
    ];

    return (
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
        }`}
        data-name="header"
        data-file="components/Header.js"
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://app.trickle.so/storage/public/images/usr_11bcd8f020000001/37d7b042-9470-4949-84dd-567f36712f3d.png"
                alt="Hotel Logo"
                className="h-10 w-auto"
              />
              <img 
                src="https://app.trickle.so/storage/public/images/usr_11bcd8f020000001/c208d318-8dd7-4743-b9f2-d67c15d903e0.png"
                alt="Hotel Name"
                className="h-8 w-auto"
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'rooms', 'services', 'gallery', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`}
                  className="font-medium transition-colors duration-300"
                  style={{color: '#A59973'}}
                  onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                  onMouseLeave={(e) => e.target.style.opacity = '1'}
                >
                  {t(item)}
                </a>
              ))}
              
              <div className="language-selector">
                <button 
                  onClick={() => setShowLanguages(!showLanguages)}
                  className="flex items-center space-x-1 transition-opacity duration-300"
                  style={{color: '#A59973'}}
                  onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                  onMouseLeave={(e) => e.target.style.opacity = '1'}
                >
                  <span>{languages.find(l => l.code === language)?.flag}</span>
                  <i data-lucide="chevron-down" className="w-4 h-4"></i>
                </button>
                
                {showLanguages && (
                  <div className="language-dropdown glass-effect rounded-lg shadow-lg py-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLanguages(false);
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-green-50 flex items-center space-x-2"
                      >
                        <span>{lang.flag}</span>
                        <span style={{color: '#A59973'}}>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button 
              className="md:hidden p-2"
              style={{color: '#A59973'}}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i data-lucide={isMenuOpen ? 'x' : 'menu'} className="w-6 h-6"></i>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 glass-effect rounded-lg">
              {['home', 'about', 'rooms', 'services', 'gallery', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`}
                  className="block py-2 px-4 transition-opacity"
                  style={{color: '#A59973'}}
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                  onMouseLeave={(e) => e.target.style.opacity = '1'}
                >
                  {t(item)}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    reportError(error);
  }
}
