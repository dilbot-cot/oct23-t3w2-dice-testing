const { rollDice, rollDiceWithDisadvantage } = require("../src/diceRolling")

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
      
        let diceVariety = [
            {
                diceSize: 4,
                diceName: "d4"
            },
            {
                diceSize: 6,
                diceName: "d6"
            },
            {
                diceSize: 8,
                diceName: "d8"
            },
            {
                diceSize: 10,
                diceName: "d10"
            },
            {
                diceSize: 12,
                diceName: "d12"
            },
            {
                diceSize: 20,
                diceName: "d20"
            }
        ];

        test.each(diceVariety)("$diceName", (diceObject) => {
            let diceResult = rollDice(diceObject.diceSize);
            expect(diceResult).toBeGreaterThan(0);
            expect(diceResult).toBeLessThanOrEqual(diceObject.diceSize);
        })
        // test('D6', () => {
        //     let result = rollDice();

        //     expect(result).toBeLessThanOrEqual(6);
        //     expect(result).toBeGreaterThanOrEqual(1);
        // });

        // test('D8', () => {
        //     let result = rollDice(8);

        //     expect(result).toBeLessThanOrEqual(8);
        //     expect(result).toBeGreaterThanOrEqual(1);
        // });

        // test('D10', () => {
        //     let result = rollDice(10);

        //     expect(result).toBeLessThanOrEqual(10);
        //     expect(result).toBeGreaterThanOrEqual(1);
        // });

        // test('D12', () => {
        //     let result = rollDice(12);

        //     expect(result).toBeLessThanOrEqual(12);
        //     expect(result).toBeGreaterThanOrEqual(1);
        // });

        // test('D20', () => {
        //     let result = rollDice(20);

        //     expect(result).toBeLessThanOrEqual(20);
        //     expect(result).toBeGreaterThanOrEqual(1);
        // });
    });

    test('... roll with disadvantage', () => {
        let rollDiceWithDisadvantage = jest.fn().mockReturnValue({
            finalResult: 1,
            rolls: [1, 20]
        });
        let rollResult = rollDiceWithDisadvantage(20);
        expect(rollResult.finalResult).toBe(1);
      
    });

    test.skip('... roll with advantage', () => {
        let rollResult = null;
        expect(rollResult).toBe(20);
    })
    
    

    test('... I want to see how many natural 20s I get in a session where I roll 1,000 d20s', () => {
        let diceResults = [];
        for (let i = 0; i < 1000; i++) {
            diceResults.push(rollDice(20));
        }
        console.log(diceResults);
        console.log(diceResults.length);

        let arrayOfNatural20s = diceResults.filter((result) => result == 20);
        console.log(`Number of natural 20s is: ${arrayOfNatural20s.length}`);
        console.log(`The likelyhood of this result is ${arrayOfNatural20s.length / 10}%`);

        expect(diceResults.length).toBe(1000);
        expect(diceResults).toContain(20);
    });
    
});