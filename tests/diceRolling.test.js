const { rollDice } = require("../src/diceRolling")

beforeEach(() => {
    // before each individual test runs
    console.log('A test has been started');
});

afterEach(() => {
    console.log('A test has finished');
});

beforeAll(() => {
    console.log('Testing will begin');
});

afterAll(() => {
    console.log('All tests completed');
});

describe('As a casual game ...', () => {
  test('... I want to roll a 6-sided dice...', () => {
    let result = rollDice();

    expect(result).toBeLessThanOrEqual(6);
    expect(result).toBeGreaterThanOrEqual(1);
  });

});