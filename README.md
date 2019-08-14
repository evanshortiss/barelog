# barelog

[![NPM version](https://img.shields.io/npm/v/barelog.svg?style=flat)](https://www.npmjs.com/package/barelog)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg)](http://www.typescriptlang.org/)
[![npm downloads](https://img.shields.io/npm/dm/barelog.svg?style=flat)](https://www.npmjs.com/package/barelog)

* You want logs? I gotchu fam 👍
* Need timestamps? Of course you fucking do, you're a professional 🕐
* Don't have time to RTFM? Good, go get shit done 📚
* Want log levels? This isn't for you 👎

This logger is for when you're developing a simple script that needs
timestamped logs, but no other fancy stuff.

## Install

```
npm install barelog --save
```

## Usage & Output Example

This code...

```js
const log = require('barelog')

log('Staying busy. Getting 💩 done.')
log('You like printf format? %s got it 🎉', 'You')
```

...produces this output

```
[2019-08-14T01:47:45.896Z] Staying busy. Getting 💩 done.
[2019-08-14T01:47:43.221Z] You like printf format? You got it 🎉
```