import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CTAButton from './CTAButton';
import { FaStar, FaHeart, FaShoppingCart } from 'react-icons/fa';

const FloatingCTA = ({ scrollY }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show after scrolling 50% of viewport height
      if (scrollPosition > windowHeight * 0.5 && scrollPosition < documentHeight - windowHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Compact CTA */}
      <div className="fixed bottom-4 right-4 z-50 hidden md:block">
        <div className="bg-white rounded-2xl shadow-2xl border border-rose-gold-100 p-4 max-w-sm">
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
                onClick={() => navigate('/products/bella-oil')}
              >
                Add to Cart - $34.99
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded CTA Panel */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-4 relative">
            <button 
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">BellaOil Pure</h3>
              <p className="text-gray-600 mb-4">Cold-pressed luxury oil for skin & hair</p>
              <div className="flex items-center justify-center gap-2 mb-4">
                <FaStar className="text-yellow-400" />
                <span className="font-semibold">4.9/5.0</span>
                <span className="text-gray-500">(1,284 reviews)</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <CTAButton 
                variant="primary" 
                size="lg"
                icon="cart"
                onClick={() => navigate('/products/bella-oil')}
                className="w-full"
              >
                View Product - $34.99
              </CTAButton>
              
              <CTAButton 
                variant="outline" 
                size="lg"
                onClick={() => setIsExpanded(false)}
                className="w-full"
              >
                Continue Shopping
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingCTA; 