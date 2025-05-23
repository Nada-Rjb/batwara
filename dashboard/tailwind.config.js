/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,tsx,vue,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  presets: [
    require('frappe-ui/src/utils/tailwind.config')
  ],
  ...
}

