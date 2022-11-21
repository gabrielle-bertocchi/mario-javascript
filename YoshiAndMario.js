//código chicken
let xYoshiAndMario = (64);
let yYoshiAndMario = (367);
let colisao = false
let meusPontos = 0;

function mostraYoshiAndMario(){
  image(YoshiAndMario, xYoshiAndMario, yYoshiAndMario, 60, 30);
}

function mostrarCogumelo(){
  image(cogumelo, 71, 9, 25, 15);
}

function movimentaYoshiAndMario(){
  if (keyIsDown(UP_ARROW)) {
    yYoshiAndMario -= 4;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()){
    yYoshiAndMario += 4;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCars.length; i += 1){
    colisao = collideRectCircle(xCars[i], yCars[i], comprimentoCars, alturaCars, xYoshiAndMario, yYoshiAndMario, 12)
    if (colisao){
    voltaChickenPosicaoInicial();
    somDaColisao.play();
      if (pontosMarioQueZero()){
      meusPontos -= 1;
      }
    }
  }
}

function voltaChickenPosicaoInicial(){
  yYoshiAndMario = 370;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 2, 391);
}

function MarcaPontos(){
  if (yYoshiAndMario < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaChickenPosicaoInicial();
  }
}

function pontosMarioQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yYoshiAndMario < 367;
}




