module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        onyx: {
          900: '#050607',
          800: '#0d1014',
          accent: '#6EF9F5',
          highlight: '#8C7CFF'
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(110, 249, 245, 0.25)'
      }
    }
  },
  plugins: []
};
