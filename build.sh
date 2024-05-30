#!/bin/sh

rm -rf ./dist/

if [ "$1" ]; then
  npm run build-cli -- ai.md --base "/$1/ai/" --out ./dist/ai/
  npm run build-cli -- slides.md --base "/$1/slides/" --out ./dist/slides/
else
  npm run build-cli -- ai.md --base /ai/ --out ./dist/ai/
  npm run build-cli -- slides.md --base /slides/ --out ./dist/slides/
fi
