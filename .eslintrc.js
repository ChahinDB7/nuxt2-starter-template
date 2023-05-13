module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    indent: [
      'error',
      2
    ],
    'no-lonely-if': 'warn',
    'no-empty': 'off',
    'no-unused-vars': 0,
    'dot-notation': 1,
    'vue/multi-word-component-names': 0,
    'lodash/prefer-lodash-method': ['off'],
    'import/no-unresolved': 'off',
    'lodash/prefer-noop': 'off',
    'no-param-reassign': 'off',
    'lodash/prefer-lodash-typecheck': 'off',
    'prefer-destructuring': 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'no-prototype-builtins': 'off',
    'vue/no-v-html': 'off',
    'import/no-cycle': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 20
      },
      multiline: {
        max: 20
      }
    }]
  },
  globals: {
    _: true,
    $: true,
    amp: true,
    renderMathInElement: true
  }
}
