let font1, font2;

function setup() {
  createCanvas(500, 500);
  font1 = loadFont("assets/pt.ttf");
  font2 = loadFont("assets/ri.ttf");

  textAlign(CENTER);
}

function draw() {
  background(100);

  textSize(50);
  textFont(font1);
  text("Hello", width/2, 100);

  textFont(font2);
  text("What's good?", width/2, 200);

}
