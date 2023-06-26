module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    "**/tests/unit/**/*.spec.[jt]s?(x)",
    "**/src/**/*.spec.[jt]s?(x)",
  ],
  globals: {
    "@vue/vue3-jest": {
      experimentalCSSCompile: false,
    },
  },
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
};
