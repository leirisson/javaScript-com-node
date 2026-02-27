// import promptSync from 'prompt-sync'
// const prompt = promptSync()
const estoque = [10, 5, 0, 20, 8,0,0];
let qtdProdutosZerados = 0
let valorTotalEstoque = 0
let produtosAbaixoDe10 = 0


estoque.forEach(p => {
    if (p === 0)
        qtdProdutosZerados++
    else if (p < 10 || p > 0) {
        valorTotalEstoque += p
        if (p < 10) {
            produtosAbaixoDe10++
        }

    }

})

console.log(`Valor total dos produtos: ${valorTotalEstoque}`)
console.log(`Produtos que estão zerados no estoque: ${qtdProdutosZerados}`)
console.log(`Produtos com estoque menor que 10: ${produtosAbaixoDe10}`)
