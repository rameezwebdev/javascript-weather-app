let cityName = document.querySelector('.weather_city');
let dateTime = document.querySelector('.weather_date_time');
let forecast = document.querySelector('.weather_forecast');
let w_icon = document.querySelector('.weather_icon');
let w_tem = document.querySelector('.weather_tem');
let w_min = document.querySelector('.weather_min');
let w_max = document.querySelector('.weather_max');
let w_feellike = document.querySelector('.weather_feelslike');
let w_humidity = document.querySelector('.weather_humidity');
let w_wind = document.querySelector('.weather_wind');
let w_pressure = document.querySelector('.weather_pressure');

//to convert country code to its complete name by using international api
const getcountryname = (code) => {
   return new Intl.DisplayNames([code], {type: "region"}).of(code);
};

//function to convert milsecond into date and time
const gettimetable = (e) => {
    const curDate = new Date(e * 1000);
    // console.log(curDate)
    const option = {
      weekday : "long",
      year : "numeric",
      month : "long",
      day : "numeric",
      hour : "numeric",
      minute : "numeric"
    }

    const formatter = new Intl.DateTimeFormat(curDate,option);
    return formatter.format(curDate);
};

const getweatherdata = async () => {
    const weatherkey = `https://api.openweathermap.org/data/2.5/weather?q=ali pur&appid=e656d481339ceabc8bd668d02d890e22&units=metric`;

    try {
        const res =await fetch(weatherkey);
        const data =await res.json();
        console.log(data);
        const { main, name, weather, wind, sys, dt} = data;
        cityName.innerHTML = `${name},${getcountryname(sys.country)}`;
        dateTime.innerHTML = gettimetable(dt);
        forecast.innerHTML = weather.icon;
        w_tem.innerHTML = `${main.temp}&#176`;
        w_min.innerHTML = `Min:${main.temp_min}&#176`;
        w_max.innerHTML = `Max:${main.temp_max.toFixed()}&#176`;
        w_feellike.innerHTML = `${main.feels_like}&#176`;
        w_humidity.innerHTML = `${main.humidity}%`;
        w_wind.innerHTML = `${wind.speed}km/h`;
        w_pressure.innerHTML = `${main.pressure}hPa`;
    }
    catch (error) {
        console.log(error);
    }
};


document.body.addEventListener('load', getweatherdata);
getweatherdata();


