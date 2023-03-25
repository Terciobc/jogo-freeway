// Imagens do jogo:

var imagemDaEstrada;
var imagemDaVaca;
var imagemCarro;
var imagemCarro2;
var imagemCarro3;

// Criação de sons
var somDaTrilha;
var somDaColisao;
var somDosPontos;

function preload(){
  imagemDaEstrada = loadImage('imagens/estrada.png');
  imagemDaVaca = loadImage('imagens/ator-1.png');
  imagemCarro = loadImage('imagens/carro-1.png');
  imagemCarro2 = loadImage('imagens/carro-2.png');
  imagemCarro3 = loadImage('imagens/carro-3.png');
  imagensCarros = [imagemCarro,imagemCarro2, imagemCarro3,imagemCarro2,imagemCarro3,imagemCarro]
  
  somDaTrilha = loadSound('sons/trilha.mp3')
  somDaColisao = loadSound('sons/colidiu.mp3')
  somDosPontos = loadSound('sons/pontos.wav')
  
}