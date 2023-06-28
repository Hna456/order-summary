/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        backgroundBlue: '#e0e8ff',
        buttonBlue: '#3829e0',
        paleBlue: '#f5f7ff',
        paraBlue: '#7280a7',
        headingBlue: '#1f2f56'
      },
      fontFamily: {
        'Red-Hat-Daisy': ['Red Hat Display', 'sans-serif']
      },
      height: {
        'xl': '620px'
      },
      width: {
        'xl': '350px',
        'xxl': '400px'
      },
      backgroundImage: {
        'desktop': "url('images/pattern-background-desktop.svg')"
      }
    },
  },
  plugins: [],
}

