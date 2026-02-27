
let nome = "   jOÃO da silVA   "
const resultado = nome
.trim() // remove espaços no início e fim
.toLocaleLowerCase() // tudo em minúsculo
.replace(/\s+/g, ' ')
.replace(/\b\w/g, letra => letra.toLocaleUpperCase())

// usando replace
const frase = "     uma    Frase     qualquer"
const resultado2 = frase.trim().replace(/\s+/g, " ")

// usando replace exemplo 2
// Com \b — capitaliza só a PRIMEIRA de cada palavra
console.log("leirisson souza".replace(/\b\w/g, letra => letra.toLocaleUpperCase()))

// Sem \b — capitaliza TODAS as letras
console.log("SEM O B => leirisson souza".replace(/\w/g, letra => letra.toLocaleUpperCase()))

console.log(resultado)
console.log(resultado2)