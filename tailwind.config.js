/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xsmall': '240px',
      'small': '320px',
      'med': '768px',
      'lgr': '1024px',
      'xlar': '1280px',
      '2xlar': '1536px',
      '3xlar': '1920px'  
    },
    extend: {},
  },
  plugins: [],
};
