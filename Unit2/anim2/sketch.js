let x = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  push();
  translate(x, 0);
  avatar();
  x += 5:
  if (x > width) {
    x = -400;

  pop();
  }
}

function avatar() {

fill('#FFFF00');
ellipse(200,190,130,130);
fill('#FFEA00');
ellipse(200,190,100,100);
fill('#FFDE00');
ellipse(200,190,60,60);
}
