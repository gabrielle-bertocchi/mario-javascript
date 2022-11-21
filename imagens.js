//code img
let imagemDaEstrada;
let YoshiAndMario;
let princessPeach;
let luigi;
let toad;
let cogumelo;

//code som
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("img/estrada.png");
  YoshiAndMario = loadImage("img/Yoshi and Mario.png");
  princessPeach = loadImage("img/princess peach.png");
  luigi = loadImage("img/luigi.png");
  toad = loadImage("img/toad.png");
  cogumelo = loadImage("img/Cogumelo.png");
  imagemCars = [princessPeach, luigi, toad, princessPeach, luigi, toad];
  somDaTrilha = loadSound("sounds/Super-Mario-Bros.mp3");
  somDaColisao = loadSound("sounds/colidiu.mp3");
  somDoPonto = loadSound("sounds/pontos.wav");
}