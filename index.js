const date=new Date();
//boxone
const Daynum=date.getDate();
document.getElementById("monthNum").innerHTML=Daynum;

const monthname=date.getMonth(); 
const monthNames=["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]
const monthName=monthNames[monthname];
document.getElementById("monthName").innerHTML=monthName;

const dayName=date.getDay();
const days=[ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day=days[dayName];
document.getElementById("nameDay").innerHTML=day;
//box2

const daytwo=date.getDay();
const dayTwo=(daytwo + 1);
const day2=days[dayTwo];
document.getElementById("nameDay2").innerHTML=day2;
//box3

const daythree=date.getDay();
const dayThree = (daythree +2);
const day3=days[dayThree];
document.getElementById("nameDay3").innerHTML=day3;

 //weather

async function getWeather(country){ 
    let apiResponse=await fetch(`https://api.weatherapi.com/v1/current.json?key=b4119f064c4a474b9ac132954230608&q=${country}`)
    let final=await apiResponse.json()
     

    let next=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=8c75dcd2ae0a4303811170059231308&q=07112&days=3`)
    let finalNext= await next.json()
    console.log(finalNext)

    document.getElementById("city").innerHTML=final.location.name;
    document.getElementById("temp").innerHTML=final.current.temp_c+"&#8451";
    document.getElementById("logo").setAttribute("src",`${final.current.condition.icon}`)
    document.getElementById("case").innerHTML=final.current.condition.text;

    document.getElementById("logo2").setAttribute("src",`${finalNext.forecast.forecastday[1].day.condition.icon}`)
    document.getElementById("temp2").innerHTML= finalNext.forecast.forecastday[1].day.maxtemp_c+"&#8451";
    document.getElementById("case2").innerHTML=finalNext.forecast.forecastday[1].day.condition.text;

    document.getElementById("logo3").setAttribute("src",`${finalNext.forecast.forecastday[2].day.condition.icon}`)
    document.getElementById("temp3").innerHTML= finalNext.forecast.forecastday[2].day.maxtemp_c+"&#8451";
    document.getElementById("case3").innerHTML=finalNext.forecast.forecastday[2].day.condition.text;



}

async function get(){
    await getWeather("cairo");
}

get();

document.getElementById("se").addEventListener("keyup",function(){
    async function get(){
        await getWeather(se.value)
    }
    get();
})


