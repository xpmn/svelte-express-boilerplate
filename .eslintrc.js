module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true
  },
  plugins: [],
  overrides: [],
  extends: 'eslint:recommended',
  rules: {
    indent: ['error', 2, { 'SwitchCase': 1 }],
    'linebreak-style': ['error', 'unix'],
    'no-console': 0,
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-multiple-empty-lines': ["error", { "max": 2, "maxEOF": 1 }]
  }
};
