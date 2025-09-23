module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        pulseShadow: {
          '0%, 100%': { boxShadow: '0 0 15px #22c55e' }, // Vert
          '50%': { boxShadow: '0 0 15px #8b5cf6' }, // Violet
        },
      },
      animation: {
        slide: 'slide 20s linear infinite',
        pulseShadow: 'pulseShadow 1.5s infinite ease-in-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

