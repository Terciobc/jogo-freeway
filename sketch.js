function setup() {
  createCanvas(600, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraVaca();
  mostraCarro();
  movimentaCarro();
  movimentaVaca();
  voltaPontoDePartida()
  bateuNoCarro()
  incluiPontos()
  marcaPontos()
}







