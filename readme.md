# Website

All frontend code for the game. Driven by angular. This repo is forbidden to directly control the game. Everything that modifies the game need to go through the Gameserver API. The idea is that anyone should be able to write their own GUI for our game.

## Stack

 - Angular for the app
 - Gulp is used to minify and build all SCSS and JS code.

## Install

1. Run `npm install`.
2. Run `gulp`

## Developing

0. Use something like `http-server` to get an HTTP access point to the index.html file. (Run ` npm install http-server -g` and then open `localhost:8080` in your broswer). (You can't just open the index.html file because most AJAX calls will fail due to security reasons).

1. Run `gulp`, this will watch for JS and SCSS changes and then build these files.


### Git flow

We use [simple git flow](https://gist.github.com/jbenet/ee6c9ac48068889b0912).