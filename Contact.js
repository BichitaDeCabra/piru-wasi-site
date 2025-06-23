function Contact() {
  try {
    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    return (
      <section 
        id="contact" 
        className="py-20 bg-stone-50"
        data-name="contact-section"
        data-file="components/Contact.js"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to experience Piru Wasi? Get in touch with us for reservations and inquiries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="fade-in">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i data-lucide="map-pin" className="w-6 h-6 text-amber-700"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Address</h3>
                    <p className="text-gray-600">Calle Santa Catalina 123<br />Historic Center, Arequipa, Peru</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i data-lucide="phone" className="w-6 h-6 text-amber-700"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Phone</h3>
                    <p className="text-gray-600">+51 54 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i data-lucide="mail" className="w-6 h-6 text-amber-700"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Email</h3>
                    <p className="text-gray-600">reservations@piruwasi.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-in">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <textarea 
                  rows="5" 
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                ></textarea>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    reportError(error);
  }
}
