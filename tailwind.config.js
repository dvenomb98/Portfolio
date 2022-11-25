/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        baseFamily: 'Inter',
      },
      colors: {
        'primary-black': '#000000',
        'primary-white': '#F4F4F9',
        'primary-orange': '#ff981f',
        'primary-gray': '#4b5563',
        'primary-gray-dark': '#9ca3af',
      },
      fontSize: {
        h4: ['1.125rem', '1'], // 18px
        h3: ['1.25rem', '1'], // 20px
        h2: ['1.5rem', '1'], // 24px
        h1: ['2.25rem', '1'], // 30px
        headline: ['3.25rem', '1.25'],
        banner: ['4.25rem', '1'],
        small: ['0.75rem', '1'],
      },
      backgroundImage: {
        'banner-texture': "url('/banner.png')",
        'banner-texture-light': "url('/banner-light.png')",
      },
    },
  },
  plugins: [],
  safelist: ['banner-texture', 'banner-texture-light'],
};
