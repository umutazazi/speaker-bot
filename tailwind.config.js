/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#161616',
        secondary: '#5FA3F7',
        textPrimary: '#FFFFFF',
        textSecondary: '#D4D4D4',
        btnPrimary: 'rgb(96, 165, 250)',
        btnSecondary: '#3B82F6',
        background: '--color-gray-900', // Arkaplan rengi ekleyin
      },
    },
  },
  plugins: [],
}
