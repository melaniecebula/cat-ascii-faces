#!/usr/bin/env node

var cats = require('./');
var args = process.argv.splice(2);

if (args.length > 0) {
  //flag for all cats
  if (args[0] === '-a') {
    cats.cats.forEach( function (c) {
      process.stdout.write(c + '\n');
    });
  }
} else {
  //Defaults to random cat
  process.stdout.write(cats() + '\n');
}
