#!/bin/sh

rm -rf ./dist/

if [ "$1" ]; then
  npm run build-cli -- ai.md --base "/$1/ai/" --out ./dist/ai/
  npm run build-cli -- slides.md --base "/$1/slides/" --out ./dist/slides/
  npm run build-cli -- headless-ui.md --base "/$1/headless-ui/" --out ./dist/slides/
else
  npm run build-cli -- ai.md --base /ai/ --out ./dist/ai/
  npm run build-cli -- slides.md --base /slides/ --out ./dist/slides/
  npm run build-cli -- headless-ui.md --base /headless-ui/ --out ./dist/slides/
fi
