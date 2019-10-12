const add = require('./hw5');

describe('hw5', () => {
  it('should return correct answer when a=111111111111111111111111111111111111 and b=111111111111111111111111111111111111', () => {
    expect(add('111111111111111111111111111111111111', '111111111111111111111111111111111111')).toBe('222222222222222222222222222222222222');
  });
  it('999+1', () => {
    expect(add('999', '1')).toBe('1000');
  });
  it('1+99999', () => {
    expect(add('1', '99999')).toBe('100000');
  });
  it('123+654', () => {
    expect(add('123', '654')).toBe('777');
  });
});
