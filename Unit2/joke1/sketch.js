let myState = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
  
  switch (myState){
    case 0:
    background('grey');
    fill('black');
    textSize(48);
    text("Why don't eggs tell jokes?", width/2, height/2, 400, 300);
    break;

    case 1:
    background('yellow');
    fill('black');
    textSize(48);
    text("Because they'd crack up", width/2, height/2, 400, 300);
    break;
  }
}

function mouseReleased(){
  myState++ ;
  if (myState > 1) myState = 0;
}
