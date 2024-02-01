/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3498db',
        'secondary': '#2ecc71',
        'ternary': '#e74c3c',
        'light': '#f5f5f5',
        'dark': '#333333',
      },

      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
      }

    },
  },
  plugins: [],
}