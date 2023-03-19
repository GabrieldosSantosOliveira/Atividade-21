/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Space Grotesk, sans-serif',
      },
      backgroundImage: {
        'main-desktop': 'url(/bg-main-desktop.png)',
        'main-mobile': 'url(/bg-main-mobile.png)',
        'card-back': 'url(/bg-card-back.png)',
        'card-front': 'url(/bg-card-front.png)',
      },
    },
  },
  plugins: [],
};
