/* eslint-disable no-unused-vars */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  /*   video: false,
    chromeWebSecurity: false,
    modifyObstructiveCode: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    env: {
      CI: 'true'
    }, */
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
