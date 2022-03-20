function gerarNumerosEntre(min, max, tempo) {
    
    if(min > max) [max, min] = [min, max]

    return new Promise(resolve => {

        setTimeout(function(){

            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        
        }, tempo)
        
    })

}

console.time('promise')

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
    ])
}

gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        // console.timeLog('promise')
        console.timeEnd('promise')
    })