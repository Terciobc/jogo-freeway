// Posicao Inicial:
var yVaca = 366
var xVaca = 110
var colisao = false;
var meusPontos = 0;

function mostraVaca(){
  image(imagemDaVaca, xVaca, yVaca, 30, 30)
}

function movimentaVaca(evento){
  if(keyIsDown(UP_ARROW)){
    yVaca -= 3
  }
  if(keyIsDown(DOWN_ARROW)){
    if (yVaca > 366){
      yVaca = 366
    }
    yVaca += 3
  }
}

function bateuNoCarro(){
  for(var i = 0; i < imagensCarros.length; i++){
    
    colisao = collideRectCircle(xCarros[i], yCarros[i],50, 40,xVaca, yVaca, 15);
     if (colisao){
        somDaColisao.play()
        colidiu()
         
        
  }
    
 }

}
function colidiu(){
  yVaca = 370
  if(meusPontos > 0){
    perdeVida()
  }   
}

function incluiPontos(){
  textSize(25);
  fill(color(255,240,60))
  text(meusPontos, width/5, height = 27)
}

function marcaPontos(){
  if(yVaca <= 15){
    somDosPontos.play()
    yVaca = 366
   ganhaVida()
  }
}
function ganhaVida(){
  meusPontos ++
}
function perdeVida(){
  meusPontos --;
}

