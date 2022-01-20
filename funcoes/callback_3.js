
const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2
console.log(nums.map(dobro))

const nomes = ['Ana', 'Mariana', 'Fernana', 'Geovana', 'Raissa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

// const getNome = e => e.nome
// console.log(carrinho.map(getNome))

// const getConsolidado = e => e.qtde * e.preco
// const totais = carrinho.map(getConsolidado)
// console.log(totais)

Array.prototype.map_c = function(fn) {
    
    new_array = []

    this.forEach((element, indice) => {

        new_array.push(fn(element, indice, this))

    })

    return new_array
}

const getNome = e => e.nome
console.log(carrinho.map_c(getNome))

const getConsolidado = e => e.qtde * e.preco
const totais = carrinho.map_c(getConsolidado)
console.log(totais)