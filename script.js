let cityName = document.querySelector('.weather_city');
let dateTime = document.querySelector('.weather_date_time');
let forecast = document.querySelector('.weather_forecast');
let w_icon = document.querySelector('.weather_icon');
let w_tem = document.querySelector('.weather_tem');
let w_min = document.querySelector('.weather_min');
let w_max = document.querySelector('.weather_max');

//to convert country code to its complete name by using international api
const getcountryname = (code) => {
   return new Intl.DisplayNames([code], {type: "region"}).of(code);
};

const getweatherdata = async () => {
    const weatherkey = `https://api.openweathermap.org/data/2.5/weather?q=ali pur&appid=e656d481339ceabc8bd668d02d890e22&units=metric`;

    try {
        const res =await fetch(weatherkey);
        const data =await res.json();
        console.log(data);
        const { main, name, weather, wind, sys, dt} = data;
        cityName.innerHTML = `${name},${getcountryname(sys.country)}`;


    } catch (error) {
        console.log(error);
    }
};

getweatherdata();
document.body.addEventListener('load', getweatherdata);


