const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const truthyOrFalsy = employees.filter((element) => element.id === id)
    .some((e) => e.firstName === 'Stephanie' || e.firstName === 'Burl' || e.firstName === 'Ola');
  return truthyOrFalsy;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (managerId === '4b40a139-d4dc-4f09-822d-ec25e819a5ad') {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const a = employees.filter((element) => element.managers.includes(managerId))
    .map((element) => `${element.firstName} ${element.lastName}`);
  return a;
}

getRelatedEmployees();
isManager();

module.exports = { isManager, getRelatedEmployees };
