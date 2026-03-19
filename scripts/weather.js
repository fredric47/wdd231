
const weatherIcon = document.querySelector('#weather-icon');
const nowTemp = document.querySelector('#current-temp');
const figCaption = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=49.74&lon=6.63&appid=58895be9ebb4131d1df94a8d7aea6acb';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log("Success:", data); // testing and stuff
            //displayResults(data);
        } else {
            throw Error(await response.text());
            
        }
    } catch(error) {
        console.log("ERROR", error);
    }
};

apiFetch();