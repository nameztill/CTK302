let x = 0;
let myState = 0;
let state = 0;
let song1, song2;

function preload() {
  song1 = loadSound("assets/effect.mp3");
  song2 = loadSound("assets/90210.mp3");
}

function setup() {
  createCanvas(500, 500);
  // song1.loop();
  // song1.pause();
  // song2.loop();
  // song2.pause();
  noStroke();

}

function draw() {
  switch (state) {

    case 0:
      song1.play();
      state = 1;
      break;


    case 1:

      fill('purple');
      rect(100, 100, 100, 100);

      background('#09A5EB');
      fill('#FFFF00');
      ellipse(250, 190, 130, 130);
      fill('#FFEA00');
      ellipse(250, 190, 100, 100);
      fill('#FFDE00');
      ellipse(250, 190, 60, 60);

      push();
      translate(x, 0);
      avatar();
      x += 2;
      if (x > width) {
        x = -400;

        pop();
      }
      break;

    case 2:
      song2.play();
      state = 3;
      break;

    case 3:
      fill('white');
      background("#020A33")
      ellipse(250, 190, 130, 130);

      //stars
      fill('white');
      ellipse(321,301,5,5);
      ellipse(100,290,5,5);
      ellipse(186,65,5,5);
      ellipse(250,422,5,5);
      ellipse(102,217,5,5);
      ellipse(72,112,5,5);
      ellipse(207,362,5,5);
      ellipse(346,188,5,5);
      ellipse(361,260,5,5);
      ellipse(251,74,5,5);
      ellipse(275,32,5,5);
      ellipse(355,49,5,5);
      ellipse(357,113,5,5);
      ellipse(62,347,5,5);
      ellipse(291,361,5,5);
      ellipse(169,308,5,5);
      ellipse(137,356,5,5);
      ellipse(253,299,5,5);
      ellipse(102,40,5,5);
      ellipse(198,462,5,5);
      ellipse(439,441,5,5);
      ellipse(336,424,5,5);
      ellipse(449,294,5,5);
      ellipse(297,459,5,5);
      ellipse(370,351,5,5);
      ellipse(399,392,5,5);
      ellipse(426,219,5,5);
      ellipse(449,294,5,5);
      ellipse(380,461,5,5);
      ellipse(426,149,5,5);
      ellipse(122,422,5,5);
      ellipse(38,403,5,5);
      ellipse(73,471,5,5);
      ellipse(34,48,5,5);
      ellipse(416,73,5,5);
      ellipse(484,50,5,5);
      ellipse(403,310,5,5);
      ellipse(463,367,5,5);
      ellipse(34,269,5,5);
      ellipse(41,179,5,5);
      ellipse(137,145,5,5);
      ellipse(486,183,5,5);
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 3) state = 0;
  song1.pause();
  song2.pause();
}

function avatar() {

  fill('white');
  ellipse(400, 100, 130, 30);
  ellipse(337, 112, 130, 10);
  ellipse(318, 295, 130, 50);
  ellipse(390, 270, 130, 60);
  ellipse(381, 296, 130, 40);
  ellipse(75, 50, 150, 18);
  ellipse(15, 60, 130, 30);
  ellipse(50, 260, 200, 40);
  ellipse(23, 218, 130, 70);
  ellipse(121, 376, 200, 70);
  ellipse(209, 398, 130, 40);
  ellipse(141, 345, 60, 30);
  ellipse(262, 313, 80, 10);
  ellipse(8, 40, 90, 20);
}

function touchStarted() {
  getAudioContext().resume();
}
