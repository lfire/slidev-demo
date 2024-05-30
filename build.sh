#!/bin/sh

npm run build-cli -- ai.md --base /ai/ --out ./dist/ai/
npm run build-cli -- slides.md --base /slides/ --out ./dist/slides/
