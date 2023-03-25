var yCarros = [40, 100, 150, 210, 263, 320]
var xCarros = [600, 600, 600, 600, 600, 600]
var velocidadeCarros = [2, 2.5, 3.2, 5, 3.4, 2,5]

function mostraCarro(){
  for(var i = 0; i < imagensCarros.length; i++){
    image(imagensCarros[i], xCarros[i], yCarros[i], 50, 40)}
}

function movimentaCarro(){
  for(var i = 0; i< velocidadeCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i]
  }
}
function movimentaCarro2(){
  for(var i = 3; i< velocidadeCarros.length;i++){
    xCarros[i] = 0
    xCarros[i] += velocidadeCarros[i]
  }
}
function voltaPontoDePartida(){
  for(var i = 0; i < xCarros.length; i++){
    if(xCarros[i] < -50){
        xCarros[i] = 600}
  }
}
  