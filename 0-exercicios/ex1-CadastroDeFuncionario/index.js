// 📤 Regras de Negócio
// O sistema precisa:
// Remover espaços extras do nome
// Deixar o nome no formato correto
// 👉 João da Silva
// Converter salário para número
// Criar uma nova propriedade:
// salarioAnual → salario * 12
// Converter a dataAdmissao para objeto Date
// Criar uma propriedade:
// tempoEmpresaEmMeses → diferença entre hoje e dataAdmissao (em meses, aproximado)

// { saida
//   nome: "João da Silva",
//   salario: 3500.5,
//   salarioAnual: 42006,
//   dataAdmissao: Date,
//   tempoEmpresaEmMeses: 13
// }

function normalizeName(name) {
  const nome = name.trim().toLowerCase().replace(/\s+/g, ' ').split(' ')
  const tamanhoDoNome = nome.length - 1
  nome[0] = nome[0][0].toUpperCase() + nome[0].slice(1)
  nome[tamanhoDoNome] = nome[tamanhoDoNome][0].toUpperCase() + nome[tamanhoDoNome].slice(1)
  const nomeNormalizado = nome.join(' ')
  return nomeNormalizado
}

function calcularSalarioAnual(salario) {
  return Number(salario) * 12
}

function calcularmesesDoAno(data) {
  let mes = new Date(data).getMonth()
  let mesesDecorridos = 0

  if (mes + 1 < 12) {
    mesesDecorridos = ((mes + 1) - 12) * -1
  } else if (mes + 1 === 12) {
    mesesDecorridos = ((mes + 1) - 12) + 1
  }

  return mesesDecorridos
}
function calcularTempoDeTrabalho(dataAdminissao) {
  const messesDecorridosAdmissisao = calcularmesesDoAno(dataAdminissao)

  let Anoadmissao = new Date(dataAdminissao).getFullYear()
  let anoAtual = new Date().getFullYear()

  const mesesRestante = (calcularmesesDoAno(new Date()) - 12) * -1
  let totalDeMeses = messesDecorridosAdmissisao + mesesRestante

  const AnosEmMeses = (anoAtual - Anoadmissao) * 12
  const tempoTotalDeTrabalho = AnosEmMeses - totalDeMeses

  return tempoTotalDeTrabalho
}

const funcionario = {
  nome: "  joÃO da silva  ",
  salario: "3500.5",
  dataAdmissao: "2023-10-15"
}

const funcionarioTratado = {
  nome: normalizeName(funcionario.nome),
  salario: Number(funcionario.salario),
  salarioAnual: calcularSalarioAnual(funcionario.salario),
  dataAdmissao: new Date(funcionario.dataAdmissao),
  tempoEmpresaEmMeses: calcularTempoDeTrabalho(funcionario.dataAdmissao)

}

console.log(funcionarioTratado)
