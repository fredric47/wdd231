const hamButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

const listButton = document.querySelector('#lightdark')

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

listButton.addEventListener('click', () => {
    document.querySelectorAll('#cards section').forEach(card => {  //used copilot to figure this out
        card.classList.toggle('notVisible');
    });
    document.querySelector('#cards').classList.toggle('list');
});

