'use strict'

/**
 * Prints logs that are prefixed with a JSON timestamp.
 * Accepts variadic arguments so you can pass multiple objects, strings, etc.
 * @param {...*} args
 * 
 * @example
 *
 *    log('Hello there!')
 *    log('General %s', 'Kenobi')
 */
module.exports = function barelog () {
  const args = Array.prototype.slice.call(arguments)

  if (typeof args[0] === 'string') {
    args[0] = `[${new Date().toJSON()}] ${args[0]}`
  } else {
    args.unshift(new Date().toJSON())
  }

  console.log.apply(console, args)
}
