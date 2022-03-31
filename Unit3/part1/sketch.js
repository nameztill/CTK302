let cars = [];

function setup() {
  createCanvas(500, 500);

  // for (let i = 0; i < 20; i++){
  //   cars.push(new Car()) ;
  // }
  noStroke();
}

//   // Spawn objects
//   for (let i = 0 ; i < 40 ; i++){
//     cars.push(new Car()) ;
//   }
//
//   frogPos = createVector(width/2, height-100) ;
//
// }
function draw() {
  background('#E0CFDE');
  cars.push(new Car()) ;



  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice(i, 1);
    }
  }
}

  //   for (let i = 0 ; i < cars.length ; i++){
  //     cars[i].display() ;
  //     cars[i].move() ;
  //   }
  //
  //   fill('green');
  // ellipse(frogPos.x, frogPos.y, 50, 50) ;

class Car {

  constructor() {
    this.pos = createVector(width/2 , height-80); // initialize your attributes here
    this.vel = createVector(random(-.8, .8), random(-10, -5));
    this.r = 177;
    this.g = 122;
    this.b = 252;
    this.a = random(200, 255);

    // this.v = createVector(0, random(-6));
    // this.o = random(100);
    // this.size = random(48, 128) ;
  }

  // methods

  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, 20);
    // rect(this.pos.x, this.pos.y, 75, 25);
    // ellipse(this.pos.x+70, this.pos.y + 40, 30, 30);

    // textSize(this.size) ;
    // text("bruh", this.pos.x, this.pos.y) ;
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5 ;
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > height) this.pos.y = 0;
    // if (this.pos.y < 0) this.pos.y = height;
  }
}
