const CityInput = document.getElementById("input");
const btn = document.getElementById("search");
const Cityname = document.getElementById("cityname");

const main = document.getElementById("main");
const Temp = document.getElementById("Temp");

btn.addEventListener("click", Citytemp);

function Citytemp() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${CityInput.value}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial`
  )
    .then((response) => response.json())
    .then((json) => {
      let C = Math.ceil((json.main.temp - 32) * (5 / 9));
      main.innerText = json.weather[0].main;
      Temp.innerText = C + "° Celsius";
    });
  Cityname.innerHTML = CityInput.value;
}
