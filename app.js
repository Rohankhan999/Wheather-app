let city = document.querySelector('#city')
let card = document.querySelector('.card')
let Right = document.querySelector('.right')
let left = document.querySelector('.left')
const toggleBtn = document.getElementById('toggleBtn');
const navMenu = document.getElementById('navMenu');


toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});
function getWeather(){
fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=392fc470c1ac8b42b2f40951a9a96cc4&units=metric`)
.then(function(data){
    return data.json()
})
.then(function(data){
    console.log("Data-->",data);
    console.log(data.main.temp);
    
    left.innerHTML = `
    <h2>Weather Forecast</h2>
    <h2 class="temp">${Math.round(data.main.temp)}°C  ${data.weather[0].main}</h2>
    <h3>Feels like ${Math.round(data.main.feels_like)}°C</h3>
    <h3>Humidity ${Math.round(data.main.humidity)}%</h3>
    <h3>Wind Speed ${(data.wind.speed)} m/s</h3>`;
    Right.innerHTML=`<h2 id="cite">${data.name}</h2>`
      if (data.weather[0].main === "Clear") {
        Right.innerHTML += `<img id="right" src="https://cdn-icons-png.freepik.com/256/1249/1249115.png" alt="Sunny" width="150px" height="150px"  margin-top="150px">`;
      } else if (data.weather[0].main === "Rain") {
        Right.innerHTML += `<img id="right" src="https://cdn-icons-png.freepik.com/256/9116/9116642.png?ga=GA1.1.1507680453.1719128961&semt=ais_hybrid" alt="Rain"width="150px" height="150px" margin-top="150px">`;
      } else if (data.weather[0].main === "Clouds") {
        Right.innerHTML += `<img id="right" src="https://cdn-icons-png.freepik.com/256/14855/14855054.png?ga=GA1.1.1507680453.1719128961&semt=ais_hybrid alt="Clouds" width="150px" height="150px"  margin-top="150px">`;
      }else if (data.weather[0].main === "Smoke") {
        Right.innerHTML += `<img id="right" src="https://cdn-icons-png.freepik.com/256/4380/4380458.png?ga=GA1.1.1507680453.1719128961&semt=ais_hybrid" alt="Clouds" width="150px" height="150px"  margin-top="150px">`;
      } else {
        Right.innerHTML += `<img id="right" src="https://cdn-icons-png.freepik.com/256/3026/3026315.png?ga=GA1.1.1507680453.1719128961&semt=ais_hybrid" alt="Default Weather" width="150px" height="150px"  margin-top="150px">`;
      }
})
.catch(function(err){
    console.log("err-->",err);
})
  city.value= ""
}
getWeather()
