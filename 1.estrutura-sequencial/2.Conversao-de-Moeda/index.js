import promptSync from 'prompt-sync'
const prompt = promptSync()

const taxaFixa = 5.20
const valorUsuario = Number(prompt("Qual valor deseja converter: "))
const valorConvertido = (valorUsuario / taxaFixa).toFixed(2)
console.log(`Sistema de conversão`)
console.log(`Valor em Real: ${valorUsuario}`)
console.log(`Valor em Dollar: ${valorConvertido} US`)
