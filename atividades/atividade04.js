// Crie uma função que tenha um número como parâmetro, se o número for
// par retorne verdadeiro, se não, retorne falso.

let numero = parseInt(prompt('Digite um número: '))

function ehPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}