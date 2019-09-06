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
module.exports = genBarelogger(true)

/**
 * Prints logs that are not prefixed with a timestamp.
 * Accepts variadic arguments so you can pass multiple objects, strings, etc.
 * @param {...*} args
 *
 * @example
 *
 *    log('Hello there!')
 *    log('General %s', 'Kenobi')
 */
module.exports.withoutTimestamps = genBarelogger(false)

function genBarelogger(addTimestamps) {
  return function _barelogger() {
    const args = Array.prototype.slice.call(arguments)

    if (addTimestamps) {
      if (typeof args[0] === 'string') {
        args[0] = `[${new Date().toJSON()}] ${args[0]}`
      } else {
        args.unshift(`[${new Date().toJSON()}]`)
      }
    }

    console.log.apply(console, args)
  }
}
