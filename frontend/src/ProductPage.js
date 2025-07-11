import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaStar, FaCheckCircle, FaLeaf, FaSpa, FaRegGem, FaTint, FaTruck, FaShieldAlt, FaHeart, FaShare, FaRegClock, FaSmile } from 'react-icons/fa';
import { useCart } from './App';
import bOil1 from './b-oil1.jpg';
import bOil1Webp from './b-oil1.webp';
import bOil2 from './b-oil2.jpg';
import bOil2Webp from './b-oil2.webp';
import bOil3 from './b-oil3.jpg';
import bOil3Webp from './b-oil3.webp';
import bOil4 from './b-oil4.jpg';
import bOil4Webp from './b-oil4.webp';

const ProductPage = ({ scrollY }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('50ml');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', address: '', notes: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const { addToCart } = useCart();

  const productImages = [
    { jpg: bOil1, webp: bOil1Webp, alt: "BellaOil product bottle - front view" },
    { jpg: bOil2, webp: bOil2Webp, alt: "BellaOil product bottle - side view" },
    { jpg: bOil3, webp: bOil3Webp, alt: "BellaOil product bottle - lifestyle" },
    { jpg: bOil4, webp: bOil4Webp, alt: "BellaOil product bottle - close up" }
  ];

  const sizes = [
    { id: '30ml', price: 24.99, savings: 0 },
    { id: '50ml', price: 34.99, savings: 5 },
    { id: '100ml', price: 59.99, savings: 15 }
  ];

  const currentSize = sizes.find(s => s.id === selectedSize);

  const starRating = (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-lg" />
        ))}
      </div>
      <span className="text-gray-600 font-semibold">4.9</span>
      <span className="text-gray-500">(1,284 reviews)</span>
    </div>
  );

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // For now, just alert the data. In production, send to backend or WhatsApp.
    alert(`Order received!\nName: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}\nNotes: ${form.notes}`);
  };

  const handleAddToCart = () => {
    addToCart({
      id: 'bella-oil',
      name: 'BellaOil Pure',
      size: selectedSize,
      price: currentSize.price,
      quantity,
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF5F0] pt-24">
      <Helmet>
        <title>BellaOil Pure - Cold-Pressed Luxury Oil for Skin & Hair</title>
        <meta name="description" content="BellaOil Pure delivers radiant, natural beauty with cold-pressed oils and botanicals. For glowing skin and luxurious hair. Montenegro delivery available." />
        <meta property="og:title" content="BellaOil Pure - Cold-Pressed Luxury Oil for Skin & Hair" />
        <meta property="og:description" content="BellaOil Pure delivers radiant, natural beauty with cold-pressed oils and botanicals. For glowing skin and luxurious hair. Montenegro delivery available." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://bellaoil.onrender.com/products/bella-oil" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BellaOil Pure - Cold-Pressed Luxury Oil for Skin & Hair" />
        <meta name="twitter:description" content="BellaOil Pure delivers radiant, natural beauty with cold-pressed oils and botanicals. For glowing skin and luxurious hair. Montenegro delivery available." />
        <meta name="twitter:image" content="/logo.png" />
        
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "BellaOil Pure",
            "image": ["/logo.png"],
            "description": "BellaOil Pure delivers radiant, natural beauty with cold-pressed oils and botanicals. For glowing skin and luxurious hair. Montenegro delivery available.",
            "brand": { "@type": "Brand", "name": "BellaOil" },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "price": "34.99",
              "availability": "https://schema.org/InStock",
              "url": "https://bellaoil.onrender.com/products/bella-oil"
            }
          }
        `}</script>
      </Helmet>
      
      {/* Customer Order Form - Glassmorphism Modal */}
      {showOrderForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 w-full max-w-md mx-4 relative">
            <button 
              onClick={() => setShowOrderForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-rose-gold-500 text-2xl transition-colors"
            >
              &times;
            </button>
            
            <div className="text-center mb-6">
              <h2 className="text-3xl font-serif-head font-bold text-gray-900 mb-2">Complete Your Order</h2>
              <p className="text-gray-600">BellaOil Pure - {selectedSize} × {quantity}</p>
              <div className="text-2xl font-bold text-rose-gold-600 mt-2">
                ${(currentSize.price * quantity).toFixed(2)}
              </div>
            </div>
            
            {formSubmitted ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-3xl text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Order Received!</h3>
                <p className="text-gray-600">We'll contact you soon to confirm your order.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={form.name} 
                    onChange={handleFormChange} 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/70 backdrop-blur-sm focus:border-rose-gold-400 focus:outline-none focus:ring-2 focus:ring-rose-gold-200 transition-all" 
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={form.phone} 
                    onChange={handleFormChange} 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/70 backdrop-blur-sm focus:border-rose-gold-400 focus:outline-none focus:ring-2 focus:ring-rose-gold-200 transition-all" 
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Delivery Address *</label>
                  <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    value={form.address} 
                    onChange={handleFormChange} 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/70 backdrop-blur-sm focus:border-rose-gold-400 focus:outline-none focus:ring-2 focus:ring-rose-gold-200 transition-all" 
                    placeholder="Enter your delivery address"
                  />
                </div>
                
                <div>
                  <label htmlFor="notes" className="block text-gray-700 font-semibold mb-2">Special Instructions</label>
                  <textarea 
                    id="notes" 
                    name="notes" 
                    value={form.notes} 
                    onChange={handleFormChange} 
                    className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/70 backdrop-blur-sm focus:border-rose-gold-400 focus:outline-none focus:ring-2 focus:ring-rose-gold-200 transition-all resize-none" 
                    rows={3}
                    placeholder="Any special delivery instructions..."
                  />
                </div>
                
                <div className="bg-rose-gold-50/50 rounded-xl p-4 border border-rose-gold-100/50">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <FaTruck className="text-rose-gold-500" />
                    <span>Pay on Delivery in Montenegro</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaShieldAlt className="text-rose-gold-500" />
                    <span>100% Money-back guarantee</span>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-rose-gold-600 hover:bg-rose-gold-700 text-white py-4 rounded-xl text-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Submit Order
                </button>
              </form>
            )}
          </div>
        </div>
      )}
      
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
              <picture>
                <source srcSet={productImages[selectedImage].webp} type="image/webp" />
                <img 
                  src={productImages[selectedImage].jpg} 
                  alt={productImages[selectedImage].alt} 
                  className="w-full h-[600px] object-cover object-center"
                />
              </picture>
              
              {/* Wishlist & Share Buttons */}
              <div className="absolute top-4 right-4 flex flex-col gap-3">
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
                    isWishlisted ? 'bg-rose-gold-500 text-white' : 'bg-white text-gray-700 hover:bg-rose-gold-50'
                  }`}
                  aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                  <FaHeart className="text-lg" />
                </button>
                <button className="p-3 rounded-full bg-white shadow-lg text-gray-700 hover:bg-rose-gold-50 transition-all duration-300" aria-label="Share product">
                  <FaShare className="text-lg" />
                </button>
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                    selectedImage === index 
                      ? 'border-rose-gold-500 shadow-lg' 
                      : 'border-gray-200 hover:border-rose-gold-300'
                  }`}
                >
                  <picture>
                    <source srcSet={image.webp} type="image/webp" />
                    <img 
                      src={image.jpg} 
                      alt={image.alt} 
                      className="w-full h-24 object-cover object-center"
                    />
                  </picture>
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Product Header */}
            <div>
              <div className="flex items-center gap-4 mb-4 flex-wrap">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Best Seller
                </span>
                <span className="bg-rose-gold-100 text-rose-gold-800 px-3 py-1 rounded-full text-sm font-semibold">
                  New Formula
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Pay on Delivery
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif-head font-bold text-gray-900 mb-4">BellaOil Pure</h1>
              <div className="mb-2 text-rose-gold-600 font-semibold">Ships within Montenegro</div>
              
              <div className="mb-6 text-gray-700">To order: Select your size, quantity, and click "Order Now". We'll confirm by phone or WhatsApp. Pay on delivery in Montenegro.</div>
              
              {starRating}
            </div>

            {/* Pricing */}
            <div>
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-bold text-gray-900">${currentSize.price}</span>
                {currentSize.savings > 0 && (
                  <span className="text-lg text-green-600 font-semibold">
                    Save ${currentSize.savings}
                  </span>
                )}
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Choose Size</h3>
                <div className="grid grid-cols-3 gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.id)}
                      className={`p-4 rounded-2xl border-2 transition-all duration-300 text-center ${
                        selectedSize === size.id
                          ? 'border-rose-gold-500 bg-rose-gold-50 text-rose-gold-700'
                          : 'border-gray-200 hover:border-rose-gold-300'
                      }`}
                    >
                      <div className="font-semibold">{size.id}</div>
                      <div className="text-sm text-gray-600">${size.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-rose-gold-300 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-16 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-rose-gold-300 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-4">
                <button
                  className="w-full bg-rose-gold-600 hover:bg-rose-gold-700 text-white py-4 rounded-2xl text-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => setShowOrderForm(true)}
                >
                  Order Now - ${(currentSize.price * quantity).toFixed(2)}
                </button>
                <button
                  className="w-full bg-white border-2 border-rose-gold-500 text-rose-gold-600 py-4 rounded-2xl text-xl font-bold hover:bg-rose-gold-50 transition-all duration-300"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <FaTruck className="text-rose-gold-500 text-xl" />
                <div>
                  <div className="font-semibold text-gray-900">Free Shipping</div>
                  <div className="text-sm text-gray-600">Montenegro</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaShieldAlt className="text-rose-gold-500 text-xl" />
                <div>
                  <div className="font-semibold text-gray-900">30-Day Returns</div>
                  <div className="text-sm text-gray-600">Money-back guarantee</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaRegClock className="text-rose-gold-500 text-xl" />
                <div>
                  <div className="font-semibold text-gray-900">Fast Delivery</div>
                  <div className="text-sm text-gray-600">2-3 business days</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaSmile className="text-rose-gold-500 text-xl" />
                <div>
                  <div className="font-semibold text-gray-900">Customer Support</div>
                  <div className="text-sm text-gray-600">24/7 assistance</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description Tabs */}
        <div className="mt-20">
          <div className="bg-white rounded-3xl shadow-lg border border-rose-gold-50 overflow-hidden">
            <div className="border-b border-gray-100">
              <nav className="flex">
                {['Description', 'Ingredients', 'How to Use', 'Reviews'].map((tab, index) => (
                  <button
                    key={tab}
                    className="flex-1 px-6 py-4 text-lg font-semibold text-gray-700 hover:text-rose-gold-500 transition-colors border-b-2 border-transparent hover:border-rose-gold-300"
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-serif-head font-bold text-gray-900 mb-6">Product Description</h3>
                <p className="text-gray-700 mb-6">
                  BellaOil Pure is our signature product, crafted with the finest cold-pressed olive oil and carefully selected botanical extracts. This multi-purpose beauty oil delivers deep hydration, natural radiance, and lasting results for both skin and hair.
                </p>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-lg mt-0.5 flex-shrink-0" />
                    <span>Deep hydration without greasiness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-lg mt-0.5 flex-shrink-0" />
                    <span>Natural anti-aging properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-lg mt-0.5 flex-shrink-0" />
                    <span>Strengthens and smooths hair</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-lg mt-0.5 flex-shrink-0" />
                    <span>100% natural ingredients</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-3xl font-serif-head font-bold text-gray-900 text-center mb-12">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-3xl shadow-lg border border-rose-gold-50 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 bg-gradient-to-br from-rose-gold-50 to-rose-gold-100 flex items-center justify-center">
                  <FaSpa className="text-6xl text-rose-gold-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">BellaOil Hair Serum</h3>
                  <p className="text-gray-600 mb-4">Advanced formula for hair growth and strength</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">$39.99</span>
                    <button className="bg-rose-gold-500 hover:bg-rose-gold-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage; 