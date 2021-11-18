/*var temp = 0;
var json;

*/

let img;
function preload() {
  var url = 'https://api.seneye.com/v1/devices/53614/exps?user=aquaponics@pedarecc.sa.edu.au&pwd=AquaPonics2017Pedare'
  var weather = 'https://api.openweathermap.org/data/2.5/weather?q=Adelaide&appid=35dd88fc56724b80a4f03e2848193c1c'
  jsonW= loadJSON(weather);
  json = loadJSON(url);
}



function setup() {
  // put setup code here
  createCanvas(1400,760);
  tempW = json.temperature.avg;
  ph = json.ph.avg;
  ammonia = json.nh3.avg;
  ammonium = json.nh4.avg;
  oxygen = json.o2.avg;
  tempA = jsonW.main.temp-273
}


function draw() {
fill(0);
textSize(13)
text("Temperature of Adelaide is " + int(tempA) + " °C", 240, 380-(tempA*7));
var c = color(6*tempA, (2*(35-tempA)*(tempA-40/10)), 8.5*(35-tempA)-50);
fill(c)
noStroke();
rect(100, 420, 100,-((tempA*7)+41.5));
fill(30);
rect(500, 380, 700, 5);

textSize(20);
text("pH level", 1100, 400, 10);
rect(1100, 380, 30, -35*ph);
text(ph, 1095, (380-35*ph)-5)

text("Ammonia level", 505, 400, 10);
rect(530, 380, 30, -(10000*ammonia));
text(ammonia + "mg/L", 500, (380-10000*ammonia)-5)

text("Ammonium level", 780, 400, 10);
rect(800, 380, 30, -(ammonium));
text(ammonium + "ppm", 770, (380-ammonium)-5)

text("Oxygen level", 940, 400, 10);
rect(950, 380, 30, -(30*oxygen));
text(oxygen + "ppm", 930, (380-30*oxygen)-5)

text("Temperature", 620, 400, 10);
rect(650, 380, 30, -(7*tempW));
text(int(tempW) + "°C", 643, (380-7*tempW)-5)

}
