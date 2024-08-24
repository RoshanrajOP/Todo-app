/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-slow': 'fadeIn 1.5s ease-out forwards',  // Slow fade-in effect
        'text-appear': 'textAppear 3s ease-out forwards',  // New animation for text appearing
        'pulse': 'pulse 2s infinite',                      // Pulse effect
        'zoom-in': 'zoomIn 1.5s ease-out forwards',        // Zoom-in effect
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        textAppear: {
          '0%': { opacity: 0, transform: 'translateY(-20px)', color: '#1d4ed8' }, // Dark blue at start
          '50%': { opacity: 0.5, transform: 'translateY(0)', color: '#3b82f6' },  // Blue
          '100%': { opacity: 1, transform: 'translateY(0)', color: '#9333ea' },  // Purple
        },
        pulse: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.05)', opacity: 0.8 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        zoomIn: {
          '0%': { opacity: 0, transform: 'scale(0.8)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
