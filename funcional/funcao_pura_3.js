// Uma função pura é uma função em que o valor
// de retorno é determinado APENAS por seus valores
// de entrada, sem efeitos colateriais observáveis

let qtdeDeExecucoes = 0

// Pura
function somar(a, b) {
    qtdeDeExecucoes++ // de entrada, sem efeitos colateriais observáveis
    return a + b
}

console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(qtdeDeExecucoes)