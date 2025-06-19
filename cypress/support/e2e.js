// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Configure logging behavior
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
});

// Hide sensitive data in console logs
const sensitivePatterns = [
    /password=['"][^'"]+['"]/, // matches password="something"
    /username=['"][^'"]+['"]/, // matches username="something"
    /email=['"][^'"]+['"]/, // matches email="something"
];

Cypress.on('log:changed', (log) => {
    if (log.displayName === 'xhr' || log.displayName === 'fetch') {
        // Redact sensitive data from network requests
        if (log.url) {
            sensitivePatterns.forEach(pattern => {
                log.url = log.url.replace(pattern, '[REDACTED]');
            });
        }
    }
});