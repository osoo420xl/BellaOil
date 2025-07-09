import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-stone-800">
            <span className="text-olive-600">Olive</span>Care
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => navigateTo('landing')}
              className={`text-stone-700 hover:text-olive-600 transition-colors ${currentPage === 'landing' ? 'text-olive-600' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => navigateTo('products')}
              className={`text-stone-700 hover:text-olive-600 transition-colors ${currentPage === 'products' ? 'text-olive-600' : ''}`}
            >
              Products
            </button>
            <a href="#about" className="text-stone-700 hover:text-olive-600 transition-colors">About</a>
            <a href="#contact" className="text-stone-700 hover:text-olive-600 transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-stone-700 hover:text-olive-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-stone-100">
            <div className="px-6 py-4 space-y-4">
              <button 
                onClick={() => navigateTo('landing')}
                className="block w-full text-left text-stone-700 hover:text-olive-600 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => navigateTo('products')}
                className="block w-full text-left text-stone-700 hover:text-olive-600 transition-colors"
              >
                Products
              </button>
              <a href="#about" className="block text-stone-700 hover:text-olive-600 transition-colors">About</a>
              <a href="#contact" className="block text-stone-700 hover:text-olive-600 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {currentPage === 'landing' && <LandingPage scrollY={scrollY} navigateTo={navigateTo} />}
        {currentPage === 'products' && <ProductPage scrollY={scrollY} />}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-olive-400">Olive</span>Care
              </h3>
              <p className="text-stone-400 mb-4">
                Premium infused olive oils for natural skincare and wellness.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-stone-400 hover:text-olive-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-stone-400 hover:text-olive-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-stone-400 hover:text-olive-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.748.1.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.163-1.506-.402-2.448-1.662-2.448-2.675 0-3.773 2.745-7.243 7.92-7.243 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-stone-400">
                <li><a href="#" className="hover:text-olive-400 transition-colors">Canterion Oil</a></li>
                <li><a href="#" className="hover:text-olive-400 transition-colors">Carrot Oil</a></li>
                <li><a href="#" className="hover:text-olive-400 transition-colors">Walnut Oil</a></li>
                <li><a href="#" className="hover:text-olive-400 transition-colors">Pure Olive Oil</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-stone-400">
                <li><a href="#" className="hover:text-olive-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-olive-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-olive-400 transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-olive-400 transition-colors">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-stone-400 mb-4">Stay updated with our latest products and offers.</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-stone-800 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-olive-400"
                />
                <button className="px-4 py-2 bg-olive-600 hover:bg-olive-700 text-white rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-400">
            <p>&copy; 2024 OliveCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const LandingPage = ({ scrollY, navigateTo }) => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section 
        className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1620544770548-c20f31d0914e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYmVhdXR5fGVufDB8fHxncmVlbnwxNzUyMDk1ODc5fDA&ixlib=rb-4.1.0&q=85')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-900/20 to-stone-900/60"></div>
        
        {/* Large Background Text */}
        <div className="absolute inset-0 flex items-center justify-center text-white/10 text-9xl font-bold select-none">
          <span 
            className="transform rotate-12"
            style={{ transform: `rotate(12deg) translateX(${scrollY * 0.1}px)` }}
          >
            NATURE-INFUSED
          </span>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block font-light">Pure</span>
            <span className="block text-olive-400">Olive Care</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the transformative power of nature with our premium infused olive oils, 
            crafted for radiant skin and healthy hair.
          </p>
          
          {/* 3D Model Placeholder */}
          <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64 mb-8">
            <div 
              className="absolute inset-0 bg-gradient-to-br from-olive-400/80 to-amber-500/80 rounded-full blur-xl animate-pulse"
              style={{ transform: `rotate(${scrollY * 0.1}deg)` }}
            ></div>
            <img 
              src="https://images.pexels.com/photos/5450873/pexels-photo-5450873.jpeg" 
              alt="Premium Olive Oil Bottle"
              className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl"
              style={{ transform: `rotateY(${scrollY * 0.1}deg)` }}
            />
          </div>
          
          <button 
            onClick={() => navigateTo('products')}
            className="btn-primary text-lg px-8 py-4 rounded-full bg-olive-600 hover:bg-olive-700 text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Our Collection
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6">
                Crafted by Nature, <br />
                <span className="text-olive-600">Perfected for You</span>
              </h2>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Our journey began with a simple belief: nature provides the most effective 
                ingredients for skincare and wellness. Each bottle contains carefully selected 
                botanicals infused into premium olive oil, creating a luxurious experience 
                that nourishes your skin and hair naturally.
              </p>
              <p className="text-stone-600 mb-8 leading-relaxed">
                From our organic canterion extract to nutrient-rich carrot oils, every product 
                is crafted with precision and care, ensuring you receive the purest form of 
                nature's bounty.
              </p>
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-olive-600">100%</div>
                  <div className="text-sm text-stone-600">Natural</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-olive-600">4</div>
                  <div className="text-sm text-stone-600">Unique Infusions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-olive-600">Premium</div>
                  <div className="text-sm text-stone-600">Quality</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1593769836734-a944999eca58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHx3ZWxsbmVzcyUyMGxpZmVzdHlsZXxlbnwwfHx8Z3JlZW58MTc1MjA5NTg4N3ww&ixlib=rb-4.1.0&q=85" 
                alt="Natural Wellness"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-olive-600/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">
              The Power of <span className="text-olive-600">Natural Oils</span>
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Discover the incredible benefits of our carefully crafted oil infusions, 
              designed to transform your skincare routine naturally.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="benefit-card group">
              <div className="bg-gradient-to-br from-olive-100 to-amber-100 p-8 rounded-2xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-16 h-16 bg-olive-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-olive-700 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-4">Deep Hydration</h3>
                <p className="text-stone-600">
                  Rich in antioxidants and vitamins, our oils penetrate deeply to provide 
                  long-lasting moisture and nourishment for all skin types.
                </p>
              </div>
            </div>
            
            <div className="benefit-card group">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-2xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-700 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-4">Natural Glow</h3>
                <p className="text-stone-600">
                  Enhance your natural radiance with our vitamin-rich formulations that 
                  promote healthy, glowing skin and lustrous hair.
                </p>
              </div>
            </div>
            
            <div className="benefit-card group">
              <div className="bg-gradient-to-br from-green-100 to-teal-100 p-8 rounded-2xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-4">Gentle Care</h3>
                <p className="text-stone-600">
                  Suitable for sensitive skin, our pure and natural ingredients provide 
                  gentle care without harsh chemicals or artificial additives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">
              Our <span className="text-olive-600">Signature Collection</span>
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Four unique infusions, each crafted with specific botanicals to address 
              different skincare and wellness needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Canterion Infused",
                image: "https://images.pexels.com/photos/15569180/pexels-photo-15569180.jpeg",
                description: "Soothing and anti-inflammatory properties for sensitive skin."
              },
              {
                name: "Carrot Infused",
                image: "https://images.pexels.com/photos/5878507/pexels-photo-5878507.jpeg",
                description: "Rich in beta-carotene for natural sun protection and glow."
              },
              {
                name: "Walnut Infused",
                image: "https://images.pexels.com/photos/5450873/pexels-photo-5450873.jpeg",
                description: "Deep nourishment and repair for damaged hair and skin."
              },
              {
                name: "Pure Olive Oil",
                image: "https://images.pexels.com/photos/7863225/pexels-photo-7863225.jpeg",
                description: "Classic moisturizing and healing properties for all uses."
              }
            ].map((product, index) => (
              <div key={index} className="product-preview-card group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-stone-800 mb-2">{product.name}</h3>
                    <p className="text-stone-600 text-sm mb-4">{product.description}</p>
                    <button className="text-olive-600 hover:text-olive-700 font-medium text-sm transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => navigateTo('products')}
              className="btn-primary bg-olive-600 hover:bg-olive-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">
              What Our <span className="text-olive-600">Customers Say</span>
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Real stories from people who have transformed their skincare routine with our natural oils.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                image: "https://images.pexels.com/photos/14739574/pexels-photo-14739574.jpeg",
                rating: 5,
                text: "The carrot-infused oil has completely transformed my skin. It's smoother, brighter, and feels incredibly nourished. I can't imagine my routine without it!"
              },
              {
                name: "Maria Rodriguez",
                image: "https://images.unsplash.com/photo-1584282000275-d4d9c2c71494?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBpbmdyZWRpZW50c3xlbnwwfHx8Z3JlZW58MTc1MjA5NTkwMnww&ixlib=rb-4.1.0&q=85",
                rating: 5,
                text: "As someone with sensitive skin, I was hesitant to try new products. The canterion oil is so gentle yet effective. My skin has never felt better!"
              },
              {
                name: "Emma Thompson",
                image: "https://images.pexels.com/photos/5450873/pexels-photo-5450873.jpeg",
                rating: 5,
                text: "The walnut oil has worked wonders for my hair. It's shinier, stronger, and much more manageable. These products are truly premium quality."
              }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="bg-stone-50 p-8 rounded-2xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-stone-600 mb-4 italic">"{testimonial.text}"</p>
                  <h4 className="font-semibold text-stone-800">{testimonial.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-olive-600 to-amber-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your <br />
            Skincare Routine?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of customers who have discovered the power of natural, 
            premium olive oil infusions for radiant skin and healthy hair.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigateTo('products')}
              className="bg-white text-olive-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-stone-100 transition-colors transform hover:scale-105"
            >
              Shop Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-olive-600 transition-colors transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProductPage = ({ scrollY }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Canterion Infused Olive Oil",
      image: "https://images.pexels.com/photos/15569180/pexels-photo-15569180.jpeg",
      price: "$34.99",
      description: "Soothing and anti-inflammatory properties perfect for sensitive skin. Our canterion infusion helps calm irritation while providing deep moisturization.",
      benefits: ["Anti-inflammatory", "Gentle on sensitive skin", "Reduces redness", "Deep moisturization"],
      uses: ["Face", "Body", "Hair"],
      ingredients: ["Premium Olive Oil", "Canterion Extract", "Vitamin E", "Natural Antioxidants"]
    },
    {
      id: 2,
      name: "Carrot Infused Olive Oil",
      image: "https://images.pexels.com/photos/5878507/pexels-photo-5878507.jpeg",
      price: "$32.99",
      description: "Rich in beta-carotene and vitamins for natural sun protection and a healthy glow. Perfect for those seeking radiant, youthful-looking skin.",
      benefits: ["Rich in beta-carotene", "Natural sun protection", "Promotes healthy glow", "Anti-aging properties"],
      uses: ["Face", "Body", "Hair"],
      ingredients: ["Premium Olive Oil", "Carrot Extract", "Beta-carotene", "Vitamin A"]
    },
    {
      id: 3,
      name: "Walnut Infused Olive Oil",
      image: "https://images.pexels.com/photos/5450873/pexels-photo-5450873.jpeg",
      price: "$36.99",
      description: "Deep nourishment and repair for damaged hair and skin. Rich in omega-3 fatty acids and proteins for intensive restoration.",
      benefits: ["Deep nourishment", "Repairs damaged hair", "Rich in omega-3", "Intensive restoration"],
      uses: ["Hair", "Body", "Face"],
      ingredients: ["Premium Olive Oil", "Walnut Extract", "Omega-3 Fatty Acids", "Proteins"]
    },
    {
      id: 4,
      name: "Pure Olive Oil",
      image: "https://images.pexels.com/photos/7863225/pexels-photo-7863225.jpeg",
      price: "$28.99",
      description: "Classic moisturizing and healing properties for all uses. The purest form of our premium olive oil, perfect for daily skincare routines.",
      benefits: ["Classic moisturizing", "Healing properties", "All-purpose use", "Pure and natural"],
      uses: ["Face", "Body", "Hair"],
      ingredients: ["100% Pure Olive Oil", "Natural Antioxidants", "Vitamin E", "Squalene"]
    }
  ];

  return (
    <div className="product-page pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-olive-50 to-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-stone-800 mb-6">
              Our <span className="text-olive-600">Premium Collection</span>
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Discover our carefully crafted selection of infused olive oils, each designed 
              to meet specific skincare and wellness needs with the power of nature.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
            {products.map((product) => (
              <div key={product.id} className="product-card group">
                <div className="bg-stone-50 rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-stone-800">
                      {product.price}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-stone-800 mb-4">{product.name}</h3>
                    <p className="text-stone-600 mb-6 leading-relaxed">{product.description}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-stone-800 mb-2">Key Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.benefits.map((benefit, index) => (
                            <span key={index} className="bg-olive-100 text-olive-800 px-3 py-1 rounded-full text-sm">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-stone-800 mb-2">Recommended Uses:</h4>
                        <div className="flex gap-2">
                          {product.uses.map((use, index) => (
                            <span key={index} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                              {use}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <button className="flex-1 bg-olive-600 hover:bg-olive-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                        Add to Cart
                      </button>
                      <button 
                        onClick={() => setSelectedProduct(product)}
                        className="px-6 py-3 border-2 border-olive-600 text-olive-600 hover:bg-olive-600 hover:text-white rounded-full font-semibold transition-colors"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">
              How to Use <span className="text-olive-600">Our Oils</span>
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Get the most out of your olive oil experience with these simple application methods.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-olive-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Cleanse</h3>
              <p className="text-stone-600">
                Start with clean, dry skin or hair. Remove any makeup or styling products 
                for best absorption.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Apply</h3>
              <p className="text-stone-600">
                Warm a small amount between your palms and gently massage into skin or hair. 
                A little goes a long way.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Nourish</h3>
              <p className="text-stone-600">
                Allow the oil to absorb naturally. For hair, leave on for 30 minutes or 
                overnight for deeper conditioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-stone-800">{selectedProduct.name}</h2>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="text-stone-400 hover:text-stone-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-olive-600 mb-4">{selectedProduct.price}</div>
                  <p className="text-stone-600 mb-6 leading-relaxed">{selectedProduct.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-stone-800 mb-3">Key Ingredients:</h4>
                      <ul className="space-y-2">
                        {selectedProduct.ingredients.map((ingredient, index) => (
                          <li key={index} className="flex items-center">
                            <svg className="w-4 h-4 text-olive-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            <span className="text-stone-600">{ingredient}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-stone-800 mb-3">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.benefits.map((benefit, index) => (
                          <span key={index} className="bg-olive-100 text-olive-800 px-3 py-1 rounded-full text-sm">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full bg-olive-600 hover:bg-olive-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
                      Add to Cart - {selectedProduct.price}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;