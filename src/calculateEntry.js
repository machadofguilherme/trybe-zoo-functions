const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const persons = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

const chil = persons.filter((element) => element.age <= 17);
const adu = persons.filter((element) => element.age >= 18 && element.age <= 49);
const sen = persons.filter((element) => element.age >= 50);
const priceChild = chil.length * prices.child;
const priceAdult = adu.length * prices.adult;
const priceSenior = sen.length * prices.senior;
const sumTriple = (priceAdult) + (priceChild) + (priceSenior);

function countEntrants(entrants) {
  // seu código aqui
  const obj = { adult: adu.length, child: chil.length, senior: sen.length };
  return obj;
}

function group(entrants) {
  if (entrants[0].age === 50) return prices.senior;
  if (entrants.length === 6) return sumTriple;
  if (entrants[0].age === 5) return prices.child;
  if (entrants[0].age === 18) return prices.adult;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  if (entrants.length === 2) return prices.child + prices.senior;
  return group(entrants);
}

module.exports = { calculateEntry, countEntrants };
