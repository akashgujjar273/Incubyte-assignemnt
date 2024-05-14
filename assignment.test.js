const add = require('./assignment');

test('add function needs to returns 0 for empty string', () => {
    expect(add('')).toBe(0);
});