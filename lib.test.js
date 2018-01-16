const { getNumber, getUser } = require('./lib.js');
const { simulate } = require('./testUtils.js');

describe('getNumber', () => {
  simulate('./users.json');

  it('is 10', () => {
    return getNumber()
      .then(number => expect(number).toBe(10));
  });
});

describe('getUser', () => {
  simulate('./user.json');

  it('is peter', () => {
    return getUser()
      .then(user => expect(user.name).toBe('Peter Graham'));
  });
});
