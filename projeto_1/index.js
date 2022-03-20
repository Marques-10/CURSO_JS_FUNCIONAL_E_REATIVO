const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const arquivos = fn.letDiretorio(caminho)
console.log(arquivos)