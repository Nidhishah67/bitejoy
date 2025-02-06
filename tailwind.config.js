/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    colors: {
      yellow: {
        100: "#fff7e5",
        200: "#fff0cb",
        300: "#fee8b0",
        400: "#fee196",
        500: "#fed97c",
        600: "#cbae63",
        700: "#98824a",
        800: "#665732",
        900: "#332b19",
      },
      red: {
        100: "#ffddd6",
        200: "#ffbcad",
        300: "#ff9a85",
        400: "#ff795c",
        500: "#ff5733",
        600: "#cc4629",
        700: "#99341f",
        800: "#662314",
        900: "#33110a"
      },
      black: {
        100: "#cccccc",
        200: "#999999",
        300: "#666666",
        400: "#333333",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000"
      },
      white: {
        100: "#ffffff",
        200: "#ffffff",
        300: "#ffffff",
        400: "#ffffff",
        500: "#ffffff",
        600: "#cccccc",
        700: "#999999",
        800: "#666666",
        900: "#333333"
      },
      pink: {
          100: "#fff3ef",
          200: "#ffe6df",
          300: "#ffdad0",
          400: "#ffcdc0",
          500: "#ffc1b0",
          600: "#cc9a8d",
          700: "#99746a",
          800: "#664d46",
          900: "#332723"
},
    },
    fontFamily: {
      barlow: ['Public Sans Variable', 'sans-serif'],
      mentimun: ['Mentimun', 'cursive'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      
    },
  },
  plugins: [],
};
