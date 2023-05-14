/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors : {
        "gold": "#DCCA87",
        "black": "#141414",
      },
      fontFamily: {
        "upright": "--font-upright", 
        "garamond": "--font-garamond", 
      }
    },
  },
  plugins: [],
}
