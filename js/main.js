const apiKey = "++++++++++++";
const url =`http://api.openweathermap.org/data/2.5/weather?q="city_name"&units="imperial"&appid="apiKey";`


const _gettemp = async () => {
const result = await fetch(url, {
method = "POST",       
});

const data = await result.json();
return data.main.temp
};

let answer = async (data) => {
let request = new Request(`"https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid="apiKey"&units="units""`, {
method :'GET',
});
let result = await fetch(request);
console.log('Result:', result);

let response = await result.json();
console.log(response);
let data = response.main.temp
return data
};

//function to search city and return data and display html
const searchC = (data) => {
    let weatherData = JSON.parse(data);
    let temp = weatherData.main.temp;
    return ("<h1>The temperature in query is " + temp + "degrees Fahrenheit.</h1>");
    let min = weatherData.main.temp_min;
    return ("<h3>Today's low is " + min + "</h3>");
    let max = weatherData.main.temp_max;
    return ("<h3>Today's high is " + max + "</h3>");
    let weatherDescription = weatherData.weather[0].description;
    return ("<h2>Your current sky is" + weatherDescription + "</h2>");
    let icon = weatherData.weather[0].icon;
    let imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    return ("<img src=" + imageURL + ">");
};
    
//function to search by zip code
const zip = async () => {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip="zip_code",us&appid="apiKey"`), {
    method = "POST",       
    });
    
    const dataZ = await result.json();
    return dataZ
    };
const searchZ = (dataZ) => {
    let weatherData = JSON.parse(dataZ);
    let temp = weatherData.main.temp;
    return ("<h1>The temperature is " + temp + "degrees Fahrenheit.</h1>");
    let min = weatherData.main.temp_min;
    return ("<h3>Today's low is " + min + "</h3>");
    let max = weatherData.main.temp_max;
    return ("<h3>Today's high is " + max + "</h3>");
    let weatherDescription = weatherData.weather[0].description;
    return ("<h2>Your current sky is" + weatherDescription + "</h2>");
    let icon = weatherData.weather[0].icon;
    let imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    return ("<img src=" + imageURL + ">");
};
 