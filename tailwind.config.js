/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx", "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'florisha-bold': ['FlorishaBold', 'sans-serif'],
        'qurova-bold': ['QurovaBold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}