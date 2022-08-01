const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function objectData(animalList, locationList, searchEmployee) {
  return searchEmployee.filter((element) => {
    const objeto = ({
      id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: animalList,
      locations: locationList,
    });
    console.log(objeto);
    return objeto;
  });
}

function getEmployeesCoverage(employeeData) {
  // seu código aqui
  const { name, id } = employeeData;

  const searchEmployee = employees
    .filter((element) => element.firstName === name
      || element.lastName === name || element.id === id)
    .filter((element) => element.responsibleFor);

  const dataList = searchEmployee[0].responsibleFor;
  const animalList = dataList.map((element) => species
    .find((e) => e.id === element)).map((e) => e.name);

  const locationList = dataList.map((element) => species
    .find((e) => e.id === element)).map((e) => e.location);

  return objectData(animalList, locationList, searchEmployee);
}

getEmployeesCoverage({ name: 'Sharonda' });

module.exports = getEmployeesCoverage;
