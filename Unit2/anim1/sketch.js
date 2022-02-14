let x = 0;

function setup() {
  createCanvas(500, 500);
  font1 = loadFont("assets/pt.ttf");
  rectMode(CENTER);
}

function draw() {
  background("#960505");
  fill('white');

  textSize(30);
  textFont (font1);
  text("Өдрийн мэнд, ажилаа сайн хийгээрэй ээж хайртай шүү <3", x, width/2);
  x += -2.3;
  if (x < -750) {
    x = width + 50;
  }
}
