/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'pulse-shadow': {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(8, 112, 184, 0.7)',
          },
          '50%': {
            boxShadow: '0 0 20px 20px rgba(8, 112, 184, 0)',
          },
        },
        
      },
      },
      animation: {
        'pulse-shadow': 'pulse-shadow 2s infinite',
        
      },
    },
  plugins: [],
}

