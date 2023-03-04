// Crie uma função que receba como parâmetro a hora de início e a hora de
// término de um jogo, ambas subdivididas em dois valores distintos: horas e
// minutos. A função deverá retornar a duração expressa em minutos,
// considerando que o tempo máximo.

let minutosTotaisInicio = parseInt(prompt('Informe o início do jogo: '))
let minutosTotaisTermino = parseInt(prompt('Informe o final do jogo: '))

function calculaDuracao(horasInicio, minutosInicio, horasTermino, minutosTermino) {
  let minutosTotaisInicio = (horasInicio * 60) + minutosInicio;
  let minutosTotaisTermino = (horasTermino * 60) + minutosTermino;
  let duracao = minutosTotaisTermino - minutosTotaisInicio;
  if (duracao < 0) {
    duracao += 1440; 
  }
  return duracao;
}