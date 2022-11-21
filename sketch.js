function setup(){
  createCanvas(510, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraYoshiAndMario();
  mostraCars();
  movimentaCars();
  movimentaYoshiAndMario();
  backInicialCar ()
  verificaColisao();
  incluiPontos();
  MarcaPontos();
  mostrarCogumelo();
}



