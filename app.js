let city = document.querySelector('#city')
let card = document.querySelector('.card')
function getWeather(){
fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=392fc470c1ac8b42b2f40951a9a96cc4&units=metric`)
.then(function(data){
    return data.json()
})
.then(function(data){
    console.log("Data-->",data);
    console.log(data.main.temp);
    
    card.innerHTML = `
  <h1>WEATHER FORECAST <br> <span>${data.name}</span> </h1>
    <h2 class = "temp">Temp ${Math.round(data.main.temp)}°c  ${data.weather[0].main}</h2>
    <h3> feels like ${Math.round(data.main.feels_like)}°c</h3>
      <h3> Humidity ${Math.round(data.main.humidity)}°c</h3>
      <h3> Wind Speed ${(data.wind.speed)}°c</h3>`
      if (data.weather[0].main === "Clear") {
        card.innerHTML += `<img id="right" src="https://cdn-icons-png.freepik.com/256/1249/1249115.png" alt="Sunny" width="60px" height="60px">`;
      } else if (data.weather[0].main === "Rain") {
        card.innerHTML += `<img id="right" src="https://cdn-icons-png.freepik.com/256/9116/9116642.png?ga=GA1.1.1507680453.1719128961&semt=ais_hybrid" alt="Rain" width="60px" height="60px">`;
      } else if (data.weather[0].main === "Clouds") {
        card.innerHTML += `<img id="right" src="https://cdn-icons-png.freepik.com/256/14855/14855054.png?ga=GA1.1.1507680453.1719128961&semt=ais_hybrid alt="Clouds" width="60px" height="60px">`;
      } else {
        card.innerHTML += `<img id="right" src="https://cdn-icons-png.freepik.com/256/3026/3026315.png?ga=GA1.1.1507680453.1719128961&semt=ais_hybrid" alt="Default Weather" width="60px" height="60px">`;
      }
})
.catch(function(err){
    console.log("err-->",err);
})
  city.value= ""
}
getWeather()