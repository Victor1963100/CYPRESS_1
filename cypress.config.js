/* eslint-disable indent */
module.exports = {
  retries: 0,
  viewportWidth: 1366, 
  viewportHeight: 768,
  e2e: {
      // We've imported your old cypress plugins here.
      // You may want to clean this up later by importing these.
      setupNodeEvents(on, config) {
          // implement node event listeners here
      },
      baseUrl: 'http://localhost:3000',
  },
};