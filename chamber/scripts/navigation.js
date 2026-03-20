const hamButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');
const listButton = document.querySelector('#gridList')

// hamButton.addEventListener('click', () => {
//     hamButton.classList.toggle('show');
//     navBar.classList.toggle('show');
// });

listButton.addEventListener('click', () => {
    document.querySelectorAll('#cards section').forEach(card => {  //used copilot to figure this out
        card.classList.toggle('notVisible');
    });
    document.querySelector('#cards').classList.toggle('list');
});


const home = 'https://fredric47.github.io/wdd231/chamber/index.html';
document.getElementById('home').href = home;

const directory = 'https://fredric47.github.io/wdd231/chamber/directory.html';
document.getElementById('directory').href = directory;

const join = 'https://fredric47.github.io/wdd231/chamber/join.html';
document.getElementById('join').href = join;

const discover = 'https://fredric47.github.io/wdd231/chamber/discover.html';
document.getElementById('discover').href = discover;
