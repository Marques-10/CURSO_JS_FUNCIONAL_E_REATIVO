// Closure é quando uma função "lembra"
// seu escopo léxico, mesmo quando a função
// é executada fore desse escopo léxico

const somarXMais3 = require('./closure_escopo')

const x = 1000
console.log(somarXMais3())