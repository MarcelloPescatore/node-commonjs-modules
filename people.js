// 3 - people.js*
// Importa la tua funzione da names.js
const name = require('./names');
// Importa la tua funzione da hobbies.js
const hobbies = require('./hobbies');
// Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con tre proprietà: firstName, lastName, hobbies.
function people(){
    return {
        firstName: name.firstName,
        lastName: name.lastName,
        hobbies
    }
};