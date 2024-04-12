

/**
 * Rolls a dice of diceSize and returns the result
 *
 * @param {number} [diceSize=6]
 * @returns {*}
 */

function rollDice(diceSize = 6) {
    let rollResult = Math.floor(Math.random() * diceSize) + 1;
    return rollResult
}


/**
 * Rolls a dice of diceSize and returns the higher of the two results
 * Also outputs the two numbers rolled
 * @param {number} [diceSize=6]
 * @returns {{ finalResult: any; rolls: {}; }}
 */
function rollDiceWithAdvantage(diceSize = 6){
    let result = {
        finalResult: null,
        rolls: []
    }
    result.rolls = [
        rollDice(diceSize),
        rollDice(diceSize)
    ]
    result.finalResult = Math.max(...result.rolls)
    return result;
}
/**
 * Rolls a dice of diceSize and returns the lower of the two results
 * Also outputs the two numbers rolled
 * @param {number} [diceSize=6]
 * @returns {{ finalResult: any; rolls: {}; }}
 */
function rollDiceWithDisadvantage(diceSize = 6){
    let result = {
        finalResult: null,
        rolls: []
    }
    result.rolls = [
        rollDice(diceSize),
        rollDice(diceSize)
    ]
    result.finalResult = Math.min(...result.rolls)
    return result;
}

module.exports = {
    rollDice,
    rollDiceWithAdvantage,
    rollDiceWithDisadvantage
}