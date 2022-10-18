import { showCharacters } from "./showCharacters.js";

const path = {
    charactersUrl: 'https://rickandmortyapi.com/api/character'
};

const getCharacters =async () => {
    try {
        const res = await fetch(path.charactersUrl);
        const characterlist = await res.json();
        showCharacters(characterlist.results)
    } catch (error) {
        console.error(error);        
    }
};

getCharacters();


