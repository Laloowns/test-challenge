const fizzBuzz = require('../fizzBuzz');

test('Returns Fizz if the number is divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(9)).toBe('Fizz');
});

test('Returns Buzz if the number is divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
});

test('Returns FizzBuzz if the number is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
});

test('Returns the number if it is not divisible by 3 or 5', () => {
    expect(fizzBuzz(7)).toBe(7);
    expect(fizzBuzz(13)).toBe(13);
});

//test