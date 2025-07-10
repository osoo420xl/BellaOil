import React from 'react';
import { FaArrowRight, FaShoppingCart, FaHeart, FaStar } from 'react-icons/fa';

const CTAButton = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  icon, 
  onClick, 
  className = '',
  disabled = false,
  loading = false
}) => {
  const baseClasses = "inline-flex items-center justify-center font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-rose-gold-200 rounded-2xl";
  
  const variants = {
    primary: "bg-rose-gold-600 hover:bg-rose-gold-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-white border-2 border-rose-gold-500 text-rose-gold-600 hover:bg-rose-gold-50",
    outline: "bg-transparent border-2 border-rose-gold-500 text-rose-gold-600 hover:bg-rose-gold-500 hover:text-white",
    ghost: "bg-rose-gold-50 text-rose-gold-700 hover:bg-rose-gold-100",
    success: "bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl",
    warning: "bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg hover:shadow-xl"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };
  
  const iconMap = {
    arrow: <FaArrowRight className="ml-2" />,
    cart: <FaShoppingCart className="ml-2" />,
    heart: <FaHeart className="ml-2" />,
    star: <FaStar className="ml-2" />
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
          Loading...
        </div>
      ) : (
        <>
          {children}
          {icon && iconMap[icon]}
        </>
      )}
    </button>
  );
};

export default CTAButton; 