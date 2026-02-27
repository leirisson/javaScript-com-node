import promptSync from 'prompt-sync'
const prompt = promptSync()

const valorProduto = Number(prompt("Qual o valor do produto: "))
const frete = 15
let valorFinal = 0

// verifica se o valor do produto é maior que 100
valorProduto > 100 ? 
valorFinal = valorProduto - (valorProduto * 0.10) + frete : 
valorFinal = valorProduto + frete

console.log("=====================")
console.log("  Sistema de frete   ")
console.log("=====================")
console.log(`Valor do frete: ${valorFinal}-R$`)