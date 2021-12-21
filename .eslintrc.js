module.exports = {
  plugins: ['@typescript-eslint'],

  env: {
    es2021: true,
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },

  rules: {
    // default params
    'no-param-reassign': 'error',
    // Rules override by the Babel plugin
    camelcase: 'off',
    quotes: 'off',
    'new-cap': 'off',
    'no-await-in-loop': 'off',
    'object-curly-spacing': 'off',
    'no-invalid-this': 'off',

        // Handled by TypeScript itself
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'no-useless-constructor': 'off',
        'no-shadow': 'off',
        'no-use-before-define': 'off',
        semi: 'off',
        quotes: 'off',
        indent: 'off',
        'brace-style': 'off',
        'require-await': 'off',
        'no-magic-numbers': 'off',
        'no-extra-parens': 'off',
        'no-empty-function': 'off',
        'func-call-spacing': 'off',
        '@shopify/no-fully-static-classes': 'off',
        'sort-class-members/sort-class-members': 'off',
        camelcase: 'off',
        'no-array-constructor': 'off',
        'no-dupe-args': 'off',
        'no-dupe-keys': 'off',
        'no-unreachable': 'off',
        'valid-typeof': 'off',
        'no-const-assign': 'off',
        'no-new-symbol': 'off',
        'no-this-before-super': 'off',
        'no-redeclare': 'off',

        // Does not support TS equivalent
        'import/no-unresolved': 'off',

        // Flag overloaded methods in TS
        'no-dupe-class-members': 'off',

        // Flag typedef files with multiple modules with export default
        'import/export': 'off',

        // Breaks @typescript-eslint/parser
        strict: 'off',
        '@shopify/prefer-early-return': 'off',
        'array-callback-return': 'off',
        'getter-return': 'off',

  }
};
