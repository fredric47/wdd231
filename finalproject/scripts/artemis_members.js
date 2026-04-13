import { artemis2Crew } from '../data/crew_list.mjs'
console.log(artemis2Crew)

const crewdiv = document.querySelector('#orion-crew');

function fillCrewBox(crewMembers) {
    crewMembers.forEach(member => {
        let crewCard = document.createElement('div');
        let name = document.createElement('h2');
        let age = document.createElement('span');
        let birthdate = document.createElement('span');
        let nationality = document.createElement('span');
        let photo = document.createElement('img');
        let position = document.createElement('span');

        name.innerHTML = `${member.name}`;
        age.innerHTML = `<br><b>Age:</b> ${member.age}`;
        birthdate.innerHTML = `<br><b>Born:</b> ${member.birthdate}`;
        nationality.innerHTML = `<br><b>Nationality:</b> ${member.nationality}`;
        position.innerHTML = `<br><b>Position:</b> ${member.position}`

        photo.setAttribute('alt', `${member.name} picture`);
        photo.setAttribute('src', `${member.photo}`);
        photo.setAttribute('loading', 'lazy');
        photo.setAttribute('class', 'portrait')

        crewCard.appendChild(name);
        crewCard.appendChild(photo);
        crewCard.appendChild(position);
        crewCard.appendChild(nationality);
        crewCard.appendChild(birthdate)
        crewCard.appendChild(age);
        crewdiv.appendChild(crewCard);
    });
};

fillCrewBox(artemis2Crew);