// Faça uma função que receba um único valor representando segundos.
// Essa função deverá convertê-lo para hora, minutos e segundos. Todas as
// variáveis devem ser passadas como parâmetro, não havendo variáveis
// globais.

let segundos = parseInt(prompt('Digite um número'))

function converteSegundos(segundos) {
    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos % 3600) / 60);
    let segundosRestantes = segundos % 60;
    return [horas, minutos, segundosRestantes];
  }

  let [horas, minutos, segundo] = converteSegundos(segundos);
console.log(horas, minutos, segundos);