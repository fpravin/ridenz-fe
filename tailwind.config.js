// Ensure that your tailwind.config.js uses module.exports correctly
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        'w-input':'300px'
      }
    },
  },
  plugins: [],
};