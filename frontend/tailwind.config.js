/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'rose-gold': {
          50: '#fdf6ed',
          100: '#f7e7d8',
          200: '#f1d3b8',
          300: '#e7bfae',
          400: '#dca0b4',
          500: '#c98e8e',
          600: '#b87c7c',
          700: '#a36a6a',
          800: '#8c5959',
          900: '#7a4a4a',
        },
      },
      fontFamily: {
        'serif-head': ['Playfair Display', 'serif'],
        'sans-body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};