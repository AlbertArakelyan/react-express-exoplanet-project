const express = require('express');

const planetsRouter = require('./planets/planets.router');
const launchesRouter = require('./launches/launches.router');

// Instead of api.js could be v1.js, v2.js

const api = express.Router();

api.use('/planets', planetsRouter);
api.use('/launches', launchesRouter);

module.exports = api;