const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const animalsFound = employees.filter((element) => element.id === id)
    .find((e) => e.responsibleFor).responsibleFor.find((e) => e);

  const animalContent = species.filter((element) => element.id === animalsFound)
    .find((element) => element.residents).residents.sort((a, b) => b.age - a.age)[0];

  const { name, sex, age } = animalContent;
  const animalData = [name, sex, age];
  return animalData;
}

module.exports = getOldestFromFirstSpecies;
