let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temperature = 0;
let humidity = 0;
let description = 0;

function setup() {
  createCanvas(500, 500);

  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Mongolia,MGL&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US


 // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx

  let myIDString = "appid=2ab3fd961cc8c4aacb1786ddb79e8da5" ;

  let myTotalString = myCityString + myIDString;


  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;
  description = weather.weather[0].description;
}

function draw() {
  background('#E0CFDE');
  switch (state) {

    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      fill("black");
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("temperature is " + temperature, 20, 60);
      text("humidity is " + humidity, 20, 80);
      text(description, 20, 100);

      y = map(temperature, -10, 100, 5, height-10);
      rect(width-30, height-10, 10, -temperature);

      //sun
      noStroke();
      fill('#FFFF00');
      ellipse(250,190,110,110);
      fill('#FFEA00');
      ellipse(250,190,90,90);
      fill('#FFDE00');
      ellipse(250,190,50,50);

      // cloud
      push();
      translate(x, 0);
      fill("white");
      noStroke();

      push();
      translate(100, 50);
      ellipse(400, 100, 130, 30);
      ellipse(337, 112, 130, 10);
      pop();
      ellipse(318, 295, 130, 50);
      ellipse(390, 270, 130, 60);
      ellipse(381, 296, 130, 40);
      ellipse(50, 260, 200, 40);
      ellipse(23, 218, 130, 70);
      ellipse(121, 376, 200, 70);
      ellipse(209, 398, 130, 40);
      ellipse(141, 345, 60, 30);
      ellipse(262, 313, 80, 10);
      pop();
      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

      break;
  }
}
