
const weatherIcon = document.querySelector('#weather-icon');
const nowTemp = document.querySelector('#current-temp');
const figCaption = document.querySelector('figcaption');
const city = document.querySelector('#cityOfTemp');
const country = document.querySelector('#countryOfTemp');

const latitude = '38.60'
const longitude = '-112.58'
const url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${latitude}&lon=${longitude}&appid=58895be9ebb4131d1df94a8d7aea6acb`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=58895be9ebb4131d1df94a8d7aea6acb&units=imperial`
async function apiFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log("Success:", data); // testing and stuff
            displayResults(data);
        } else {
            throw Error(await response.text());
            
        }
    } catch(error) {
        console.log("ERROR", error);
    }
};

function displayResults(data) {
    // weatherIcon = apiFetch
    console.log('Results DISPLAYED')
    city.innerHTML = `${data.city.name}`
    country.innerHTML = `${data.city.country}`
    nowTemp.innerHTML = `${data.list[0].main.temp}°F` //.list[0]
    figCaption.innerHTML = data.list[0].weather[0].description //list[0].
    // const iconSource = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}@2x.png`
    const iconSource = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
    weatherIcon.setAttribute('src', iconSource)
    weatherIcon.setAttribute('alt', data.list[0].weather[0].description)
}

apiFetch();