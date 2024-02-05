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
      },

      fontSize: {
        'clamp-1': "clamp(50px, 7vw, 5rem)",
        'clamp-2': "clamp(25px, 3vw, 2rem)",
        'clamp-3': "clamp(25px, 10vw, 12rem)",
      },

    },
  },
  plugins: [],
}