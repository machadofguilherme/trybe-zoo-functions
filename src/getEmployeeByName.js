const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function program(employeeName) {
  const employeeData = employees.find((element) => {
    const first = employeeName === element.firstName;
    const second = employeeName === element.lastName;
    return first || second;
  });

  return employeeData;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const exec = (employeeName === undefined) ? {} : program(employeeName);
  return exec;
}

getEmployeeByName('Wishart');

module.exports = getEmployeeByName;
