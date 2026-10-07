/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#FAF7F0',
          200: '#F3EDE0',
          300: '#E8DFC9',
        },
        forest: {
          600: '#2D5A3D',
          700: '#245031',
          800: '#1B3E25',
          900: '#132D1A',
        },
        ink: {
          DEFAULT: '#2C2C2C',
          light: '#555555',
          lighter: '#888888',
        },
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'reading': '680px',
      },
    },
  },
  plugins: [],
};
