fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=4aa936186a1456353c469230873fc023&units=metric`)
.then(function(data){
    return data.json()
})
.then(function(data){
    console.log("Data-->",data);
})
.catch(function(err){
    console.log("err-->",err);
    
})