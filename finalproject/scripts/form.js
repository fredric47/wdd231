const notificationCheck = document.querySelector('#checkbox');
const phoneLabel = document.querySelector('#phone-label');
const phone = document.querySelector('#phone');

notificationCheck.addEventListener('change', () => {
    phoneLabel.classList.toggle('required');
    phone.toggleAttribute('required'); //copilot assistance to learn how to do this
});