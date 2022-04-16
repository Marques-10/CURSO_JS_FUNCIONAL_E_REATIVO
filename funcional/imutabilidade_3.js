const pessoa = Object.freeze({
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo',
    end: Object.freeze({
        rua: 'Feliz!'
    })
})
// Atribuição por referência
const outraPessoa = pessoa

// Passagem por referência
function alterarPessoa(pessoa) {
    const novaPessoa = { ... pessoa }
    novaPessoa.nome = 'João'
    novaPessoa.cidade = 'Fortaleza'
    novaPessoa.end.rua = 'ABC'
    return novaPessoa
}

const novaPessoa = alterarPessoa(pessoa)
console.log(pessoa)
console.log(novaPessoa)

let a = 3
let b = a // Atribuição por valor (copia!)

a++
b--
console.log(a, b)