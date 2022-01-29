let cactus;
let obito;
let red;


function setup() {
  createCanvas(500, 500);

  cactus = loadImage("assets/cactus.jpeg");
  obito = loadImage("assets/obito.png");
  red = loadImage("assets/red.png");

}

function draw() {
  image(cactus, width/2, 100, 100, 100);
  image(obito, width/2, 200, 100, 100);
  image(red, width/2, 300, 100, 100);
}
