const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const residentsBySpecies = {
  lions: species.filter((element) => element.name === 'lions')
    .map((e) => e.residents.length).find((e) => e),

  tigers: species.filter((element) => element.name === 'tigers')
    .map((e) => e.residents.length).find((e) => e),

  bears: species.filter((element) => element.name === 'bears')
    .map((e) => e.residents.length).find((e) => e),

  penguins: species.filter((element) => element.name === 'penguins')
    .map((e) => e.residents.length).find((e) => e),

  otters: species.filter((element) => element.name === 'otters')
    .map((e) => e.residents.length).find((e) => e),

  frogs: species.filter((element) => element.name === 'frogs')
    .map((e) => e.residents.length).find((e) => e),

  snakes: species.filter((element) => element.name === 'snakes')
    .map((e) => e.residents.length).find((e) => e),

  elephants: species.filter((element) => element.name === 'elephants')
    .map((e) => e.residents.length).find((e) => e),

  giraffes: species.filter((element) => element.name === 'giraffes')
    .map((e) => e.residents.length).find((e) => e),
};

function animalGenreCount(animal) {
  const animalName = Object.values(animal).find((e) => e);

  const animalGenre = Object.values(animal).at(1);

  const numberPerGenre = species.filter((element) => element.name === animalName)
    .map((e) => e.residents).filter((e) => e).find((e) => e)
    .filter((e) => e.sex === animalGenre).length;

  return numberPerGenre;
}

function uniqueAnimal(animal) {
  const animalName = Object.values(animal).find((e) => e);
  const residentNumber = species.find((element) => element.name === animalName);
  return residentNumber.residents.length;
}

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) return residentsBySpecies;
  const testOk = Object.keys(animal)
    .includes('sex') ? animalGenreCount(animal) : uniqueAnimal(animal);
  return testOk;
}

module.exports = countAnimals;
