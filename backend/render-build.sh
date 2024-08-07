#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
# npm run build # uncomment if required

# Ensure Puppeteer cache directories are set correctly
PUPPETEER_CACHE_DIR=${PUPPETEER_CACHE_DIR:-/path/to/puppeteer-cache}
XDG_CACHE_HOME=${XDG_CACHE_HOME:-/path/to/xdg-cache}

if [[ ! -d $PUPPETEER_CACHE_DIR ]]; then
  echo "...Copying Puppeteer Cache from Build Cache"
  mkdir -p $PUPPETEER_CACHE_DIR
  cp -R $XDG_CACHE_HOME/puppeteer/ $PUPPETEER_CACHE_DIR
else
  echo "...Storing Puppeteer Cache in Build Cache"
  mkdir -p $XDG_CACHE_HOME/puppeteer
  cp -R $PUPPETEER_CACHE_DIR $XDG_CACHE_HOME/puppeteer
fi
