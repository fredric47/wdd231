const url = 'https://raw.githubusercontent.com/fredric47/wdd231/refs/heads/main/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); //temporary testing of data response
    displayMembers(data); //used copilot to help remove .members
}

const displayMembers = (members) => {
    members.forEach(member => {
        let card = document.createElement('section');
        // card.classList.add('visible');  //Used copilot to figure this out
        let name = document.createElement('h2');
        let address = document.createElement('span');
        let phoneNo = document.createElement('span');
        let url = document.createElement('span');
        let image = document.createElement('img');
        let membershipLevel = document.createElement('span');

        name.innerHTML = `${member.companyName}`;
        address.innerHTML = `<span class="bold">Address</span>: ${member.companyAddress}`;
        phoneNo.innerHTML = `<span class="bold">Phone#</span> ${member.companyPhoneNo}`;
        url.innerHTML = `<span class="bold">Web Address:</span> ${member.companyURL}`;
        // image.src = `images/${members.companyImg}`;
        membershipLevel.innerHTML = `<span class="bold">Membership Lv:</span> ${member.membershipLevel}`;

        image.setAttribute('alt', `${member.companyName} company image`);
        image.setAttribute('src', `images/${member.companyImg}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phoneNo);
        card.appendChild(url);
        card.appendChild(image);
        card.appendChild(membershipLevel);
        cards.appendChild(card);
    });
}

getMemberData();