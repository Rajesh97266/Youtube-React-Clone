/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  colors: {
    'yt-black':"#0F0F0F",
    'yt-white':"#FFFFFF",
    'yt-red':"#FF0000",
    'yt-light-black':"#1F1F1F",
    'yt-grey':"#808080",
    'yt-light':'#181818',
    'yt-light-1':'#212121'
  },
    extend: {
      gridTemplateColumns: {
        yt:"repeat(auto-fit,minmax(250px,1fr))"
      }
    },
  },
  plugins: [],
};
