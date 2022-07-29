const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, animalAge) {
  // seu código aqui
  const objFiltered = species.filter((element) => element.name === animal)
    .filter((element) => element.residents)
    .find((element) => element.residents.sort((a, b) => a.age - b.age));
  const { residents: [{ age }] } = objFiltered;

  if (animalAge <= age) { return true; } return false;
}

getAnimalsOlderThan('penguins', 10);

module.exports = getAnimalsOlderThan;
