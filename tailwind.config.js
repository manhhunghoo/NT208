/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#root",
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(2.88deg, rgba(38, 135, 246, 0.5) 1.08%, rgba(177, 207, 242, 0.5) 100.93%)',
      }
    }
  },
  plugins: [require('@tailwindcss/forms'),],
  variants: {
    extend: {
      display: ["focus-group"],

    }
  }
}