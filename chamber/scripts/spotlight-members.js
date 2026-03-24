
const urlLink = 'https://raw.githubusercontent.com/fredric47/wdd231/refs/heads/main/chamber/data/members.json';
const spotlight = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(urlLink);
    const data = await response.json();
    //console.table(data); //temporary testing of data response

    getHighLevelMembers(data); //used copilot to help remove .members

}

const getHighLevelMembers = (members) => {

    const spotlightMembers = [];
    members.forEach(sLmember => {

        if (sLmember.membershipLevel > 1) {
            spotlightMembers.push(sLmember);
        }
    });

    getRandomSLMember(spotlightMembers);
}

const getRandomSLMember = (slMember) => {                   //google ai overview select couple random
    let fIndex = Math.floor(Math.random() * slMember.length);
    let sIndex;
    do {
        sIndex = Math.floor(Math.random() * slMember.length);
    } while (fIndex === sIndex);
    let randomSLMembers = [slMember[fIndex], slMember[sIndex]];
    displaySLMembers(randomSLMembers);
}


const displaySLMembers = (members) => {
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
        image.setAttribute('width', '250');
        image.setAttribute('height', '225');

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phoneNo);
        card.appendChild(url);
        card.appendChild(image);
        card.appendChild(membershipLevel);
        spotlight.appendChild(card);
    });
}

getMemberData();