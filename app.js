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
    
    card.innerHTML = `<h1>WEATHER FORECAST <br> <span>${data.name}</span> </h1>
    
    <h2 class = "temp">Temp ${Math.round(data.main.temp)}°c  ${data.weather[0].main}</h2>
    <h3> feels like ${Math.round(data.main.feels_like)}°c</h3>
      <h3> Humidity ${Math.round(data.main.humidity)}°c</h3>
      <h3> Wind Speed ${(data.wind.speed)}°c</h3>`

    
})
.catch(function(err){
    console.log("err-->",err);
})
  city.value= ""
}
getWeather()