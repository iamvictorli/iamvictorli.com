import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  astro: true,
  markdown: true,
}, {
  rules: {
    'perfectionist/sort-imports': ['error', {
      internalPattern: ['~/**'],
    }],
  },
})
