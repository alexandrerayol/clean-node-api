const { rules } = require('eslint-config-love');

module.exports = [
    {
      ...require('eslint-config-love'),
      files: [
        'src/**/*.js',
        'src/**/*.jsx',
        'src/**/*.ts',
        'src/**/*.tsx'
      ],
      rules: {
        ...rules,
        "@typescript-eslint/strict-boolean-expressions": "warn"
      }
    },
  ]