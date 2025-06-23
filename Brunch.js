function Brunch() {
  try {
    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    return (
      <section 
        className="py-20 bg-white"
        data-name="brunch-section"
        data-file="components/Brunch.js"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <img 
                src="https://app.trickle.so/storage/public/images/usr_11bcd8f020000001/3af571bb-cb24-43d5-b14d-418f9cd39ed0.png"
                alt="Brunch Experience"
                className="rounded-lg shadow-xl hover-zoom w-full h-96 object-cover"
              />
            </div>
            
            <div className="fade-in">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-green-800 mb-6">
                Create Your Brunch Experience
              </h2>
              <p className="text-lg text-green-700 mb-6 leading-relaxed">
                Our beautiful patio is the perfect setting for an unforgettable brunch experience. 
                Surrounded by colonial architecture and lush greenery, it offers an intimate 
                outdoor dining atmosphere.
              </p>
              <p className="text-lg text-green-700 mb-8 leading-relaxed">
                The patio is available for groups from 5 to 20 people. Come with friends and 
                enjoy a delightful outdoor brunch in our charming colonial setting, complete 
                with authentic Peruvian flavors and warm hospitality.
              </p>
              
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-2 text-green-600">
                  <i data-lucide="users" className="w-5 h-5"></i>
                  <span>5-20 People</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <i data-lucide="sun" className="w-5 h-5"></i>
                  <span>Outdoor Patio</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <i data-lucide="utensils" className="w-5 h-5"></i>
                  <span>Authentic Cuisine</span>
                </div>
              </div>

              <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-zoom">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Brunch component error:', error);
    reportError(error);
  }
}
