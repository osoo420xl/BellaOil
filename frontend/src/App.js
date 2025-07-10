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
import { FaLeaf, FaRegGem, FaTint, FaStar, FaQuoteLeft, FaCheckCircle, FaRegClock, FaSpa, FaSmile, FaSearch } from 'react-icons/fa';
import ProductPage from './ProductPage';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import logo from './logo.png';

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

// --- HEADER ---
const Logo = () => (
  <div className="flex items-center gap-2 select-none">
    <img src={logo} alt="BellaOil logo" className="h-15 w-auto object-contain" style={{maxHeight: '60px'}} />
  </div>
);

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur border-b border-rose-gold-100 shadow-sm ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <Logo />
          {/* Search bar (desktop) */}
          <form className="hidden md:flex items-center ml-6 bg-white rounded-full border border-rose-gold-100 px-3 py-1 shadow-sm w-72 max-w-xs">
            <FaSearch className="text-rose-gold-400 mr-2" />
            <input type="text" placeholder="Search products..." className="bg-transparent outline-none text-gray-900 font-sans-body w-full" />
          </form>
        </div>
        {/* Search bar (mobile, above nav) */}
        <form className="flex md:hidden items-center mt-2 mb-2 bg-white rounded-full border border-rose-gold-100 px-3 py-1 shadow-sm w-full">
          <FaSearch className="text-rose-gold-400 mr-2" />
          <input type="text" placeholder="Search products..." className="bg-transparent outline-none text-gray-900 font-sans-body w-full" />
        </form>
        <nav className="hidden md:flex gap-8 text-gray-900 text-lg font-sans-body">
          <Link to="/" className="hover:text-rose-gold-300 focus:text-rose-gold-400 transition-colors">Home</Link>
          <Link to="/products" className="hover:text-rose-gold-300 focus:text-rose-gold-400 transition-colors">Products</Link>
          <a href="#ingredients" className="hover:text-rose-gold-300 focus:text-rose-gold-400 transition-colors">Ingredients</a>
          <a href="#results" className="hover:text-rose-gold-300 focus:text-rose-gold-400 transition-colors">Results</a>
          <a href="#journal" className="hover:text-rose-gold-300 focus:text-rose-gold-400 transition-colors">Journal</a>
          <a href="#contact" className="hover:text-rose-gold-300 focus:text-rose-gold-400 transition-colors">Contact</a>
        </nav>
        <button onClick={() => window.location.href='/products'} className="ml-6 bg-rose-gold-500 hover:bg-rose-gold-600 text-white px-6 py-2 rounded-full font-semibold shadow transition-all duration-300 text-base font-sans-body hidden md:block">Shop Now</button>
      </div>
    </header>
  );
};

// --- HERO SECTION (reduce top padding, increase image container height by 30%) ---
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
      <p className="text-xl md:text-2xl text-gray-700 font-sans-body max-w-xl text-center md:text-left mb-2" style={{ lineHeight: 1.7 }}>
        Pure, cold-pressed olive oil for glowing skin and lustrous hair. Deep hydration, natural shine, and healthy confidence from head to toe.
      </p>
      {/* Key benefits list */}
      <ul className="flex flex-col gap-2 mb-4 w-full max-w-md">
        <li className="flex items-center gap-3 text-lg text-gray-800 font-sans-body"><FaLeaf className="text-rose-gold-400" /> 100% Natural & Cold-Pressed</li>
        <li className="flex items-center gap-3 text-lg text-gray-800 font-sans-body"><FaSpa className="text-rose-gold-400" /> Multi-use: Skin & Hair</li>
        <li className="flex items-center gap-3 text-lg text-gray-800 font-sans-body"><FaSmile className="text-rose-gold-400" /> Dermatologist Approved</li>
        <li className="flex items-center gap-3 text-lg text-gray-800 font-sans-body"><FaRegGem className="text-rose-gold-400" /> Money-Back Guarantee</li>
      </ul>
      <button onClick={() => window.location.href='/products'} className="bg-rose-gold-600 hover:bg-rose-gold-700 text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg transition-all duration-300 font-sans-body w-full max-w-xs mb-2 focus:outline-none focus:ring-4 focus:ring-rose-gold-300">Add to Cart</button>
      {/* Why Shop With Us row */}
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mt-4 w-full max-w-xl">
        <div className="flex flex-col items-center">
          <FaRegClock className="text-xl text-rose-gold-400 mb-1" />
          <span className="text-xs font-semibold text-gray-700">Fast Shipping</span>
        </div>
        <div className="flex flex-col items-center">
          <FaSpa className="text-xl text-rose-gold-400 mb-1" />
          <span className="text-xs font-semibold text-gray-700">Clean Ingredients</span>
        </div>
        <div className="flex flex-col items-center">
          <FaSmile className="text-xl text-rose-gold-400 mb-1" />
          <span className="text-xs font-semibold text-gray-700">Dermatologist Approved</span>
        </div>
        <div className="flex flex-col items-center">
          <FaLeaf className="text-xl text-rose-gold-400 mb-1" />
          <span className="text-xs font-semibold text-gray-700">Cruelty-Free</span>
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
      <picture>
        <source srcSet={bOil1Webp} type="image/webp" />
        <img src={bOil1} alt="BellaOil bottle" loading="lazy" className="rounded-2xl shadow-lg w-full h-[384px] object-cover object-center border-4 border-white levitate" />
      </picture>
      <picture>
        <source srcSet={bOil2Webp} type="image/webp" />
        <img src={bOil2} alt="Lifestyle with BellaOil" loading="lazy" className="rounded-2xl shadow-lg w-full h-[384px] object-cover object-center border-4 border-white levitate" />
      </picture>
      <picture>
        <source srcSet={bOil3Webp} type="image/webp" />
        <img src={bOil3} alt="BellaOil on minimal background" loading="lazy" className="rounded-2xl shadow-lg w-full h-[384px] object-cover object-center border-4 border-white levitate" />
      </picture>
      <picture>
        <source srcSet={bOil4Webp} type="image/webp" />
        <img src={bOil4} alt="Glowing skin and hair" loading="lazy" className="rounded-2xl shadow-lg w-full h-[384px] object-cover object-center border-4 border-white levitate" />
      </picture>
      <picture>
        <source srcSet={bOil6Webp} type="image/webp" />
        <img src={bOil6} alt="BellaOil lifestyle" loading="lazy" className="rounded-2xl shadow-lg w-full h-[384px] object-cover object-center border-4 border-white levitate" />
      </picture>
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
    <div className="text-center">
      <a href="https://instagram.com/bellaoil" target="_blank" rel="noopener noreferrer" className="inline-block bg-rose-gold-500 hover:bg-rose-gold-600 text-white px-8 py-3 rounded-full font-semibold font-sans-body shadow transition-all duration-300">Follow us on Instagram</a>
    </div>
  </section>
);

// --- CTA (spacious, minimal) ---
const CallToActionSection = () => (
  <section role="region" aria-labelledby="cta-heading" id="buy" className="container mx-auto px-4 md:px-8 py-24 flex flex-col items-center gap-8">
    <h2 id="cta-heading" className="text-3xl md:text-5xl font-serif-head font-bold text-gray-900 text-center">Ready for Glowing Skin & Lustrous Hair?</h2>
    <button onClick={() => window.location.href='/products'} className="bg-rose-gold-500 hover:bg-rose-gold-600 text-white px-12 py-5 rounded-full text-xl font-semibold shadow-lg transition-all duration-300 w-full max-w-xs font-sans-body focus:outline-none focus:ring-4 focus:ring-rose-gold-300">Shop Now</button>
  </section>
);

// --- MOBILE STICKY CTA BUTTON ---
const MobileStickyCTA = () => (
  <button
    onClick={() => window.location.href='/products'}
    className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-md bg-rose-gold-600 hover:bg-rose-gold-700 text-white text-lg font-bold py-4 rounded-full shadow-lg transition-all duration-300 block md:hidden focus:outline-none focus:ring-4 focus:ring-rose-gold-300"
    style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' }}
    aria-label="Shop Now"
  >
    Shop Now
  </button>
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
  </footer>
);

// --- APP CONTENT (minimal, airy, image-rich) ---
const AppContent = () => (
  <Layout>
    {(scrollY) => (
      <>
        <HeroSection scrollY={scrollY} />
        <EditorialSection
          image={bOil5}
          alt="Woman holding BellaOil bottle"
          title="Beauty & Haircare That Comes Naturally"
          text="Our journey began with a passion for natural beauty and haircare solutions. We believe the most effective products come from nature's finest ingredients, carefully selected and expertly crafted for both your skin and hair."
        />
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
      </>
    )}
  </Layout>
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
        <Route path="/products" element={<ProductPageWithLayout />} />
      </Routes>
    </Router>
  </>
);

export default App;