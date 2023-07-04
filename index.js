let city = document.querySelector(".city");
let weather = document.querySelector("#weather");
let humidity = document.querySelector("#humidity");
let pressure = document.querySelector("#pressure");
let windDegree= document.querySelector("#wind-Degree"); 
let userInput = document.querySelector("#userInput");
let cityName = userInput.value.trim();
let text = document.querySelector('#text')





userInput.addEventListener( 'change' ,() =>{
    cityName = userInput.value
    console.log(cityName);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=70bb85d9e9c681b9ebe430cf93979533&units=metric`
    
    function getClimate () {
        fetch (url) 
        .then(response => {
            return response.json()
        }).then(data =>{
            console.log(data);
            text.innerHTML = `${data.name}<sup style='background: red;'>${data.sys.country}</sup>`
            weather.innerHTML = `${data.main.temp}<sup>°C</sup>`
            pressure.textContent = data.main.pressure
            humidity.textContent = data.main.humidity
            windDegree.textContent = data.wind.deg
        })
    }
    
    getClimate();
})
