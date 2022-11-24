const fetch = require('node-fetch')
const URL = 'https://rickandmortyapi.com/api/character/';

function getName(id) {
    return fetch(`${URL}${id}`).then((res) => res.text())
                               .then((userName) => console.log(userName));
}
getName(2);

