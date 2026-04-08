import {itemsOfInterest} from '../data/items_of_interest.mjs'
console.log(itemsOfInterest)

const items = document.querySelector('#itemsOfInterest');

function populateIOfI(itemsOfI) {
    itemsOfI.forEach(item => {
        let itemCard = document.createElement('div');
        let title = document.createElement('h2');
        let imageFigure = document.createElement('figure');
        let address = document.createElement('address');
        let description = document.createElement('p');
        let learnMore = document.createElement('button');
        let image = document.createElement('img');

        title.innerHTML = `${item.name}`;
        address.innerHTML = `${item.address}`;
        description.innerHTML = `${item.description}`;

        learnMore.innerHTML = `Learn More`;

        image.setAttribute('alt', `${item.name}`);
        image.setAttribute('src', `${item.image}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('height', '200');

        console.log(`${item.image}`);

        imageFigure.appendChild(image);
        itemCard.appendChild(title);
        itemCard.appendChild(imageFigure);
        itemCard.appendChild(description);
        itemCard.appendChild(address);
        itemCard.appendChild(learnMore);
        items.appendChild(itemCard);
    });
};

populateIOfI(itemsOfInterest);