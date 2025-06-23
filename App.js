function App() {
  try {
    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    React.useEffect(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      }, observerOptions);

      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }, []);

    return (
      <div className="App" data-name="main-app" data-file="app.js">
        <Header />
        <Hero />
        <About />
        <Rooms />
        <Services />
        <Brunch />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    reportError(error);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
