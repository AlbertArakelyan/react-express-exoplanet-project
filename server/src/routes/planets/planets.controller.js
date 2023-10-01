const { getAllPlanets } = require('../../models/planets.model');

async function httpGetAllPlanets(req, res) {
  res.status(200).json(await getAllPlanets());
}

module.exports = {
  httpGetAllPlanets,
};