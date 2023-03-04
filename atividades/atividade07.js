// Faça um contador regressivo(contagem regressiva), onde mostra dia,
// hora, minuto e segundos.

let dias = parseInt(prompt('informe os dias: '))
let horas = parseInt(prompt('informe as horas: '))
let minutos = parseInt(prompt('informe os minutos: '))
let segundos = parseInt(prompt('informe os segundos: '))



function contadorRegressivo(dia, hora, minuto, segundo) {
  let totalSegundos = dia * 86400 + hora * 3600 + minuto * 60 + segundo;
  
  function atualizaContador() {
    let dias = Math.floor(totalSegundos / 86400);
    let horas = Math.floor(totalSegundos / 3600) % 24;
    let minutos = Math.floor(totalSegundos / 60) % 60;
    let segundos = totalSegundos % 60;
    
    console.log(`${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`);
    
    totalSegundos--;
    
    if (totalSegundos < 0) {
      console.log("Contagem regressiva finalizada!");
      clearInterval(intervalo);
    }
  }
  
  let intervalo = setInterval(atualizaContador, 1000);
}