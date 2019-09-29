const prettierConfig = require('./prettier.config');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  extends: ['prettier', 'prettier/@typescript-eslint', 'plugin:jest/recommended'],
  plugins: ['@typescript-eslint', 'markdown', 'json', 'prettier', 'jest'],
  env: {
    es6: true,
    node: true,
    browser: true
  },
  globals: {
    document: false,
    navigator: false,
    window: false
  },
  rules: {
    'no-console': 'error',
    'sort-imports': ['error', { memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'], ignoreCase: true }],
    quotes: 'off',

    'prettier/prettier': ['error', prettierConfig],

    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'generic', readonly: 'generic' }],
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': 'error',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/triple-slash-reference': ['error', { types: 'prefer-import' }],
    '@typescript-eslint/type-annotation-spacing': 'error',

    'jest/consistent-test-it': ['error', { fn: 'test' }],
    'jest/no-large-snapshots': ['error', { maxSize: 0 }],
    'jest/no-test-prefixes': 'error',
    'jest/valid-describe': 'error',
    'jest/valid-expect-in-promise': 'error'
  }
};
