/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-5": "#5E0000",
        "gray-500": "#558abb",
        "gray-600": "#174583",
        "primary-100": "#48b1da",
        "primary-300": "#FFA6A3",
        "primary-500": "#098693",
        "primary-700": "#558abb",
        "secondary-400": "#FFCD58",
        "secondary-500": "#fdd5ae"       
        
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"], 
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
        evolvetext: "url('./assests/EvolveText.png')",
        abstractwaves: "url('./assests/AbstractWaves.png')",
        sparkles: "url('./assests/Sparkles.png')",
        circles: "url('./assests/Circles.png')",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
};