# Shopee Flash Sale Bot

This project is a bot that automates the process of purchasing items during Shopee flash sales using Puppeteer.

## Features

- Automatically navigates to the Shopee flash sale page.
- Selects the first item from the flash sale.
- Selects the first available variant (if any).
- Proceeds to checkout and places the order.

## Prerequisites

- Node.js
- Puppeteer

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/rizkyngrh23/shopee-flashsale-bot.git
   cd shopee-flashsale-bot
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. **Ensure you are logged into your Shopee account** in the browser instance that Puppeteer will connect to.

2. Start the browser with remote debugging enabled:
   ```sh
   google-chrome --remote-debugging-port=9222
   ```

3. Run the bot:
   ```sh
   node bot.js
   ```

## Configuration

- Update the `bot.js` file with your specific configurations, such as proxy settings and user agent.

## License

This project is licensed under the MIT License.