const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

const getNome = item => item.nome
const qtdeMaiorQueZero = item => item.qtde > 1
// const qtdeMaiorIgualAZero = item => item.qtde >= 1
// const qtdeMuitoGrande = item => item.qtde > 1000

const nomesItensValidos = carrinho
    .filter(qtdeMaiorQueZero)
    .map(getNome)

console.log(nomesItensValidos)

Array.prototype.filter_c = function(fn) {
    
    new_array = []

    for(let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            new_array.push(this[i])
        }
    }
    // this.forEach((element, indice) => {
    //     if (fn(element, indice, this))
    //         new_array.push(element)
    // })

    return new_array
}

const nomesItensValidos2 = carrinho
    .filter_c(qtdeMaiorQueZero)
    .map(getNome)

console.log(nomesItensValidos2)