module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ffffff",
          "secondary": "#7E0FE1",
          "accent": "#B5B8B9",
          "neutral": "#3E2640",
          "base-100": "#0C1017",
          "info": "#77A4F3",
          "success": "#008140",
          "warning": "#F7C600",
          "error": "#F70000",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}