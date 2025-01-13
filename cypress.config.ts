import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      if (config.env.name === 'mobile') {
        config.viewportWidth = 1792; // iPhone 11
        config.viewportHeight = 828;
      } else if (config.env.name === 'laptop') {
        config.viewportWidth = 1980; //fullHD
        config.viewportHeight = 1024;
      }
      return config;
    },
  },
});
