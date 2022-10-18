import makeElement from "./makeElement.js";
const rootDiv = document.getElementById('root_div');


const showCharacters = (characters = []) => {
    characters.forEach(({ name, status, image }) => {
        const characterCard = makeElement('div','character_card');
        const characterName = makeElement('h2','character_name');
        const characterImg = makeElement('img','character_img');
        const characterStatus = makeElement('span','character_status');
        characterName.innerText = name;
        characterImg.src = image;
        characterStatus.innerText = status;
        characterCard.appendChild(characterName);
        characterCard.appendChild(characterImg);
        characterCard.appendChild(characterStatus);
        rootDiv.appendChild(characterCard)
    })
};

export { showCharacters };
