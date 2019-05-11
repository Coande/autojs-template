module.exports = {
  env: {
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    toast: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {},
};
