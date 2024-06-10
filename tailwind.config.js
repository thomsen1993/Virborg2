/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: 'rgb(var(--primary-title) / <alpha-value>)',
        secondaryTitle: 'rgb(var(--secondary-title) / <alpha-value>)',
        primaryText: 'rgb(var(--primary-text) / <alpha-value>)',
        secondaryText: 'rgb(var(--secondary-text) / <alpha-value>)',
        lightGreen: 'rgb(var(--light-green) / <alpha-value>)',
        darkGreen: 'rgb(var(--dark-green) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
