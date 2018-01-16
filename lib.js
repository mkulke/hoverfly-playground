const rp = require('request-promise-native');

function getNumber() {
  return rp({
    uri: 'http://jsonplaceholder.typicode.com/users?apiKey=123',
    json: true,
  }).then(users => users.length);
};

function getUser(number) {
  return rp({
    uri: `http://jsonplaceholder.typicode.com/users/${number}`,
    json: true,
  });
};

module.exports = {
  getNumber,
  getUser,
}
