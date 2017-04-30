#!/usr/bin/env node

const memanki = require('memanki');
const argv = require('minimist')(process.argv.slice(2));

const merge = (typeof argv['m'] !== 'undefined' || typeof argv['merge'] !== 'undefined') ? true : false;
if (typeof argv['id'] === 'undefined' && typeof argv['help'] === 'undefined') {
  console.log('No memrise id was given.')
  process.exit()
}
memanki.getAnkiDeck(argv['id'], merge)