const Api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const ApiKey = "68f81386fd795a495b46926237451f07";
const searchbox = document.querySelector(".search input") 
const btn = document.querySelector(".search button") 
let img = document.querySelector(".temp-photo img")

async function Weather(city){
                let res = await fetch(Api + city + `&appid=${ApiKey}`);
                if(res.status==404){
                    document.querySelector(".error").style.display = "block"
                    document.querySelector(".details").style.display = "none"
                }
                else{


                    let data = await res.json();
                    console.log(data)
    
                    document.querySelector(".city-name").innerHTML = data.name;
                    document.querySelector(".wind-ka").innerHTML = `${data.wind.speed}Km/h`;
                    document.querySelector("#temprature").innerHTML = Math.round(data.main.temp) + "C";
                    document.querySelector("#humadity-ka").innerHTML = data.main.humidity + "%";
    
                    
                    
                    if (data.weather[0].main == "clouds"){
                        img.src = "/images/clouds.png";
                    }
                    else if (data.weather[0].main == "clear"){
                        img.src = "/images/sun.png";
                    }
                    else if (data.weather[0].main == "Rain"){
                        img.src = "/images/rain.png";
                    }
                    else if (data.weather[0].main == "Drizzle"){
                        img.src = "/images/drizzle.png";
                    }
                    else if (data.weather[0].main == "Mist"){
                        img.src = "/images/haze.png";
                    }
                    else{
                        img.src = "/images/haze.png";
                    }
                    document.querySelector(".details").style.display = "block"

                    document.querySelector(".error").style.display = "none"
                }
                

                // if(data.name==undefined){
                //     alert("please Spell correct")
                // }
}   
btn.addEventListener("click", ()=>{
    
    Weather(searchbox.value);
})
