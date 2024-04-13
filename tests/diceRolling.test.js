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

describe('As a dungeon master...', () => {
    describe('... I want to roll a variety of dice sizes, such as...', () => {
      
        test('D6', () => {
            let result = rollDice();

            expect(result).toBeLessThanOrEqual(6);
            expect(result).toBeGreaterThanOrEqual(1);
        });

        test('D8', () => {
            let result = rollDice(8);

            expect(result).toBeLessThanOrEqual(8);
            expect(result).toBeGreaterThanOrEqual(1);
        });

        test('D10', () => {
            let result = rollDice(10);

            expect(result).toBeLessThanOrEqual(10);
            expect(result).toBeGreaterThanOrEqual(1);
        });

        test('D12', () => {
            let result = rollDice(12);

            expect(result).toBeLessThanOrEqual(12);
            expect(result).toBeGreaterThanOrEqual(1);
        });

        test('D20', () => {
            let result = rollDice(20);

            expect(result).toBeLessThanOrEqual(20);
            expect(result).toBeGreaterThanOrEqual(1);
        });
    })
    
});