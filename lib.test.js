const { getNumber, getUser } = require('./lib.js');
const { simulate } = require('./testUtils.js');
const user = require('./user.json');
const users = require('./users.json');

describe('getNumber', () => {
  simulate(users);

  it('works', () => {
    return getNumber()
      .then(number => expect(number).toBe(10));
  });
});

describe('getUser', () => {
  simulate(user);

  it('is peter', () => {
    return getUser()
      .then(user => expect(user.name).toBe('Peter Graham'));
  });
});
