const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const showSchedule = {
  Tuesday: {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: species.filter((element) => element.availability
      .find((e) => e === 'Tuesday')).map((e) => e.name),
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: species.filter((element) => element.availability
      .find((e) => e === 'Wednesday')).map((e) => e.name),
  },
  Thursday: {
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: species.filter((element) => element.availability
      .find((e) => e === 'Thursday')).map((e) => e.name),
  },
  Friday: {
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: species.filter((element) => element.availability
      .find((e) => e === 'Friday')).map((e) => e.name),
  },
  Saturday: {
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: species.filter((element) => element.availability
      .find((e) => e === 'Saturday')).map((e) => e.name),
  },
  Sunday: {
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: species.filter((element) => element.availability
      .find((e) => e === 'Sunday')).map((e) => e.name),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

function showDay(scheduleTarget) {
  const scheduleZoo = species.filter((element) => element.name === scheduleTarget)
    .map((element) => element.availability).find((element) => element);
  return scheduleZoo;
}

function showMonday() {
  return {
    Monday: {
      exhibition: showSchedule.Monday.exhibition,
      officeHour: showSchedule.Monday.officeHour,
    },
  };
}

function showTuesday() {
  return { Tuesday: showSchedule.Tuesday };
}

function showWednesday() {
  return { Wednesday: showSchedule.Wednesday };
}

function pathDays(scheduleTarget) {
  if (scheduleTarget === 'Monday') return showMonday();
  if (scheduleTarget === 'Tuesday') return showTuesday();
  if (scheduleTarget === 'Wednesday') return showWednesday();
}

function possiblePaths(scheduleTarget) {
  const initialLetter = scheduleTarget.substring(0, 1);
  if (initialLetter === initialLetter.toUpperCase()) return pathDays(scheduleTarget);
  return showDay(scheduleTarget);
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (scheduleTarget === undefined
    || scheduleTarget === 'qualquercoisa') return showSchedule;

  if (scheduleTarget !== 'qualquercoisa'
    || scheduleTarget !== undefined) return possiblePaths(scheduleTarget);
}

module.exports = getSchedule;
