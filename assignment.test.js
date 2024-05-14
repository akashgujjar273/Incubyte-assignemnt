const add = require('./assignment');

test('add function returns 0 for empty string', () => {
  expect(add('')).toBe(0);
});

test('add function returns the sum of one number', () => {
  expect(add('1')).toBe(1);
});

test('add function returns the sum of two numbers', () => {
  expect(add('1,2')).toBe(3);
});

test('add function handles an n amount of numbers', () => {
    expect(add('1,2,3,4,5')).toBe(15);
});
  
test('add function handles new lines between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
});

test('add function throws an exception for negative numbers', () => {
  expect(() => {
    add('-1,2,-3');
  }).toThrow('negative numbers not allowed: -1,-3');
});
