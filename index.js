const rules = require('./rules');

module.exports = {
  'root': true,

  'env': {
    'browser': true,
    'node': true
  },

  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
  ].map(require.resolve),

  'parserOptions': {
    ecmaVersion: 2017,
    sourceType: 'module',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true
    }
  },

  rules: rules
};