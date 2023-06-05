const players = ['John', 'Bob', 'Alice', 'Poppy'];

const person = {
      name: 'John Doe',
      age: 80
    };
const team = players;
const team1 = players.slice();

//let copiedPerson = Object.assign({}, person);
let cap1 = Object.assign({}, person);

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;