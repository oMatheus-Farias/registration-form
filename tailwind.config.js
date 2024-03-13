/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#150036",
        secondaryColor: "#100029",
        lightColor: "#EBEBEB",
        greenColor: "#00BE08",
        whiteColor: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
