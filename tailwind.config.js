/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0e0e10',
        surface: '#1a1a1f',
        primary: '#22d3ee',
        secondary: '#6366f1',
        textMain: '#f9fafb',
        textMuted: '#a1a1aa',
        border: '#2d2d31',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        trail: {
          '0%': { '--angle': '0deg' },
          '100%': { '--angle': '360deg' },
        },
      },
      animation: {
        trail: 'trail var(--duration) linear infinite',
      },
    },
  },
  plugins: [],
};
