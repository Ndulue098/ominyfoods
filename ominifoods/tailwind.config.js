/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      'desktop': { max: '84em' },
      'tablet':{max:"75em"},
      "minTablet":{max:"62em"},
    },
    fontFamily: {
      sans: "Poppins",
    },
    extend: {
      fontSize: {
        base: '18px', 
      },
      height: { screen: "100dvh" },
    },
  },
  plugins: [],
};


/* 
screens: { 
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

screens: {
    'phone': '480px',
    'tablet': '640px',
    'laptop': '1024px',
    'desktop': '1280px',
    '4k': '2560px',
}
*/