let x = 0;

function setup() {
  background
  createCanvas(800, 800);
}

function draw() {
  background(220);
  fill('#FFFF00');
  ellipse(400,190,130,130);
  fill('#FFEA00');
  ellipse(400,190,100,100);
  fill('#FFDE00');
  ellipse(400,190,60,60);

  push();
  translate(x, 0);
  avatar();
  x += 3;
  if (x > width) {
    x = -400;

  pop();
  }
}

function avatar() {

fill('white');
 ellipse(400,100,130,30);
 ellipse(337,112,130,10);
 ellipse(318,295,130,50);
 ellipse(390,270,130,60);
 ellipse(381,296,130,40);
 ellipse(75,50,150,18);
 ellipse(15,60,130,30);
 ellipse(50,260,200,40);
 ellipse(23,218,130,70);
 ellipse(121,376,200,70);
 ellipse(209,398,130,40);
 ellipse(141,345,60,30);
 ellipse(262,313,80,10);
 ellipse(8,40,90,20);
}
