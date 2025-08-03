// /** @type {import('tailwindcss').Config} */
// const { fontFamily } = require('tailwindcss/defaultTheme')
// module.exports = {
//   content: [
//     // "./pages/**/*.{js,ts,jsx,tsx}",
//     // "./components/**/*.{js,ts,jsx,tsx}",
//     // "./app/**/*.{js,ts,jsx,tsx}",
//     "./src/**/*.{js,ts,jsx,tsx}" ,
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       fontFamily: {
//         mont:['var(--font-mont)',...fontFamily.sans]
//       },
//       colors:{
//         dark: "#121212",
//         darkCard:"#1E1E1E",
//         light: "#DCDCDD",
//         primary: "#FF6EC7", // 240,86,199
//         primaryDark: "#80E6FF", // 80,230,217
//         transitionColor1: "#1985A1",
//         transitionColor2:"#C5C3C6"
//       },
//       animation:{
//         'spin-slow': 'spin 10s linear infinite',
//       },
//       backgroundImage: {
//         circularLight:
//             "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",
    
//         circularDark:
//             "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #46494C 8px,#46494C 100px)",
    
//         circularLightLg:
//             "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",
    
//         circularDarkLg:
//             "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#46494C 8px,#46494C 80px)",
    
//         circularLightMd:
//             "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",
    
//         circularDarkMd:
//             "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)",
    
//         circularLightSm:
//             "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",
    
//         circularDarkSm:
//             "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)",
//     },
    
//   },
//   screens:{
//     "2xl": { max: "1535px" },
//     // => @media (max-width: 1535px) { ... }

//     xl: { max: "1279px" },
//     // => @media (max-width: 1279px) { ... }

//     lg: { max: "1023px" },
//     // => @media (max-width: 1023px) { ... }

//     md: { max: "767px" },
//     // => @media (max-width: 767px) { ... }

//     sm: { max: "639px" },
//     // => @media (max-width: 639px) { ... }

//     xs: { max: "479px" },
//     // => @media (max-width: 479px) { ... }
//   }
// },

//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#121212",           // Base dark background
        darkCard: "#1E1E1E",       // Cards in dark mode
        light: "#F9FAFB",          // Light background
        primary: "#B63E96",        // Pink-violet for CTAs/highlight
        primaryDark: "#0A9396",    // Teal-blue for contrast in dark mode
        transitionColor1: "#3A86FF", // Blue transition
        transitionColor2: "#FFBE0B"  // Warm yellow transition
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.05) 2px,#F9FAFB 5px,#F9FAFB 100px)",
        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.05) 2px, #121212 8px,#121212 100px)",
        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.05) 2px,#F9FAFB 5px,#F9FAFB 80px)",
        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.05) 2px,#121212 8px,#121212 80px)",
        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.05) 2px,#F9FAFB 5px,#F9FAFB 60px)",
        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.05) 2px,#121212 8px,#121212 60px)",
        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.05) 2px,#F9FAFB 5px,#F9FAFB 40px)",
        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.05) 2px,#121212 8px,#121212 40px)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },
  plugins: [],
}




// /** @type {import('tailwindcss').Config} */
// const { fontFamily } = require('tailwindcss/defaultTheme')

// module.exports = {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       fontFamily: {
//         mont: ['var(--font-mont)', ...fontFamily.sans],
//       },
//       colors: {
//         // 🌑 Dark Theme
//         dark: "#1A1A1A",           // Rich charcoal black
//         darkCard: "#2B2B2B",       // Subtle card contrast
//         light: "#F5F3EF",          // Warm ivory/light beige
//         primary: "#D4AF37",        // Gold (main accent color)
//         primaryDark: "#FFD700",    // Brighter gold for highlights
//         transitionColor1: "#B8860B", // Dark goldenrod
//         transitionColor2: "#F9E79F", // Light champagne gold
//       },
//       animation: {
//         'spin-slow': 'spin 10s linear infinite',
//       },
//       backgroundImage: {
//         circularLight:
//           "repeating-radial-gradient(rgba(139,69,19,0.05) 2px,#F5F3EF 5px,#F5F3EF 100px)",
//         circularDark:
//           "repeating-radial-gradient(rgba(255,215,0,0.05) 2px, #1A1A1A 8px,#1A1A1A 100px)",
//         circularLightLg:
//           "repeating-radial-gradient(rgba(139,69,19,0.05) 2px,#F5F3EF 5px,#F5F3EF 80px)",
//         circularDarkLg:
//           "repeating-radial-gradient(rgba(255,215,0,0.05) 2px,#1A1A1A 8px,#1A1A1A 80px)",
//         circularLightMd:
//           "repeating-radial-gradient(rgba(139,69,19,0.05) 2px,#F5F3EF 5px,#F5F3EF 60px)",
//         circularDarkMd:
//           "repeating-radial-gradient(rgba(255,215,0,0.05) 2px,#1A1A1A 8px,#1A1A1A 60px)",
//         circularLightSm:
//           "repeating-radial-gradient(rgba(139,69,19,0.05) 2px,#F5F3EF 5px,#F5F3EF 40px)",
//         circularDarkSm:
//           "repeating-radial-gradient(rgba(255,215,0,0.05) 2px,#1A1A1A 8px,#1A1A1A 40px)",
//       },
//     },
//     screens: {
//       "2xl": { max: "1535px" },
//       xl: { max: "1279px" },
//       lg: { max: "1023px" },
//       md: { max: "767px" },
//       sm: { max: "639px" },
//       xs: { max: "479px" },
//     },
//   },
//   plugins: [],
// }
