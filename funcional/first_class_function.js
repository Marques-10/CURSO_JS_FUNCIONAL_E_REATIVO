// Diz-se que uma linguagem de programação tem 
// funções de primeira classe se 
// as funções dessa linguagem forem tratadas como outras variáveis. 

const x = 3
const y = function(txt) {
    return `Esse é o texto ${txt}`
}

const z = () => console.log('Zzzzzzzz!')

console.log(x)
console.log(y('Olá!'))
z()