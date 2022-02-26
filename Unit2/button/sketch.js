let myState = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {

  switch (myState){
    case 0:
    background('#7756FE');
    fill('black');
    textSize(48);
    text("Why don't eggs tell jokes?", width/2, height/2, 400, 300);
    break;

    case 1:
    background('#D1B6FE');
    fill('black');
    textSize(48);
    text("Because they'd crack up", width/2, height/2, 400, 300);
    break;
  }

  fill('purple');
  rect (100, 100, 100, 100);
}


function mouseReleased(){
  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)){
    myState++ ;
    if (myState > 1) myState = 0;
  }
}
