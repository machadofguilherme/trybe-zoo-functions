const { species } = require('../data/zoo_data');

function variousArguments(...ids) {
  ids.forEach((element) => {
    const manyParameters = species.filter((e) => element === e.id)
      .map((e) => e.name);
    return manyParameters;
  });
}

function oneArgument(...ids) {
  const oneID = species
    .filter((element, index) => element.id === ids[index])
    .filter((element) => element.name).map((element) => element.name);
  return oneID;
}

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) { return []; }

  if (ids.length === 1) {
    oneArgument(...ids);
  } else {
    variousArguments(...ids);
  }
}

getSpeciesByIds(
  '0938aa23-f153-4937-9f88-4858b24d6bce',
  'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
  '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
  '89be95b3-47e4-4c5b-b687-1fabf2afa274',
);

module.exports = getSpeciesByIds;
