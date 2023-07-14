/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      'soft-orange': 'hsl(35, 77%, 62%)',
      'soft-red': 'hsl(5, 85%, 63%)',
      'off-white': 'hsl(36, 100%, 99%)',
      'grayish-blue': 'hsl(233, 8%, 79%)',
      'dark-grayish-blue': 'hsl(236, 13%, 42%)',
      'very-dark-blue': 'hsl(240, 100%, 5%)',
      'off-red': '#FF0000',
      'off-black': '#000000',
    },
    extend: {
      fontFamily: {
        inter: "inter-regular",
      },
    },
  },
  plugins: [],
}

