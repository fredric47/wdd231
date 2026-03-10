const today = new Date;

document.getElementById('copywritespan').innerHTML = `<span>©️ ${today.getFullYear()} | Luke Pratt | USA</span>`;

// const shortdate = today.toLocaleDateString('en-us') //used copilot to figure out how to remove time from date

document.getElementById('lastModified').innerHTML = document.lastModified;
