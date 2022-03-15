const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true }
]

// filter, map, reduce


// 1. fragil: true
const f1 = e => e.fragil
const r1 = carrinho.filter(f1)
console.log(r1)

// 2. qtde * preco -> total
const f2 = e => e.qtde * e.preco
const r2 = r1.map(f2)
console.log(r2)

// 3. medias totais
const f3 = (acc, e) => {
    // console.log(acc, e)
    return acc + e
    
}

const r3 = r2.reduce(f3)

const minhaMedia = r3 / r2.length
console.log(minhaMedia)

// Resposta professor
const fragil = item => item.fragil
const getTotal = item => item.qtde * item.preco
const getMedia = (acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el
    console.log(acc, el)
    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    }
}

const mediaInicial = { qtde: 0, total: 0, media: 0 }

const media = carrinho
    .filter(fragil)
    .map(getTotal)
    .reduce(getMedia, mediaInicial)
    .media

console.log(`A média é ${media}`)