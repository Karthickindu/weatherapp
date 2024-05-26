const apikey="28cd5cca55da4a9b25d8274d59ea57ce";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchbox=document.querySelector(".search input");
    const searchbtn=document.querySelector(".search button");
    
            

    async function checkweather(city){
        const response=await fetch(apiurl + city + `&appid=${apikey}`);
                
        console.log(data);
        if(response.status==404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }else{

            var data=await response.json();
    
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
            document.querySelector(".wind").innerHTML=data.wind.speed + "km/hr";


                document.querySelector(".weather").style.display="block";
                document.querySelector(".error").style.display="none";
            }
            }

            searchbtn.addEventListener("click", ()=>{
                checkweather(searchbox.value);
            })