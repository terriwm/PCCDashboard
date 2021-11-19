var temp = 0;
var json;
var positioning;
var apiKey;
var city;
var apiUrl;
var outsideTemp;
var counter = 0;
var temp;
var i = 0;
var weatherData;
var TempAdaptivecolour;

function preload(){
  getApi();
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  temp = (json.temperature.curr) * 12;
  ph = (json.ph.avg) * 30;
  nh3 = (json.nh3.avg) * 8000;
  nh4 = (json.nh4.curr) * 3;
  o2 = (json.o2.curr)*15;
  outsideTemp = Math.floor(weatherData.main.temp);
  outsideTemp = (outsideTemp - 273)* 8;
}

function draw() {
  var date = new Date();
  var n = date.toDateString();
  var time = date.toLocaleTimeString();  
  background(255);
  textFont("oswald");
  textStyle("bold");
  yeet('#2962ff',225,250,temp,20,"°C","Water Temperature", 80, 20, 12);
  yeet('#ff6d00',600, 400, ph ,20,"","pH", 13, 10, 30);
  yeet('#76ff03', 300, 550,nh3, 10,"PPM","NH3",8,18, 8000);
  yeet('#ffff00',1200, 350, nh4,20,"PPM","NH4",14, 30, 3);
  yeet('#e040fb', 900, 575, o2, 20, "PPM","O2", 14,18,15);
  yeet("#dd2c00", 800,200,outsideTemp, 20,"°C","Adelaide", 20*1.7 ,20,8);
  text("Aquaponics Statistics", windowWidth/2-150, 20);
  textFont("oswald");
  textStyle("bold"); 
  text(n+" "+time , 1250,20);
  
} 

  function yeet(colour,circleX, circleY, data,size, measurement, underCircleText,factor,factor2,dividedBy){
  fill(colour);
  circle(circleX, circleY, data);
  fill(0);
  noStroke();
  textSize(size);
  text(data/dividedBy + measurement,circleX - factor2,circleY + size/2);
  text(underCircleText, circleX - factor, circleY + data/2 + 20);
}

function getApi() {
  var url = "https://api.seneye.com/v1/devices/53614/exps?user=aquaponics@pedarecc.sa.edu.au&pwd=AquaPonics2017Pedare";
  json = loadJSON(url);
  var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=Adelaide&appid=5b7874629394de87b6ebab7fdc47cdd2";
  weatherData = loadJSON(apiUrl);
  setTimeout(() => {getApi()}, 300000);
  console.log("updated");
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
