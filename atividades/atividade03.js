// Crie uma função que recebe um objeto com o número e porcentagem das
// propriedades como parâmetros e retorne a porcentagem fornecida do
// número.

let numero = parseInt(prompt('Digite um número: '))
let porcentagem = parseInt(prompt('Informe a porcentagem: '))

function calculaPorcentagem(objeto) {
  let numero = objeto.numero;
  let porcentagem = objeto.porcentagem;
  let resultado = (numero * porcentagem) / 100;
  return resultado;
}