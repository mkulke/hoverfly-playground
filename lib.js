const rp = require('request-promise-native');

function getNumber() {
  return rp({
    uri: 'http://jsonplaceholder.typicode.com/users?apiKey=123',
    json: true,
  }).then(users => users.length);
};

function getUser() {
  return rp({
    uri: 'http://jsonplaceholder.typicode.com/users/1',
    json: true,
  });
};

module.exports = {
  getNumber,
  getUser,
}
