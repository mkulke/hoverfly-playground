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

  it('returns peter', () => {
    return getUser(1)
      .then(user => expect(user.name).toBe('Leanne Graham'));
  });

  it('returns ervin', () => {
    return getUser(2)
      .then(user => expect(user.name).toBe('Ervin Howell'));
  });
});
