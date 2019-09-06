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
declare function barelog(...args: any[]): void

declare namespace barelog {
  type logger = (...args: any[]) => void

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
  function withoutTimestamps(...args: any[]): void
}

export = barelog
