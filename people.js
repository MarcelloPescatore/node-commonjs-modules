// 3 - people.js*
// Importa la tua funzione da names.js
const fullName = require('./names');
// Importa la tua funzione da hobbies.js
const allHobbies = require('./hobbies');

// Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con tre proprietà: firstName, lastName, hobbies.
function people(){
    // passo i parametri alla funzione fullName
    const name = fullName('Mario', 'Rossi');
    // passo i parametri alla funzione allHobbies
    const hobbies = allHobbies('Calcio', 'Scacchi', 'Videogames')
    return {
        firstName: name.firstName,
        lastName: name.lastName,
        hobbies
    }
};

// stampo il risultato in console
console.log(people());
