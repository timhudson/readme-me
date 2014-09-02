#!/usr/bin/env node

var fs = require('fs')
var xtend = require('xtend')

var cwd = process.cwd()

if (!fs.existsSync(cwd + '/package.json'))
  return console.log('We at least need a package.json. Try `npm init` first.')

var pkg = require(cwd + '/package.json')

var data = xtend(pkg, {
  example: fs.existsSync(cwd + '/example.js') && fs.readFileSync(cwd + '/example.js').toString(),
  travis: fs.existsSync(cwd + '/.travis.yml')
})

var readme = require('./')(data)

fs.writeFileSync(cwd + '/README.md', readme)
