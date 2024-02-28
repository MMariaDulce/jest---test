const { ConversorDeBitcoin } = require('./index')

'test'('Converte Bitcoin para Real ', () => {
  'expect'(ConversorDeBitcoin(1)).toBe(30231000)
})