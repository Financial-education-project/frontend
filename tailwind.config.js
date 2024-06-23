/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,scss}",
  ],
  theme: {
    extend: {
      colors: {
        grayInput: "#464646",
        grayButton: "#27292c",
        grayButtonHover: "#353638",
        grayButtonOutline: "#cfcfcf",     
      },
    },
  },
  plugins: [],
}

