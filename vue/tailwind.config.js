/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,vue}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {}
  },
  // eslint-disable-next-line no-undef
  plugins: [require('flowbite/plugin')]
}
