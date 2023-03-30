/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#e0fc62",
        
"secondary": "#a6fc74",
        
"accent": "#1911a3",
        
"neutral": "#372239",
        
"base-100": "#F3ECF3",
        
"info": "#92B2F6",
        
"success": "#36E780",
        
"warning": "#EBC34C",
        
"error": "#F04542",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

