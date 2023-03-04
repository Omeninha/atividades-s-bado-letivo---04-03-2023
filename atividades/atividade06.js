// Crie uma função que tenha um número como parâmetro e depois
// arredonde o número para o segundo dígito após a vírgula e retorne o número
// arredondado

let numero = parseFloat(prompt('Digite um número'))

function arredonda(numero) {
  let numeroArredondado = Math.round(numero * 100) / 100;
  return numeroArredondado;
}