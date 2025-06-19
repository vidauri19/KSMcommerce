const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 2,
  e2e: {
    baseUrl: "https://automationteststore.com",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    // List of keys to redact from logs
    sensitiveKeys: ['password', 'userName', 'email']
  }
});
