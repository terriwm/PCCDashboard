WaterData = [];
var tempWater;
var ph;
var ammonia;
var ammonium;
var oxygen;
var lux;
var data;
var json;
var data2;
var api_key = '326dae527a1d0f9c41e308c85755c9d4';
var outTemp;


async function preload(){
  var url = 'https://api.seneye.com/v1/devices/53614/exps?user=aquaponics@pedarecc.sa.edu.au&pwd=AquaPonics2017Pedare';
  var openWeather = 'https://api.openweathermap.org/data/2.5/weather?q=Adelaide&appid=326dae527a1d0f9c41e308c85755c9d4';
  const json = await fetch(url);
  var data = await json.json();
  const json2 = await fetch(openWeather);
  var data2 = await json2.json();

  tempWater = data.temperature.avg;
  ph = data.ph.avg;
  ammonia = data.nh3.avg;
  ammonium = data.nh4.avg;
  oxygen = data.o2.avg;
  lux = data.o2.avg;
  outTemp = data2.main.temp;
  outTemp = outTemp - 273.15;
  tempWater = Math.round(tempWater * 10) / 10;
  outTemp = Math.round((outTemp + Number.EPSILON) * 10) / 10;

  WaterData.push(tempWater);//degree
  WaterData.push(ph);
  WaterData.push(ammonia);//mg per liter
  WaterData.push(ammonium);//PPM
  WaterData.push(oxygen);//PPM
  WaterData.push(lux);//Lx
  WaterData.push(outTemp);

  for (var i = 0; i < 7; i++){
    document.getElementById(i).innerHTML = WaterData[i];
  }
  for (var i = 0; i < 7; i++) {
    WaterData.shift(); 
  }
}

preload();
setInterval(preload, 900000);

