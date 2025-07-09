import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            <span className="text-pink-500">Bella</span>Oil
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => navigateTo('landing')}
              className={`text-gray-700 hover:text-pink-500 transition-colors ${currentPage === 'landing' ? 'text-pink-500' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => navigateTo('products')}
              className={`text-gray-700 hover:text-pink-500 transition-colors ${currentPage === 'products' ? 'text-pink-500' : ''}`}
            >
              Products
            </button>
            <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-pink-500 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-pink-100">
            <div className="px-6 py-4 space-y-4">
              <button 
                onClick={() => navigateTo('landing')}
                className="block w-full text-left text-gray-700 hover:text-pink-500 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => navigateTo('products')}
                className="block w-full text-left text-gray-700 hover:text-pink-500 transition-colors"
              >
                Products
              </button>
              <a href="#about" className="block text-gray-700 hover:text-pink-500 transition-colors">About</a>
              <a href="#contact" className="block text-gray-700 hover:text-pink-500 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {currentPage === 'landing' && <LandingPage navigateTo={navigateTo} />}
        {currentPage === 'products' && <ProductPage />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-pink-400">Bella</span>Oil
              </h3>
              <p className="text-gray-400 mb-4">
                Premium olive oil skincare products crafted for radiant, healthy skin.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.748.1.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.163-1.506-.402-2.448-1.662-2.448-2.675 0-3.773 2.745-7.243 7.92-7.243 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997-1.789 3.997-3.997 3.997z"/>
                    <path d="M18.406 4.594c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
                    <path d="M12.004 0C5.374 0 0 5.374 0 12.004s5.374 12.004 12.004 12.004 12.004-5.374 12.004-12.004S18.634.001 12.004.001zM19.54 20.595c-1.066.42-2.235.639-3.536.639-1.301 0-2.47-.219-3.536-.639-1.301-.513-2.467-1.679-2.98-2.98-.42-1.066-.639-2.235-.639-3.536 0-1.301.219-2.47.639-3.536.513-1.301 1.679-2.467 2.98-2.98 1.066-.42 2.235-.639 3.536-.639 1.301 0 2.47.219 3.536.639 1.301.513 2.467 1.679 2.98 2.98.42 1.066.639 2.235.639 3.536 0 1.301-.219 2.47-.639 3.536-.513 1.301-1.679 2.467-2.98 2.98z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Canterion Oil</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Carrot Oil</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Walnut Oil</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Pure Olive Oil</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Get beauty tips and exclusive offers.</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <button className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BellaOil. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const LandingPage = ({ navigateTo }) => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 to-white/50"></div>
        
        <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="block text-pink-500">Radiant</span>
              <span className="block">Beauty</span>
              <span className="block text-gray-600 text-3xl lg:text-4xl font-light">with Nature</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Transform your skincare routine with our premium olive oil beauty products. 
              Crafted with love for glowing, healthy skin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => navigateTo('products')}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Shop Collection
              </button>
              <button className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl blur-3xl opacity-30"></div>
            <img 
              src="https://images.unsplash.com/photo-1619631845726-5a27e1b5605b" 
              alt="Premium Beauty Products"
              className="relative z-10 w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1612369278543-c4da62b819a6" 
                alt="Skincare Products"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-200 rounded-full opacity-50"></div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Beauty That <br />
                <span className="text-pink-500">Comes Naturally</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our journey began with a passion for natural beauty solutions. We believe that 
                the most effective skincare comes from nature's finest ingredients, carefully 
                selected and expertly crafted.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Each product in our collection is infused with premium olive oil and botanical 
                extracts, designed to nourish, protect, and enhance your natural radiance.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-pink-500">100%</div>
                  <div className="text-sm text-gray-600">Natural</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-500">4</div>
                  <div className="text-sm text-gray-600">Unique Oils</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-500">Premium</div>
                  <div className="text-sm text-gray-600">Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose <span className="text-pink-500">BellaOil</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the transformative benefits of our premium olive oil skincare collection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="benefit-card text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Deep Nourishment</h3>
              <p className="text-gray-600">
                Rich in antioxidants and vitamins, our oils penetrate deeply to nourish and 
                moisturize your skin from within.
              </p>
            </div>
            
            <div className="benefit-card text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Radiant Glow</h3>
              <p className="text-gray-600">
                Enhance your natural beauty with our vitamin-rich formulations that promote 
                healthy, glowing skin.
              </p>
            </div>
            
            <div className="benefit-card text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Gentle Care</h3>
              <p className="text-gray-600">
                Perfect for all skin types, our pure and natural ingredients provide gentle 
                care without harsh chemicals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-pink-500">Beauty Collection</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Four unique formulations, each crafted with specific botanicals to enhance 
              your natural beauty.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Canterion Infused",
                image: "https://images.unsplash.com/photo-1545735385-aa47cbbd92c2",
                description: "Soothing anti-inflammatory properties for sensitive skin."
              },
              {
                name: "Carrot Infused",
                image: "https://images.unsplash.com/photo-1611246987808-d303ef920c29",
                description: "Rich in beta-carotene for natural radiance and glow."
              },
              {
                name: "Walnut Infused",
                image: "https://images.unsplash.com/photo-1699206791200-414d95e68450",
                description: "Deep nourishment and repair for hair and skin."
              },
              {
                name: "Pure Olive Oil",
                image: "https://images.unsplash.com/photo-1646571771304-6ce2abf5724c",
                description: "Classic moisturizing and healing properties."
              }
            ].map((product, index) => (
              <div key={index} className="product-preview-card group">
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <button className="text-pink-500 hover:text-pink-600 font-medium text-sm transition-colors">
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
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              Shop All Products
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our <span className="text-pink-500">Customers Say</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from women who have transformed their skincare routine with BellaOil.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                image: "https://images.pexels.com/photos/8220771/pexels-photo-8220771.jpeg",
                rating: 5,
                text: "The carrot-infused oil has completely transformed my skin. It's brighter, smoother, and has this beautiful natural glow. I'm obsessed!"
              },
              {
                name: "Emma Taylor",
                image: "https://images.pexels.com/photos/3865712/pexels-photo-3865712.jpeg",
                rating: 5,
                text: "As someone with sensitive skin, finding the right products is challenging. The canterion oil is so gentle yet incredibly effective. My skin has never felt better!"
              },
              {
                name: "Jessica Brown",
                image: "https://images.unsplash.com/photo-1699206791200-414d95e68450",
                rating: 5,
                text: "I've been using the walnut oil for my hair and skin for months now. The results are amazing - my hair is shinier and my skin feels so nourished."
              }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Glow?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of women who have discovered the secret to radiant, healthy skin 
            with our premium olive oil beauty collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigateTo('products')}
              className="bg-white text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Shop Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-pink-500 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Canterion Infused Beauty Oil",
      image: "https://images.unsplash.com/photo-1545735385-aa47cbbd92c2",
      price: "$34.99",
      description: "Soothing anti-inflammatory properties perfect for sensitive skin. Our canterion infusion helps calm irritation while providing deep moisturization for a healthy, radiant complexion.",
      benefits: ["Anti-inflammatory", "Gentle on sensitive skin", "Reduces redness", "Deep moisturization"],
      uses: ["Face", "Body", "Hair"],
      ingredients: ["Premium Olive Oil", "Canterion Extract", "Vitamin E", "Natural Antioxidants"]
    },
    {
      id: 2,
      name: "Carrot Infused Glow Oil",
      image: "https://images.unsplash.com/photo-1611246987808-d303ef920c29",
      price: "$32.99",
      description: "Rich in beta-carotene and vitamins for natural radiance and healthy glow. Perfect for those seeking luminous, youthful-looking skin with natural sun protection benefits.",
      benefits: ["Rich in beta-carotene", "Natural sun protection", "Promotes healthy glow", "Anti-aging properties"],
      uses: ["Face", "Body", "Hair"],
      ingredients: ["Premium Olive Oil", "Carrot Extract", "Beta-carotene", "Vitamin A"]
    },
    {
      id: 3,
      name: "Walnut Infused Repair Oil",
      image: "https://images.unsplash.com/photo-1699206791200-414d95e68450",
      price: "$36.99",
      description: "Deep nourishment and repair for damaged hair and skin. Rich in omega-3 fatty acids and proteins for intensive restoration and strengthening.",
      benefits: ["Deep nourishment", "Repairs damaged hair", "Rich in omega-3", "Intensive restoration"],
      uses: ["Hair", "Body", "Face"],
      ingredients: ["Premium Olive Oil", "Walnut Extract", "Omega-3 Fatty Acids", "Proteins"]
    },
    {
      id: 4,
      name: "Pure Olive Beauty Oil",
      image: "https://images.unsplash.com/photo-1646571771304-6ce2abf5724c",
      price: "$28.99",
      description: "Classic moisturizing and healing properties for all beauty uses. The purest form of our premium olive oil, perfect for daily skincare and hair care routines.",
      benefits: ["Classic moisturizing", "Healing properties", "All-purpose use", "Pure and natural"],
      uses: ["Face", "Body", "Hair"],
      ingredients: ["100% Pure Olive Oil", "Natural Antioxidants", "Vitamin E", "Squalene"]
    }
  ];

  return (
    <div className="product-page pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Beauty <span className="text-pink-500">Collection</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of premium olive oil beauty products, 
            each designed to enhance your natural radiance and promote healthy, glowing skin.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {products.map((product) => (
              <div key={product.id} className="product-card group">
                <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                      {product.price}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.benefits.map((benefit, index) => (
                            <span key={index} className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Perfect For:</h4>
                        <div className="flex gap-2">
                          {product.uses.map((use, index) => (
                            <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                              {use}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl">
                        Add to Cart
                      </button>
                      <button 
                        onClick={() => setSelectedProduct(product)}
                        className="px-6 py-3 border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white rounded-full font-semibold transition-colors"
                      >
                        Details
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              How to Use <span className="text-pink-500">Your Beauty Oils</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get the most out of your beauty routine with these simple application methods.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Cleanse</h3>
              <p className="text-gray-600">
                Start with clean, dry skin or hair. Remove any makeup or styling products 
                for optimal absorption.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Apply</h3>
              <p className="text-gray-600">
                Warm a small amount between your palms and gently massage into skin or hair. 
                A little goes a long way.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Glow</h3>
              <p className="text-gray-600">
                Allow the oil to absorb naturally. For hair, leave on for 30 minutes or 
                overnight for intensive treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-gray-800">{selectedProduct.name}</h2>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
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
                  <div className="text-3xl font-bold text-pink-500 mb-4">{selectedProduct.price}</div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{selectedProduct.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Ingredients:</h4>
                      <ul className="space-y-2">
                        {selectedProduct.ingredients.map((ingredient, index) => (
                          <li key={index} className="flex items-center">
                            <svg className="w-4 h-4 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            <span className="text-gray-600">{ingredient}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.benefits.map((benefit, index) => (
                          <span key={index} className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl">
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