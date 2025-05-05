const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 2,
  e2e: {
    baseUrl: "https://automationteststore.com",
    supportFile: "index.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

});
