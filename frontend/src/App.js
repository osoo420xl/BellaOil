import React, { useEffect, useState } from 'react';
import './App.css';
import bOil1 from './b-oil1.jpg';
import bOil2 from './b-oil2.jpg';
import bOil3 from './b-oil3.jpg';
import bOil4 from './b-oil4.jpg';
import bOil5 from './b-oil5.jpg';
import bOil6 from './b-oil6.jpg';
import bOil1Webp from './b-oil1.webp';
import bOil2Webp from './b-oil2.webp';
import bOil3Webp from './b-oil3.webp';
import bOil4Webp from './b-oil4.webp';
import bOil5Webp from './b-oil5.webp';
import bOil6Webp from './b-oil6.webp';
import { FaLeaf, FaRegGem, FaTint, FaStar, FaQuoteLeft, FaCheckCircle, FaRegClock, FaSpa, FaSmile, FaSearch, FaShoppingCart } from 'react-icons/fa';
import ProductPage from './ProductPage';
import CTAButton from './components/CTAButton';
import FloatingCTA from './components/FloatingCTA';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import logo from './logo.png';
import { Helmet } from 'react-helmet';
import { createContext, useContext } from 'react';

const PinkOrbs = ({ scrollY }) => (
  <>
    <div className="fixed top-1/4 left-1/5 w-72 h-72 bg-rose-gold-300 opacity-40 rounded-full blur-3xl pointer-events-none z-0" style={{ transform: `translateY(${scrollY * 0.15}px)` }} />
    <div className="fixed top-2/3 left-2/3 w-56 h-56 bg-rose-gold-200 opacity-40 rounded-full blur-3xl pointer-events-none z-0" style={{ transform: `translateY(${scrollY * 0.10}px)` }} />
    <div className="fixed top-1/2 right-1/6 w-52 h-52 bg-rose-gold-400 opacity-30 rounded-full blur-3xl pointer-events-none z-0" style={{ transform: `translateY(${scrollY * 0.18}px)` }} />
    <div className="fixed bottom-1/5 left-1/2 w-40 h-40 bg-rose-gold-200 opacity-30 rounded-full blur-3xl pointer-events-none z-0" style={{ transform: `translateY(${scrollY * 0.12}px)` }} />
  </>
);

const testimonials = [
  {
    quote: "My skin has never felt so soft and radiant. BellaOil is a game changer!",
    name: "Sophie L.",
    image: bOil2,
  },
  {
    quote: "I love the natural ingredients and the glow it gives my face.",
    name: "Emily R.",
    image: bOil4,
  },
  {
    quote: "The scent is divine and the results are instant. Highly recommend!",
    name: "Jasmine K.",
    image: bOil3,
  },
];

const features = [
  { icon: <FaLeaf className="text-rose-gold-400 text-2xl" />, title: '100% Natural', desc: 'Pure, cold-pressed olive oil with botanical extracts.' },
  { icon: <FaRegGem className="text-rose-gold-300 text-2xl" />, title: 'Premium Quality', desc: 'Crafted for radiant, healthy skin.' },
  { icon: <FaTint className="text-rose-gold-200 text-2xl" />, title: 'Deep Hydration', desc: 'Nourishes and protects your skin barrier.' },
  { icon: <FaStar className="text-rose-gold-400 text-2xl" />, title: 'Loved by Many', desc: 'Trusted by thousands of happy customers.' },
];

const howItWorks = [
  {
    icon: <FaRegClock className="text-rose-gold-400 text-3xl" />,
    title: 'Apply',
    desc: 'Dispense a few drops onto clean skin, morning or night.'
  },
  {
    icon: <FaSpa className="text-rose-gold-300 text-3xl" />,
    title: 'Massage',
    desc: 'Gently massage in upward, circular motions for absorption.'
  },
  {
    icon: <FaSmile className="text-rose-gold-200 text-3xl" />,
    title: 'Glow',
    desc: 'Enjoy hydrated, radiant skin all day long.'
  },
];

const dualUse = [
  {
    icon: <FaSpa className="text-rose-gold-400 text-3xl" />,
    title: 'For Glowing Skin',
    desc: 'Deeply nourishes, hydrates, and protects your skin for a radiant, healthy glow.'
  },
  {
    icon: <FaStar className="text-rose-gold-300 text-3xl" />,
    title: 'For Lustrous Hair',
    desc: 'Strengthens, smooths, and adds shine to your hair—perfect for scalp massages and frizz control.'
  },
  {
    icon: <FaLeaf className="text-rose-gold-200 text-3xl" />,
    title: 'Unmatched Purity',
    desc: 'BellaOil is as natural as it gets—no fillers, no synthetics, just pure, cold-pressed olive oil and botanicals.'
  },
];

// --- INGREDIENTS PAGE ---
const IngredientsPage = () => (
  <Layout>
    {() => (
      <div className="pt-24 min-h-screen bg-[#FAF5F0]">
        <Helmet>
          <title>Ingredients | BellaOil</title>
          <meta name="description" content="Discover the pure, natural ingredients in BellaOil. Cold-pressed olive oil and botanicals for radiant skin and hair." />
        </Helmet>
        <IngredientsSection />
      </div>
    )}
  </Layout>
);

// --- ABOUT PAGE ---
const AboutPage = () => (
  <Layout>
    {() => (
      <div className="pt-24 min-h-screen bg-[#FAF5F0]">
        <Helmet>
          <title>About | BellaOil</title>
          <meta name="description" content="Learn about BellaOil's story, mission, and commitment to natural beauty and wellness." />
        </Helmet>
        <AboutSection />
      </div>
    )}
  </Layout>
);

// --- HEADER ---
const Logo = () => (
  <Link to="/" className="flex items-center gap-2 select-none hover:opacity-80 transition-opacity">
    <img src={logo} alt="BellaOil logo" className="h-15 w-auto object-contain" style={{maxHeight: '60px'}} />
  </Link>
);

// --- CART CONTEXT ---
const CartContext = createContext();
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => {
      // If item with same id and size exists, increase quantity
      const existing = prev.find(
        (i) => i.id === item.id && i.size === item.size
      );
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.size === item.size
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartOpen, setCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};

// --- CART MODAL ---
const CartModal = () => {
  const { cart, removeFromCart, clearCart, cartOpen, setCartOpen } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return cartOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-rose-gold-500 text-2xl" onClick={() => setCartOpen(false)}>&times;</button>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Your Cart</h2>
        {cart.length === 0 ? (
          <div className="text-gray-600">Your cart is empty.</div>
        ) : (
          <>
            <ul className="divide-y divide-gray-100 mb-4">
              {cart.map((item, idx) => (
                <li key={idx} className="py-3 flex items-center justify-between gap-2">
                  <div>
                    <div className="font-semibold text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-600">{item.size} &times; {item.quantity}</div>
                  </div>
                  <div className="font-semibold text-gray-900">€{(item.price * item.quantity).toFixed(2)}</div>
                  <button className="text-rose-gold-500 hover:text-rose-gold-700 ml-2" onClick={() => removeFromCart(idx)}>Remove</button>
                </li>
              ))}
            </ul>
            <div className="font-bold text-lg mb-4">Total: €{total.toFixed(2)}</div>
            <button className="w-full bg-rose-gold-600 hover:bg-rose-gold-700 text-white py-3 rounded-xl text-lg font-bold shadow-lg transition-all duration-300 mb-2" onClick={clearCart}>Clear Cart</button>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-lg font-bold shadow-lg transition-all duration-300" disabled>Checkout (Coming Soon)</button>
          </>
        )}
      </div>
    </div>
  ) : null;
};

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart, setCartOpen } = useCart();
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur border-b border-rose-gold-100 shadow-sm ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Logo />
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-rose-gold-500 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Search bar (desktop) */}
        <form className="hidden md:flex items-center ml-6 bg-white rounded-full border border-rose-gold-100 px-3 py-1 shadow-sm w-72 max-w-xs">
          <FaSearch className="text-rose-gold-400 mr-2" />
          <input type="text" placeholder="Search products..." className="bg-transparent outline-none text-gray-900 font-sans-body w-full" />
        </form>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-900 text-lg font-sans-body">
          <Link to="/" className="hover:text-rose-gold-300 focus:text-rose-gold-400 transition-colors">Home</Link>
          <Link to="/products/bella-oil" className="hover:text-rose-gold-300 focus:text-rose-gold-400 transition-colors">Product</Link>
          <Link to="/ingredients" className="hover:text-rose-gold-300 focus:text-rose-gold-400 transition-colors">Ingredients</Link>
          <Link to="/about" className="hover:text-rose-gold-300 focus:text-rose-gold-400 transition-colors">About</Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          {/* Cart Icon */}
          <button onClick={() => setCartOpen(true)} className="relative p-2 text-rose-gold-600 hover:text-rose-gold-800 transition-colors" aria-label="Open cart">
            <FaShoppingCart className="text-2xl" />
            {cart.length > 0 && <span className="absolute -top-1 -right-1 bg-rose-gold-500 text-white text-xs rounded-full px-2 py-0.5 font-bold">{cart.length}</span>}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-rose-gold-100 py-4 px-4">
          {/* Search bar (mobile) */}
          <form className="flex items-center mb-4 bg-white rounded-full border border-rose-gold-100 px-3 py-2 shadow-sm w-full">
            <FaSearch className="text-rose-gold-400 mr-2" />
            <input type="text" placeholder="Search products..." className="bg-transparent outline-none text-gray-900 font-sans-body w-full" />
          </form>
          
          {/* Mobile Navigation */}
          <nav className="flex flex-col gap-4 text-gray-900 text-lg font-sans-body">
            <Link to="/" className="hover:text-rose-gold-300 focus:text-rose-gold-400 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/products/bella-oil" className="hover:text-rose-gold-300 focus:text-rose-gold-400 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Product</Link>
            <Link to="/ingredients" className="hover:text-rose-gold-300 focus:text-rose-gold-400 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Ingredients</Link>
            <Link to="/about" className="hover:text-rose-gold-300 focus:text-rose-gold-400 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>About</Link>
            {/* Cart Icon in mobile menu */}
            <button onClick={() => { setCartOpen(true); setMobileMenuOpen(false); }} className="flex items-center gap-2 text-rose-gold-600 hover:text-rose-gold-800 transition-colors py-2">
              <FaShoppingCart className="text-xl" /> Cart{cart.length > 0 && <span className="bg-rose-gold-500 text-white text-xs rounded-full px-2 py-0.5 font-bold">{cart.length}</span>}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

// --- HERO SECTION ---
const HeroSection = ({ scrollY }) => (
  <section role="region" aria-labelledby="hero-heading" className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#FAF5F0] overflow-hidden pt-2 md:pt-4 pb-12 md:pb-0">
    {/* Organic blob shapes */}
    <div className="absolute top-0 left-0 w-80 h-80 bg-rose-gold-50 rounded-full blur-3xl opacity-60 -z-10" style={{ transform: `translateY(${scrollY * 0.08}px)` }} />
    <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-rose-gold-100 rounded-full blur-3xl opacity-40 -z-10" style={{ transform: `translateY(-${scrollY * 0.10}px)` }} />
    {/* Product image with float animation, now matches all other images */}
    <div className="flex-1 flex justify-center items-center">
      <picture>
        <source srcSet={bOil1Webp} type="image/webp" />
        <img src={bOil1} alt="BellaOil product bottle" className="rounded-2xl shadow-lg max-w-sm md:max-w-lg w-full h-auto object-contain border-4 border-white levitate" />
      </picture>
    </div>
    {/* Text content */}
    <div className="flex-1 flex flex-col items-center md:items-start gap-8 px-4 md:px-16">
      <div className="flex flex-col items-center md:items-start w-full gap-2">
        <h1 id="hero-heading" className="text-5xl md:text-7xl font-serif-head font-bold text-gray-900 leading-tight text-center md:text-left mb-2">
          Experience Unparalleled Radiance<br className="hidden md:block" /> with Nature’s Finest Oils
        </h1>
        {/* Review count and average rating */}
        <div className="flex items-center gap-3 mb-2">
          <span className="flex gap-1 text-yellow-400 text-2xl" aria-label="5 star rating">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </span>
          <span className="text-lg font-semibold text-gray-700">4.9/5.0</span>
        </div>
      </div>
      <p className="text-xl text-gray-700 text-center md:text-left max-w-xl mb-4">
        BellaOil delivers radiant, natural beauty with cold-pressed oils and botanical ingredients. For glowing skin and luxurious hair.
      </p>
      <CTAButton 
        variant="primary" 
        size="xl" 
        icon="cart"
        onClick={() => window.location.href='/products/bella-oil'}
        className="w-full max-w-xs"
      >
        View Product
      </CTAButton>
    </div>
  </section>
);

// --- INGREDIENTS SECTION ---
const IngredientsSection = () => (
  <section id="ingredients" className="container mx-auto px-4 md:px-8 py-24">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-serif-head font-bold text-gray-900 mb-6">Pure Ingredients, Proven Results</h2>
      <p className="text-xl text-gray-700 font-sans-body max-w-3xl mx-auto">Every drop of BellaOil is crafted with the finest natural ingredients, carefully selected for their proven benefits to skin and hair health.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Cold-Pressed Olive Oil */}
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-rose-gold-50 text-center">
        <h3 className="text-2xl font-serif-head font-bold text-gray-900 mb-4">Cold-Pressed Olive Oil</h3>
        <div className="w-16 h-16 bg-rose-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaLeaf className="text-2xl text-rose-gold-600" />
        </div>
        <p className="text-gray-700 font-sans-body mb-4">Our signature ingredient, rich in antioxidants and essential fatty acids that deeply nourish and protect your skin and hair.</p>
        <ul className="text-sm text-gray-600 space-y-2 text-left">
          <li>• Rich in Vitamin E & antioxidants</li>
          <li>• Deep hydration without greasiness</li>
          <li>• Natural anti-inflammatory properties</li>
        </ul>
      </div>
      
      {/* Botanical Extracts */}
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-rose-gold-50 text-center">
        <h3 className="text-2xl font-serif-head font-bold text-gray-900 mb-4">Botanical Extracts</h3>
        <div className="w-16 h-16 bg-rose-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaSpa className="text-2xl text-rose-gold-600" />
        </div>
        <p className="text-gray-700 font-sans-body mb-4">Carefully selected plant extracts that enhance the natural benefits of olive oil for targeted results.</p>
        <ul className="text-sm text-gray-600 space-y-2 text-left">
          <li>• Chamomile for soothing</li>
          <li>• Lavender for calming</li>
          <li>• Rosemary for scalp health</li>
        </ul>
      </div>
      
      {/* Natural Preservatives */}
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-rose-gold-50 text-center">
        <h3 className="text-2xl font-serif-head font-bold text-gray-900 mb-4">Natural Preservatives</h3>
        <div className="w-16 h-16 bg-rose-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaRegGem className="text-2xl text-rose-gold-600" />
        </div>
        <p className="text-gray-700 font-sans-body mb-4">We use only natural preservatives to maintain freshness while keeping our formula 100% natural and safe.</p>
        <ul className="text-sm text-gray-600 space-y-2 text-left">
          <li>• Vitamin E as natural preservative</li>
          <li>• No synthetic chemicals</li>
          <li>• Safe for sensitive skin</li>
        </ul>
      </div>
    </div>
  </section>
);

// --- ABOUT SECTION ---
const AboutSection = () => (
  <section id="about" className="container mx-auto px-4 md:px-8 py-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-3xl md:text-5xl font-serif-head font-bold text-gray-900 mb-6">Our Story</h2>
        <p className="text-lg text-gray-700 font-sans-body mb-6 leading-relaxed">
          BellaOil was born from a simple belief: that nature provides the most effective solutions for beauty and wellness. Our journey began when we discovered the transformative power of pure, cold-pressed olive oil.
        </p>
        <p className="text-lg text-gray-700 font-sans-body mb-8 leading-relaxed">
          We believe that true beauty comes from within, and that the best skincare and haircare should be as natural as the ingredients themselves. That's why every product we create is crafted with the finest natural ingredients, carefully selected for their proven benefits.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <FaLeaf className="text-rose-gold-500 text-xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Natural First</h3>
              <p className="text-sm text-gray-600">We never compromise on natural ingredients</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaSpa className="text-rose-gold-500 text-xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Science Backed</h3>
              <p className="text-sm text-gray-600">Every ingredient is chosen for proven benefits</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaSmile className="text-rose-gold-500 text-xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Results Driven</h3>
              <p className="text-sm text-gray-600">We focus on what actually works</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaRegGem className="text-rose-gold-500 text-xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Quality Assured</h3>
              <p className="text-sm text-gray-600">Every batch is tested for purity</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="bg-rose-gold-50 rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-serif-head font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-gray-700 font-sans-body mb-6">
            To provide everyone with access to natural, effective beauty solutions that enhance their natural radiance and confidence.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-rose-gold-500 rounded-full"></div>
              <span className="text-gray-700">100% Natural Ingredients</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-rose-gold-500 rounded-full"></div>
              <span className="text-gray-700">Dermatologist Approved</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-rose-gold-500 rounded-full"></div>
              <span className="text-gray-700">Cruelty-Free & Vegan</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-rose-gold-500 rounded-full"></div>
              <span className="text-gray-700">Sustainable Packaging</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- ALTERNATING IMAGE/CONTENT SECTIONS ---
const EditorialSection = ({ image, alt, title, text, reverse, children }) => (
  <section className={`container mx-auto px-4 md:px-8 py-24 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}> 
    <div className="flex-1 flex justify-center">
      <picture>
        <source srcSet={image === bOil1 ? bOil1Webp : image === bOil2 ? bOil2Webp : image === bOil3 ? bOil3Webp : image === bOil4 ? bOil4Webp : image === bOil5 ? bOil5Webp : undefined} type="image/webp" />
        <img src={image} alt={alt} loading="lazy" className="rounded-3xl shadow-2xl w-[340px] h-[340px] md:w-[420px] md:h-[420px] object-cover object-center border-4 border-white levitate" />
      </picture>
    </div>
    <div className="flex-1 flex flex-col gap-8 items-center md:items-start">
      <h2 className="text-3xl md:text-5xl font-serif-head font-bold text-gray-900 mb-2 text-center md:text-left">{title}</h2>
      <p className="text-lg md:text-xl text-gray-700 font-sans-body max-w-xl text-center md:text-left" style={{ lineHeight: 1.7 }}>{text}</p>
      {children}
    </div>
  </section>
);

// --- GALLERY SECTION ---
const GallerySection = () => (
  <section role="region" aria-labelledby="gallery-heading" className="container mx-auto px-4 md:px-8 py-24">
    <h2 id="gallery-heading" className="text-3xl md:text-5xl font-serif-head font-bold text-gray-900 text-center mb-20">BellaOil in Real Life</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
      {[
        { image: bOil1, webp: bOil1Webp, alt: "BellaOil bottle", title: "Pure Radiance" },
        { image: bOil2, webp: bOil2Webp, alt: "Lifestyle with BellaOil", title: "Natural Glow" },
        { image: bOil3, webp: bOil3Webp, alt: "BellaOil on minimal background", title: "Deep Hydration" },
        { image: bOil4, webp: bOil4Webp, alt: "Glowing skin and hair", title: "Lustrous Hair" },
        { image: bOil6, webp: bOil6Webp, alt: "BellaOil lifestyle", title: "Skin & Hair" }
      ].map((item, index) => (
        <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg border-4 border-white transition-transform duration-300 hover:-translate-y-2 bg-white">
          <picture>
            <source srcSet={item.webp} type="image/webp" />
            <img src={item.image} alt={item.alt} loading="lazy" className="w-full h-[384px] object-cover object-center" />
          </picture>
          {/* Overlay with CTA */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full">
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <div className="flex gap-2">
                <CTAButton 
                  variant="primary" 
                  size="sm"
                  icon="cart"
                  className="flex-1"
                  onClick={() => window.location.href='/products/bella-oil'}
                >
                  Order Now
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- TESTIMONIALS (colored circles instead of images) ---
const starIcons = (
  <span className="flex gap-1 text-yellow-400 text-xl" aria-label="5 star rating">
    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
  </span>
);

const TestimonialsSection = () => (
  <section role="region" aria-labelledby="testimonials-heading" id="testimonials" className="container mx-auto px-4 md:px-8 py-24">
    <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-serif-head font-bold text-gray-900 text-center mb-12">What Our Customers Say</h2>
    <div className="flex flex-col md:flex-row gap-12 justify-center items-stretch flex-wrap">
      <div className="flex-1 bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center text-center gap-6 border border-rose-gold-50 min-w-[260px] max-w-sm mx-auto">
        {/* Optionally add before/after image or video here */}
        <span className="w-[100px] h-[100px] rounded-full bg-rose-gold-200 inline-block" />
        {starIcons}
        <p className="text-xl text-gray-700 italic font-sans-body">“I use BellaOil for both my hair and skin—my curls are shiny and my face glows!”</p>
        <span className="flex items-center gap-2 text-rose-gold-400 font-semibold font-serif-head text-lg">
          <FaCheckCircle className="text-green-400" /> Verified Buyer
        </span>
        <span className="text-rose-gold-400 font-semibold font-serif-head text-lg">Sophie L.</span>
      </div>
      <div className="flex-1 bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center text-center gap-6 border border-rose-gold-50 min-w-[260px] max-w-sm mx-auto">
        {/* Optionally add before/after image or video here */}
        <span className="w-[100px] h-[100px] rounded-full bg-rose-gold-300 inline-block" />
        {starIcons}
        <p className="text-xl text-gray-700 italic font-sans-body">“Finally, a product that’s truly natural and works for my sensitive scalp and skin.”</p>
        <span className="flex items-center gap-2 text-rose-gold-400 font-semibold font-serif-head text-lg">
          <FaCheckCircle className="text-green-400" /> Verified Buyer
        </span>
        <span className="text-rose-gold-400 font-semibold font-serif-head text-lg">Emily R.</span>
      </div>
      <div className="flex-1 bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center text-center gap-6 border border-rose-gold-50 min-w-[260px] max-w-sm mx-auto">
        {/* Optionally add before/after image or video here */}
        <span className="w-[100px] h-[100px] rounded-full bg-rose-gold-400 inline-block" />
        {starIcons}
        <p className="text-xl text-gray-700 italic font-sans-body">“My hair is softer, my skin is smoother, and I love that it’s all-natural.”</p>
        <span className="flex items-center gap-2 text-rose-gold-400 font-semibold font-serif-head text-lg">
          <FaCheckCircle className="text-green-400" /> Verified Buyer
        </span>
        <span className="text-rose-gold-400 font-semibold font-serif-head text-lg">Jasmine K.</span>
      </div>
      <div className="flex-1 bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center text-center gap-6 border border-rose-gold-50 min-w-[260px] max-w-sm mx-auto">
        {/* Optionally add before/after image or video here */}
        <span className="w-[100px] h-[100px] rounded-full bg-rose-gold-100 inline-block" />
        {starIcons}
        <p className="text-xl text-gray-700 italic font-sans-body">“I’ve noticed a huge difference in my skin’s hydration. The oil absorbs quickly and doesn’t feel greasy!”</p>
        <span className="flex items-center gap-2 text-rose-gold-400 font-semibold font-serif-head text-lg">
          <FaCheckCircle className="text-green-400" /> Verified Buyer
        </span>
        <span className="text-rose-gold-400 font-semibold font-serif-head text-lg">Maya T.</span>
      </div>
      <div className="flex-1 bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center text-center gap-6 border border-rose-gold-50 min-w-[260px] max-w-sm mx-auto">
        {/* Optionally add before/after image or video here */}
        <span className="w-[100px] h-[100px] rounded-full bg-rose-gold-50 inline-block" />
        {starIcons}
        <p className="text-xl text-gray-700 italic font-sans-body">“I love that BellaOil is cruelty-free and made with clean ingredients. My whole family uses it now!”</p>
        <span className="flex items-center gap-2 text-rose-gold-400 font-semibold font-serif-head text-lg">
          <FaCheckCircle className="text-green-400" /> Verified Buyer
        </span>
        <span className="text-rose-gold-400 font-semibold font-serif-head text-lg">Alex P.</span>
      </div>
    </div>
    <div className="flex flex-wrap justify-center items-center gap-8 mt-16 border-t border-rose-gold-100 pt-10">
      <div className="flex flex-col items-center">
        <FaRegGem className="text-2xl text-rose-gold-400 mb-1" />
        <span className="text-xs font-semibold text-gray-700">100% Money-Back Guarantee</span>
      </div>
      <div className="flex flex-col items-center">
        <FaRegClock className="text-2xl text-rose-gold-400 mb-1" />
        <span className="text-xs font-semibold text-gray-700">Fast Shipping</span>
      </div>
      <div className="flex flex-col items-center">
        <FaSpa className="text-2xl text-rose-gold-400 mb-1" />
        <span className="text-xs font-semibold text-gray-700">Clean Ingredients</span>
      </div>
      <div className="flex flex-col items-center">
        <FaSmile className="text-2xl text-rose-gold-400 mb-1" />
        <span className="text-xs font-semibold text-gray-700">Dermatologist Approved</span>
      </div>
      <div className="flex flex-col items-center">
        <FaLeaf className="text-2xl text-rose-gold-400 mb-1" />
        <span className="text-xs font-semibold text-gray-700">Cruelty-Free</span>
      </div>
    </div>
    
    {/* Enhanced CTA after testimonials */}
    <div className="mt-12 text-center">
      <CTAButton 
        variant="primary" 
        size="lg"
        icon="cart"
        onClick={() => window.location.href='/products/bella-oil'}
        className="mx-auto"
      >
        Join Our Happy Customers
      </CTAButton>
    </div>
  </section>
);

// --- UGC / SOCIAL PROOF SECTION ---
const ShareYourGlowSection = () => (
  <section role="region" aria-labelledby="share-glow-heading" className="container mx-auto px-4 md:px-8 py-20">
    <h2 id="share-glow-heading" className="text-3xl md:text-5xl font-serif-head font-bold text-gray-900 text-center mb-6">Share Your Glow</h2>
    <p className="text-lg text-gray-700 text-center mb-8 font-sans-body">Tag <span className="font-semibold text-rose-gold-500">@BellaOil</span> or use <span className="font-semibold text-rose-gold-500">#BellaOilGlow</span> on Instagram for a chance to be featured!</p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
      <picture>
        <source srcSet={bOil1Webp} type="image/webp" />
        <img src={bOil1} alt="UGC 1" loading="lazy" className="rounded-2xl shadow-md w-full h-40 md:h-56 object-cover object-center border-4 border-white" />
      </picture>
      <picture>
        <source srcSet={bOil2Webp} type="image/webp" />
        <img src={bOil2} alt="UGC 2" loading="lazy" className="rounded-2xl shadow-md w-full h-40 md:h-56 object-cover object-center border-4 border-white" />
      </picture>
      <picture>
        <source srcSet={bOil3Webp} type="image/webp" />
        <img src={bOil3} alt="UGC 3" loading="lazy" className="rounded-2xl shadow-md w-full h-40 md:h-56 object-cover object-center border-4 border-white" />
      </picture>
      <picture>
        <source srcSet={bOil4Webp} type="image/webp" />
        <img src={bOil4} alt="UGC 4" loading="lazy" className="rounded-2xl shadow-md w-full h-40 md:h-56 object-cover object-center border-4 border-white" />
      </picture>
    </div>
    <div className="text-center space-y-4">
      <CTAButton 
        variant="primary" 
        size="lg"
        onClick={() => window.open('https://instagram.com/bellaoil', '_blank')}
      >
        Follow us on Instagram
      </CTAButton>
      <div className="flex justify-center gap-4">
        <CTAButton 
          variant="secondary" 
          size="md"
          icon="cart"
          onClick={() => window.location.href='/products/bella-oil'}
        >
          Shop BellaOil
        </CTAButton>
        <CTAButton 
          variant="outline" 
          size="md"
        >
          Share Your Story
        </CTAButton>
      </div>
    </div>
  </section>
);

// --- CTA (spacious, minimal) ---
const CallToActionSection = () => (
  <section role="region" aria-labelledby="cta-heading" id="buy" className="container mx-auto px-4 md:px-8 py-24 flex flex-col items-center gap-8">
    <h2 id="cta-heading" className="text-3xl md:text-5xl font-serif-head font-bold text-gray-900 text-center">Ready for Glowing Skin & Lustrous Hair?</h2>
    <CTAButton 
      variant="primary" 
      size="xl" 
      icon="cart"
      onClick={() => window.location.href='/products/bella-oil'}
      className="w-full max-w-xs"
    >
      Shop Now
    </CTAButton>
  </section>
);

// --- MOBILE STICKY CTA BUTTON ---
const MobileStickyCTA = () => (
  <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-md block md:hidden">
    <CTAButton 
      variant="primary" 
      size="lg"
      icon="cart"
      onClick={() => window.location.href='/products/bella-oil'}
      className="w-full"
      style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' }}
    >
      Shop Now
    </CTAButton>
  </div>
);

// --- FAQ & TRUST SECTION ---
const faqs = [
  {
    q: 'Is BellaOil safe for sensitive skin and all hair types?',
    a: 'Yes! BellaOil is dermatologist approved, hypoallergenic, and formulated for all skin and hair types, including sensitive skin and scalp.'
  },
  {
    q: 'How long does shipping take?',
    a: 'Orders are processed within 1-2 business days and typically arrive within 3-5 business days in the US. International shipping may take longer.'
  },
  {
    q: 'What is your return policy?',
    a: 'We offer a 30-day, 100% money-back guarantee. If you’re not satisfied, contact us for a full refund—no questions asked.'
  },
  {
    q: 'Are your ingredients natural and cruelty-free?',
    a: 'Absolutely! BellaOil is made from 100% natural, cold-pressed ingredients and is always cruelty-free.'
  },
  {
    q: 'How do I use BellaOil for best results?',
    a: 'Apply a few drops to clean skin or hair, massaging gently. Use daily for optimal hydration and shine.'
  },
  {
    q: 'Where do you deliver?',
    a: 'We deliver throughout Montenegro, including Ulcinj, Bar, Podgorica, and more.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section role="region" aria-labelledby="faq-heading" className="container mx-auto px-4 md:px-8 py-20">
      <h2 id="faq-heading" className="text-3xl md:text-5xl font-serif-head font-bold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-rose-gold-100 rounded-2xl bg-white shadow-sm">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-gold-300"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-panel-${idx}`}
            >
              {faq.q}
              <span className={`ml-4 transition-transform ${openIndex === idx ? 'rotate-45' : ''}`}>+</span>
            </button>
            {openIndex === idx && (
              <div id={`faq-panel-${idx}`} className="px-6 pb-4 text-gray-700 text-base animate-fade-in">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <span className="text-lg font-semibold text-gray-800">Still have questions?</span>
        <br />
        <a href="mailto:hello@bellaoil.com" className="text-rose-gold-500 underline font-sans-body">Contact us at hello@bellaoil.com</a>
      </div>
    </section>
  );
};

// --- MAIN LAYOUT (restore) ---
const Layout = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="font-sans-body bg-[#FAF5F0] min-h-screen relative">
      <StickyHeader />
      <main className="pt-24">{children(scrollY)}</main>
    </div>
  );
};

const ProductPageWithLayout = () => (
  <Layout>
    {(scrollY) => (
      <ProductPage scrollY={scrollY} />
    )}
  </Layout>
);

// --- FOOTER ---
const Footer = () => (
  <footer className="bg-[#A3D5B2] text-white pt-12 pb-8 mt-16 rounded-t-3xl shadow-inner">
    <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 md:gap-0 justify-between items-start md:items-center">
      {/* Newsletter Signup */}
      <div className="flex-1 mb-8 md:mb-0">
        <h3 className="font-serif-head text-2xl font-bold mb-2">Join Our Glow List</h3>
        <p className="font-sans-body mb-4 text-white/90">Get 15% off your first order and exclusive skincare tips.</p>
        <form className="flex flex-col sm:flex-row gap-3">
          <input type="email" placeholder="Your email" className="px-4 py-2 rounded-full border-none text-gray-800 font-sans-body w-full sm:w-auto" />
          <button type="submit" className="bg-rose-gold-500 hover:bg-rose-gold-600 text-white px-6 py-2 rounded-full font-semibold font-sans-body transition-all">Subscribe</button>
        </form>
      </div>
      {/* Navigation Links */}
      <div className="flex-1 flex flex-col gap-2 md:items-center">
        <nav className="flex flex-col md:flex-row gap-2 md:gap-6 font-sans-body">
          <a href="#" className="hover:text-rose-gold-100 transition-colors">Home</a>
          <a href="#about" className="hover:text-rose-gold-100 transition-colors">About</a>
          <a href="#products" className="hover:text-rose-gold-100 transition-colors">Products</a>
          <a href="#ingredients" className="hover:text-rose-gold-100 transition-colors">Ingredients</a>
          <a href="#results" className="hover:text-rose-gold-100 transition-colors">Results</a>
          <a href="#journal" className="hover:text-rose-gold-100 transition-colors">Journal</a>
          <a href="#contact" className="hover:text-rose-gold-100 transition-colors">Contact</a>
        </nav>
      </div>
      {/* Payment & Certifications */}
      <div className="flex-1 flex flex-col items-start md:items-end gap-4">
        <div className="flex gap-3 mb-2">
          {/* Payment icons (SVGs for Visa, MC, PayPal) */}
          <svg width="32" height="20" viewBox="0 0 32 20" fill="none"><rect width="32" height="20" rx="4" fill="#fff"/><text x="16" y="14" textAnchor="middle" fontSize="10" fill="#A3D5B2" fontWeight="bold">VISA</text></svg>
          <svg width="32" height="20" viewBox="0 0 32 20" fill="none"><rect width="32" height="20" rx="4" fill="#fff"/><text x="16" y="14" textAnchor="middle" fontSize="10" fill="#A3D5B2" fontWeight="bold">MC</text></svg>
          <svg width="32" height="20" viewBox="0 0 32 20" fill="none"><rect width="32" height="20" rx="4" fill="#fff"/><text x="16" y="14" textAnchor="middle" fontSize="10" fill="#A3D5B2" fontWeight="bold">PayPal</text></svg>
        </div>
        <div className="flex gap-3">
          {/* Certifications (Vegan, Cruelty-Free) */}
          <span className="flex items-center gap-1 bg-white/80 text-[#A3D5B2] px-3 py-1 rounded-full font-sans-body text-sm"><svg width="16" height="16" fill="none"><circle cx="8" cy="8" r="8" fill="#A3D5B2"/><path d="M5 9l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>Vegan</span>
          <span className="flex items-center gap-1 bg-white/80 text-[#A3D5B2] px-3 py-1 rounded-full font-sans-body text-sm"><svg width="16" height="16" fill="none"><circle cx="8" cy="8" r="8" fill="#A3D5B2"/><path d="M4 8l2.5 2.5L12 6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>Cruelty-Free</span>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center text-white/70 font-sans-body text-sm">© {new Date().getFullYear()} BellaOil. All rights reserved.</div>
    <span className="block text-white/80 text-xs mt-2">Proudly delivering to Ulcinj, Bar, Podgorica, and all of Montenegro</span>
  </footer>
);

// --- APP CONTENT ---
const AppContent = () => (
  <CartProvider>
    <Layout>
      {(scrollY) => (
        <>
          <Helmet>
            <title>BellaOil - Natural Glow for Skin & Hair | Cold-Pressed Luxury Oil</title>
            <meta name="description" content="BellaOil delivers radiant, natural beauty with cold-pressed oils and botanical ingredients. For glowing skin and luxurious hair. Montenegro delivery available." />
            <meta property="og:title" content="BellaOil - Natural Glow for Skin & Hair | Cold-Pressed Luxury Oil" />
            <meta property="og:description" content="BellaOil delivers radiant, natural beauty with cold-pressed oils and botanical ingredients. For glowing skin and luxurious hair. Montenegro delivery available." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://bellaoil.onrender.com/" />
            <meta property="og:image" content="/logo.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="BellaOil - Natural Glow for Skin & Hair | Cold-Pressed Luxury Oil" />
            <meta name="twitter:description" content="BellaOil delivers radiant, natural beauty with cold-pressed oils and botanical ingredients. For glowing skin and luxurious hair. Montenegro delivery available." />
            <meta name="twitter:image" content="/logo.png" />
          </Helmet>
          <CartModal />
          <HeroSection scrollY={scrollY} />
          <IngredientsSection />
          <EditorialSection
            image={bOil5}
            alt="Woman holding BellaOil bottle"
            title="Beauty & Haircare That Comes Naturally"
            text="Our journey began with a passion for natural beauty and haircare solutions. We believe the most effective products come from nature's finest ingredients, carefully selected and expertly crafted for both your skin and hair."
          />
          <AboutSection />
          <EditorialSection
            image={bOil3}
            alt="BellaOil on minimal background"
            title="For Glowing Skin & Lustrous Hair"
            text="Deeply nourishes, hydrates, and protects your skin for a radiant, healthy glow. Strengthens, smooths, and adds shine to your hair—perfect for scalp massages and frizz control."
            reverse
          />
          <GallerySection />
          <TestimonialsSection />
          <ShareYourGlowSection />
          <CallToActionSection />
          <FAQSection />
          <Footer />
          <MobileStickyCTA />
          <FloatingCTA scrollY={scrollY} />
        </>
      )}
    </Layout>
  </CartProvider>
);

const levitateStyle = `
@keyframes levitate {
  0% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0); }
}
.levitate {
  animation: levitate 2.8s ease-in-out infinite;
}
`;

// --- ROUTES ---
const App = () => (
  <>
    <style>{levitateStyle + `
      ::-webkit-scrollbar { width: 12px; background: #f7e7d8; }
      ::-webkit-scrollbar-thumb { background: #dca0b4; border-radius: 6px; }
      ::-webkit-scrollbar-thumb:hover { background: #e7bfae; }
      body { scrollbar-color: #dca0b4 #f7e7d8; scrollbar-width: thin; }
    `}</style>
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/products/bella-oil" element={<ProductPageWithLayout />} />
        <Route path="/ingredients" element={<IngredientsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  </>
);

export { CartContext, useCart, CartProvider };

export default App;