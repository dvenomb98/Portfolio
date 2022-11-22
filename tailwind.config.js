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
      },
      fontSize: {
        h4: ['1.125rem', '1'], // 18px
        h3: ['1.25rem', '1'], // 20px
        h2: ['1.5rem', '1'], // 24px
        h1: ['2.25rem', '1'], // 30px
        headline: ['3.25rem', '1.25'],
        small: ['0.75rem', '1'],
      },
    },
  },
  plugins: [],
};