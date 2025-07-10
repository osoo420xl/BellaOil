import React, { useState } from 'react';
import { FaStar, FaCheckCircle, FaLeaf, FaSpa, FaRegGem, FaTint, FaTruck, FaShieldAlt, FaHeart, FaShare, FaRegClock, FaSmile } from 'react-icons/fa';
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

  return (
    <div className="min-h-screen bg-[#FAF5F0] pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-gold-50 to-rose-gold-100 py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600 mb-8">
            <a href="/" className="hover:text-rose-gold-500">Home</a>
            <span className="mx-2">/</span>
            <a href="/products" className="hover:text-rose-gold-500">Products</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">BellaOil Pure</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative group">
              <picture className="block">
                <source srcSet={productImages[selectedImage].webp} type="image/webp" />
                <img 
                  src={productImages[selectedImage].jpg} 
                  alt={productImages[selectedImage].alt}
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-white"
                />
              </picture>
              
              {/* Wishlist & Share Buttons */}
              <div className="absolute top-4 right-4 flex flex-col gap-3">
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
                    isWishlisted ? 'bg-rose-gold-500 text-white' : 'bg-white text-gray-700 hover:bg-rose-gold-50'
                  }`}
                >
                  <FaHeart className="text-lg" />
                </button>
                <button className="p-3 rounded-full bg-white shadow-lg text-gray-700 hover:bg-rose-gold-50 transition-all duration-300">
                  <FaShare className="text-lg" />
                </button>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                    selectedImage === index ? 'border-rose-gold-500' : 'border-gray-200 hover:border-rose-gold-300'
                  }`}
                >
                  <picture>
                    <source srcSet={image.webp} type="image/webp" />
                    <img 
                      src={image.jpg} 
                      alt={image.alt}
                      className="w-full h-24 object-cover"
                    />
                  </picture>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Product Header */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Best Seller
                </span>
                <span className="bg-rose-gold-100 text-rose-gold-800 px-3 py-1 rounded-full text-sm font-semibold">
                  New Formula
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif-head font-bold text-gray-900 mb-4">
                BellaOil Pure
              </h1>
              
              <p className="text-xl text-gray-700 mb-6">
                Pure, cold-pressed olive oil for glowing skin and lustrous hair
              </p>
              
              {starRating}
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-rose-gold-50">
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
                <button className="w-full bg-rose-gold-600 hover:bg-rose-gold-700 text-white py-4 rounded-2xl text-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105">
                  Add to Cart - ${(currentSize.price * quantity).toFixed(2)}
                </button>
                <button className="w-full bg-white border-2 border-rose-gold-500 text-rose-gold-600 py-4 rounded-2xl text-xl font-bold hover:bg-rose-gold-50 transition-all duration-300">
                  Buy Now - ${(currentSize.price * quantity).toFixed(2)}
                </button>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <FaTruck className="text-2xl text-rose-gold-500 mx-auto mb-2" />
                <span className="text-sm font-semibold text-gray-700">Free Shipping</span>
              </div>
              <div className="text-center">
                <FaShieldAlt className="text-2xl text-rose-gold-500 mx-auto mb-2" />
                <span className="text-sm font-semibold text-gray-700">30-Day Returns</span>
              </div>
              <div className="text-center">
                <FaRegClock className="text-2xl text-rose-gold-500 mx-auto mb-2" />
                <span className="text-sm font-semibold text-gray-700">Fast Delivery</span>
              </div>
              <div className="text-center">
                <FaSmile className="text-2xl text-rose-gold-500 mx-auto mb-2" />
                <span className="text-sm font-semibold text-gray-700">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">For Skin</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1" />
                        Deep hydration without greasiness
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1" />
                        Natural anti-aging properties
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1" />
                        Soothes sensitive skin
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1" />
                        Improves skin texture and tone
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">For Hair</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1" />
                        Strengthens and nourishes hair
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1" />
                        Adds natural shine and luster
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1" />
                        Reduces frizz and split ends
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1" />
                        Promotes healthy scalp
                      </li>
                    </ul>
                  </div>
                </div>
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