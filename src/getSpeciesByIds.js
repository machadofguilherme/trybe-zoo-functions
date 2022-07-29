const { species } = require('../data/zoo_data');

function data(e) {
  const animalData = {
    id: e.id,
    name: e.name,
    popularity: e.popularity,
    location: e.location,
    availability: e.availability,
    residents: e.residents.map((e2) => {
      const parentsData = { name: e2.name, age: e2.age, sex: e2.sex };
      return parentsData;
    }),
  };
  return animalData;
}

function variousArguments(...ids) {
  const [primeiro, outros] = ids;
  return species.filter((element) => element.id === primeiro || element.id === outros)
    .filter((e) => data(e));
}

function oneArgument(...ids) {
  return species
    .filter((element) => element.id === ids[0]).map((e) => data(e));
}

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) { return []; }
  if (ids.length === 1) { return oneArgument(...ids); }
  if (ids.length >= 2) { return variousArguments(...ids); }
}

getSpeciesByIds(
  '0938aa23-f153-4937-9f88-4858b24d6bce',
  'e8481c1d-42ea-4610-8e11-1752cfc05a46',
);

module.exports = getSpeciesByIds;
