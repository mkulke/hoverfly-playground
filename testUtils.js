const rp = require('request-promise-native');

function simulate(simulation) {
  beforeEach(() => {
    return rp({
      method: 'PUT',
      uri: 'http://localhost:8888/api/v2/simulation',
      body: JSON.stringify(simulation),
    });
  });
}

module.exports = {
  simulate,
}
