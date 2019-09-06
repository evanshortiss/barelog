import * as barelog from '../../barelog'

const logWithoutTs = barelog.withoutTimestamps

logWithoutTs('Hello there!')
barelog('General %s', 'Kenobi')
