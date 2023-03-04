// Faça uma função que tenha dois valores como parâmetros e retorne
// verdadeiro se forem iguais e do mesmo tipo.

let valor1 = parseInt(prompt('Informe o primeiro valor: '))
let valor2 = parseInt(prompt('Informe o segundo valor: '))


function saoIguais(valor1, valor2) {
  if (valor1 === valor2) {
    return true;
  } else {
    return false;
  }
}