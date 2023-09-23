// Model only works with data, meanwhile controller uses
// data access functions to work with data Model
const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: latestFlightNumber,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-442 b',
  customers: ['Albert', 'Hasmik'],
  upcoming: true,
  success: true,
};

const launch2 = {
  flightNumber: 1025,
  mission: 'Kepler Exploration XY',
  rocket: 'Explorer IS10',
  launchDate: new Date('September 22, 2023'),
  target: 'Kepler-442 b',
  customers: ['Albert', 'Hasmik'],
  upcoming: false,
  success: true,
};

launches.set(launch.flightNumber, launch);
launches.set(launch2.flightNumber, launch2);

/*
* Data Acess (Layer)
*/
function existsLaunchWithId(launchId) {
  return launches.has(launchId);
}

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber, 
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ['Hasmik', 'Albert'],
      flightNumber: latestFlightNumber,
    }),
  );
}

function abortLaunchById(launchId) {
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  
  return aborted;
}

module.exports = {
  existsLaunchWithId,
  getAllLaunches,
  addNewLaunch,
  abortLaunchById,
};