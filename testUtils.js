const rp = require('request-promise-native');
const fs = require('fs');

const hoverflyEndpoint = 'http://localhost:8888/api/v2';

function _setSimulation(simulation) {
  return rp({
    method: 'PUT',
    uri: `${hoverflyEndpoint}/simulation`,
    body: simulation,
  });
}

function _getSimulation() {
  return rp({
    method: 'GET',
    uri: `${hoverflyEndpoint}/simulation`,
  });
}

function _setMode(mode) {
  return rp({
    method: 'PUT',
    uri: `${hoverflyEndpoint}/hoverfly/mode`,
    body: JSON.stringify({ mode }),
  });
}

function _simulate() {
  return _setMode('simulate');
}

function _capture() {
  return rp({
    method: 'DELETE',
    uri: `${hoverflyEndpoint}/simulation`,
  })
    .then(() => _setMode('capture'));
}

function simulate(path) {
  let writeSimulation = false;

  beforeAll(() => {
    let simulation;

    try {
      simulation = fs.readFileSync(path);
    } catch (err) {
      if (err.code === 'ENOENT') {
        writeSimulation = true;
        return _capture();
      }
      return Promise.reject(err);
    }

    return _simulate()
      .then(() => _setSimulation(simulation));
  });

  afterAll(() => {
    if (!writeSimulation) {
      return Promise.resolve();
    }

    return _getSimulation()
      .then(simulation => fs.writeFileSync(path, simulation));
  });
}

module.exports = {
  simulate,
}
