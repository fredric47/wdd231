
const today = new Date();

document.querySelector('#copywrite-p').innerHTML = `©️ ${today.getFullYear()} | Luke Pratt | USA`;

document.querySelector('#last-modified').innerHTML = `Last Modified on: ${document.lastModified}`;