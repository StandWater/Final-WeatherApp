function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Sunday",
  ];
  let day = date.getDay();
  return `$(day) $(hours):$(minutes)`;
}

function displayTemp(response) {
  let tempElement = document.querySerlector("#temp");
  let cityElement = document.querySerlector("#city");
  let descriptionElement = document.querySerlector("#description");
  let humidityElement = document.querySerlector("#humidity");
  let windElement = document.querySerlector("#wind");
  let dateTimeElement = document.querySerlector("#dateTime");
  tempElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.main.wind.speed);
  dateTimeElement.innerHTML = "Friday 05:00";
}

let apiKey = "9bb8a8720baa1a749633906d229159a5";
let city = "New York";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric";

axios.get(apiUrl).then(displayTemp);
