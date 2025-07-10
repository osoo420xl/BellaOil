import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaHeart, FaStar, FaTimes, FaGift, FaTruck } from 'react-icons/fa';
import CTAButton from './CTAButton';

const FloatingCTA = ({ scrollY }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(scrollY > 300);
    };
    handleScroll();
  }, [scrollY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Floating CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-500">
        <div className="bg-white border-t-2 border-rose-gold-100 shadow-2xl">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Product Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-gold-100 to-rose-gold-200 rounded-full flex items-center justify-center">
                  <FaStar className="text-rose-gold-600 text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">BellaOil Pure</h3>
                  <p className="text-sm text-gray-600">4.9 ★ (1,284 reviews)</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-3">
                <CTAButton 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="hidden md:flex"
                >
                  <FaHeart className="mr-2" />
                  Wishlist
                </CTAButton>
                
                <CTAButton 
                  variant="primary" 
                  size="sm"
                  icon="cart"
                >
                  Add to Cart - $34.99
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded CTA Panel */}
      {isExpanded && (
        <div className="fixed bottom-20 left-0 right-0 z-40 bg-white border-t-2 border-rose-gold-100 shadow-2xl">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Complete Your Order</h3>
              <button 
                onClick={() => setIsExpanded(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FaTimes className="text-gray-500" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Size Selection */}
              <div className="bg-gray-50 rounded-2xl p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Choose Size</h4>
                <div className="space-y-2">
                  {[
                    { size: '30ml', price: 24.99 },
                    { size: '50ml', price: 34.99, popular: true },
                    { size: '100ml', price: 59.99, savings: 15 }
                  ].map((option) => (
                    <button
                      key={option.size}
                      className={`w-full p-3 rounded-xl text-left transition-all ${
                        option.popular 
                          ? 'bg-rose-gold-500 text-white' 
                          : 'bg-white hover:bg-rose-gold-50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">{option.size}</span>
                        <span>${option.price}</span>
                      </div>
                      {option.savings && (
                        <span className="text-xs text-green-600">Save ${option.savings}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Offers */}
              <div className="bg-gradient-to-br from-rose-gold-50 to-rose-gold-100 rounded-2xl p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Special Offers</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <FaGift className="text-rose-gold-600" />
                    <span>Free shipping on orders over $50</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaTruck className="text-rose-gold-600" />
                    <span>2-3 day delivery</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaStar className="text-rose-gold-600" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <CTAButton 
                  variant="primary" 
                  size="lg"
                  icon="cart"
                  className="w-full"
                >
                  Buy Now - $34.99
                </CTAButton>
                
                <CTAButton 
                  variant="secondary" 
                  size="lg"
                  className="w-full"
                >
                  Add to Cart
                </CTAButton>
                
                <button className="w-full text-center text-sm text-gray-600 hover:text-rose-gold-600 transition-colors">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingCTA; 