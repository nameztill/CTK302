let x = 0;
let myState = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  fill('purple');
  rect (100, 100, 100, 100);

  background('#09A5EB');
  fill('#FFFF00');
  ellipse(250,190,130,130);
  fill('#FFEA00');
  ellipse(250,190,100,100);
  fill('#FFDE00');
  ellipse(250,190,60,60);

  push();
  translate(x, 0);
  avatar();
  x += 2;
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

function mouseReleased(){
  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)){
    myState++ ;
    if (myState > 1) myState = 0;
  }
