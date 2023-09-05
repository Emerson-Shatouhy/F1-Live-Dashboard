/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'text': '#010204',
        'background': '#ffffff',
        'primary': '#1d4f9f',
        'secondary': '#e6d1f0',
        'accent': '#8f3db8',
      }
    },
  },
  plugins: [],
}

