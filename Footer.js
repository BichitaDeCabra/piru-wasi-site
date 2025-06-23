function Footer() {
  try {
    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    return (
      <footer 
        className="bg-amber-900 text-white py-12"
        data-name="footer"
        data-file="components/Footer.js"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-4">Piru Wasi</h3>
              <p className="text-amber-100 leading-relaxed">
                Experience authentic Peruvian luxury in the heart of historic Arequipa.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Rooms', 'Services', 'Gallery', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-amber-100 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-amber-100">
                <p>Calle Santa Catalina 123</p>
                <p>Arequipa, Peru</p>
                <p>+51 54 123-4567</p>
                <p>info@piruwasi.com</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['facebook', 'instagram', 'twitter'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                  >
                    <i data-lucide={social} className="w-5 h-5"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-100">
            <p>&copy; 2024 Piru Wasi Hotel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    reportError(error);
  }
}
