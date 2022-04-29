let screen = 0;
let x;
let y;
let speed = 1;
let score = 0;
let colorPicker;
let font1

function setup() {
	createCanvas(500, 500);
  textFont = loadFont("assets/Reg.otf");
  home = loadImage('assets/can.jpg');
  game = loadImage('assets/game.png');
  lose = loadImage('assets/Tro.png');
}
////
function draw() {
//
	if (screen == 0) {
		startScreen();
	} else if (screen == 1) {
		gameOn();
	} else if (screen == 2) {
		gameOver();
	}
}



function mousePressed() {
	if (screen == 0) {
		screen = 1
	}else	if (screen == 1) {
		if (mouseX > x && mouseX < x + 50 && mouseY > y && mouseY < y + 50) {
				if(colorPicker==0){
					screen = 2;
				}else{
					score += 1;
					speed += .05;
				}
		}
	} else if (screen == 2) {
		screen = 0
	}
}

function startScreen(){
		background (home);
		fill(255)
		textAlign(CENTER);
    textSize(25);
    text('WELCOME! SET THE HIGHEST SCORE!', width / 2, height / 2 - 30)

    textSize(15);
    text('Use your mouse to collect and eat the candies.', width / 2, height / 2 + 20);

  	text('But dont eat the red ones! They are super spicy!', width / 2, height / 2 + 40);

  	text('Click anywhere to start', width / 2, height / 2 + 100);

  	reset();
}

function gameOn(){

    x = random(0, width)
		y = random(0, height)
		frameRate(speed);
		background(game);

		fill(0)
		textAlign(LEFT)
		text("Your Score = " + score, 40, 40)
///////
		colorPicker = floor(random(3))
///////
		if (colorPicker == 0) {
			fill(243, 6, 6)
		} else if (colorPicker == 1) {
			fill(124, 43, 255)
		} else {
			fill(74, 238, 211)
		}
		rect(x, y, 40, 40);
}

function gameOver(){
		background(lose);
		textAlign(CENTER);
        textSize(25);
  		text('YOU LOSE', width / 2, height / 2 - 50)

        textSize(15);
        text('NO SPICY CANDY!!! YOU ARE GOING TO BE SICK NOW :/ ', width / 2, height / 2)
  	text("Your score = " + score, width / 2, height / 2 + 20)
		text('click to play again', width / 2, height / 2 + 40);

}

function reset(){
	  score=0;
  	speed=1;
}
