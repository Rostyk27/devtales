/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          50: 'var(--primary-50)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          50: 'var(--secondary-50)',
        },
        black: 'var(--black)',
        grey: 'var(--grey)',
        'bg-light': 'var(--bg-light)',
        'bg-dark': 'var(--bg-dark)',
      },
      fontSize: {
        'size-base': 'var(--size-base)',
      },
    },
    screens: {
      sm: '481px', // 640px default
      md: '768px',
      lg: '1025px', // 1024px default
      xl: '1280px',
      '2xl': '1600px', // 1536px default
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
}
