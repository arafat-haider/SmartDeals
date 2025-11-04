/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#632EE3',
        secondary: '#9F62F2',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #632EE3 0%, #9F62F2 100%)',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#632EE3",
          "secondary": "#9F62F2",
          "base-100": "#ffffff",
          "neutral": "#000000",
        },
      },
    ],
  },
}
