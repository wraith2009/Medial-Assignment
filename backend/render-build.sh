#!/usr/bin/env bash
# Update package lists and install Chromium
apt-get update && apt-get install -y chromium

# Export the Chromium path for Puppeteer
export PUPPETEER_EXECUTABLE_PATH=$(which chromium)

# Run npm install to install dependencies
npm install
