#!/usr/bin/env sh

set -e

# build
npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/gl-ruslan-honchar/WebSDK-docs.git master:gh-pages

rm dist/* -r

cd -
