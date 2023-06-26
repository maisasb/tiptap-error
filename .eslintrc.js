module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: ["plugin:vue/vue3-recommended", "eslint:recommended"],
  rules: {},
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};
