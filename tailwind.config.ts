// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        colors: {
          // Define your custom colors here
        },
      },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
      ],
  }