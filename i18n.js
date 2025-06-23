const translations = {
  en: {
    home: 'Home',
    about: 'About',
    rooms: 'Rooms',
    services: 'Services',
    gallery: 'Gallery',
    contact: 'Contact',
    bookStay: 'Book Your Stay',
    exploreRooms: 'Explore Rooms',
    welcome: 'Welcome to',
    experienceText: 'Experience authentic luxury in the heart of Arequipa',
    luxuryAccommodations: 'Luxury Accommodations',
    premiumServices: 'Premium Services',
    contactUs: 'Contact Us',
    sendMessage: 'Send Message',
    followUs: 'Follow Us'
  },
  es: {
    home: 'Inicio',
    about: 'Nosotros',
    rooms: 'Habitaciones',
    services: 'Servicios',
    gallery: 'Galería',
    contact: 'Contacto',
    bookStay: 'Reservar Estadía',
    exploreRooms: 'Explorar Habitaciones',
    welcome: 'Bienvenido a',
    experienceText: 'Experimenta lujo auténtico en el corazón de Arequipa',
    luxuryAccommodations: 'Alojamientos de Lujo',
    premiumServices: 'Servicios Premium',
    contactUs: 'Contáctanos',
    sendMessage: 'Enviar Mensaje',
    followUs: 'Síguenos'
  },
  fr: {
    home: 'Accueil',
    about: 'À Propos',
    rooms: 'Chambres',
    services: 'Services',
    gallery: 'Galerie',
    contact: 'Contact',
    bookStay: 'Réserver Séjour',
    exploreRooms: 'Explorer Chambres',
    welcome: 'Bienvenue à',
    experienceText: 'Découvrez le luxe authentique au cœur d\'Arequipa',
    luxuryAccommodations: 'Hébergements de Luxe',
    premiumServices: 'Services Premium',
    contactUs: 'Nous Contacter',
    sendMessage: 'Envoyer Message',
    followUs: 'Suivez-nous'
  }
};

function useTranslation() {
  const [language, setLanguage] = React.useState('en');
  
  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return { t, language, setLanguage };
}
