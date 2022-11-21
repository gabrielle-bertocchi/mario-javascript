//work with list
let xCars = [600, 600, 600, 600, 600, 600]
let yCars = [14, 60, 115, 178, 225, 290]
let velocidadeCar = [3.6, 3.1, 3.0, 5, 3.4, 2.5]
let comprimentoCars = 90;
let alturaCars = 60;
// code Mario
//let xMario = (500);
//let yMario = (07);
//let velocidadeMario = 2.5;

//code Luigi
//let xLuigi = (400);
//let yLuigi = (115);
//let velocidadeLuigi = 2;

//code Toad
//let yToad = (230);
//let xToad = (400);
//let velocidadeToad = 3.2;


// functions
function mostraCars(){
  for (let i = 0; i < imagemCars.length; i += 1 ){//ou i++
    image(imagemCars[i], xCars[i], yCars [i], comprimentoCars, alturaCars);
    //image(mario[0], xCars[0], yCars [0], 100, 70);
    //image(luigi[1], xCars[1], yCars [1], 100, 70);
    //image(toad[2], xCars[2], yCars [2], 100, 70);
  }
}

function movimentaCars(){
  for (let i = 0; i < imagemCars.length; i += 1){
    xCars[i] -= velocidadeCar[i];
    //xCars[0] -= velocidadeCar[0];
    //xCars[1] -= velocidadeCar[1];
    //xCars[2] -= velocidadeCar[2];
  }
}

function backInicialCar(){
  for (let i = 0; i < imagemCars.length; i += 1){
    if (passtothescreen(xCars[i])){
      xCars[i] = 600;
    }
    //if (xCars[0] < -50){
      //xCars[0] = 600;
    //}
    //if (xCars[1] < -50){
      //xCars[1] = 600;
    //}
    //if (xCars[2] < -50){
      //xCars[2] = 600;
    //}
  }
}

function passtothescreen(xCars){
  return xCars < - 50;
}
