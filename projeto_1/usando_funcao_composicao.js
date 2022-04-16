const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')'
]

// resolução do professor

fn.composicao(
    fn.letDiretorio,
    fn.elementosTerminadosCom('.srt'),
    fn.lerArquivos,
    fn.mesclarElementos,
    fn.separarTextoPor('\n'),
    fn.removerElementosSeVazio,
    fn.removerElementosSeIncluir('-->'),
    fn.removerElementosSeApenasNumeros,
    fn.removerSimbolos(simbolos),
    fn.mesclarElementos,
    fn.separarTextoPor(' '),
    fn.removerElementosSeVazio,
    fn.removerElementosSeApenasNumeros,
    fn.agruparElementos,
    fn.ordenarPorAtribNumerico('qtde', 'desc'),
    console.log
)(caminho)

// minha resolução
const comp = fn.composicao(
    fn.letDiretorio,
    fn.elementosTerminadosCom('.srt'),
    fn.lerArquivos,
    fn.mesclarElementos,
    fn.separarTextoPor('\n'),
    fn.removerElementosSeVazio,
    fn.removerElementosSeIncluir('-->'),
    fn.removerElementosSeApenasNumeros,
    fn.removerSimbolos(simbolos),
    fn.mesclarElementos,
    fn.separarTextoPor(' '),
    fn.removerElementosSeVazio,
    fn.removerElementosSeApenasNumeros,
    fn.agruparElementos,
    fn.ordenarPorAtribNumerico('qtde', 'desc')
)

comp(caminho)
    .then(console.log)