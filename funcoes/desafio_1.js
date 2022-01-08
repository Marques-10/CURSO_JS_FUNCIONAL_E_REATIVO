// somar(3)(4)(5)

function somar(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

const somarAB = somar(3)(4)
console.log(somarAB(13))
console.log(somar(13)(20)(50))

// calcular

// const calcular = function(a, b, operation) {
//     return operation(a, b)
// }

function calcular(x) {
    return function(y) {
        return function(fn) {
            return fn(x, y)
        }
    }
}

const subtrair = function(a, b) {
    return a - b
}

const multiplicar = function(a, b) {
    return a * b
}

let r1 = calcular(10)(5)(subtrair)
console.log(r1)

let r2 = calcular(10)(5)(multiplicar)
console.log(r2)