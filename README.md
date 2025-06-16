# test-playwright
# Playwright JavaScript Testing

This project uses [Playwright](https://playwright.dev/) to write and run end-to-end tests in JavaScript across multiple browsers.

## Installation

1. **Clone the repository**
      git clone "repo link"
      cd repo

2. **Install dependencies:**
     npm install

3. **Install Playwright browsers:**
     npx playwright install

3. **Running Tests**
     Headless mode (default)
     npx playwright test

     Headed mode (browser UI visible):
     npx playwright test --headed

     UI mode with Playwright:
     npx playwright test --ui