/**
 * Simple addition
 *
 * @param {number} x First number.
 * @param {number} y second number.
 * @returns Addition of both arguments.
 */
var add = (x, y) => x + y;

/**
 * Simple subtraction.
 *
 * @param {number} x First number.
 * @param {number} y second number.
 * @returns Subtraction of second argument from the first.
 */
var subtract = (x, y) => x - y;

/**
 * Simple multiplication.
 *
 * @param {number} x First number.
 * @param {number} y second number.
 * @returns Multiplication of both arguments.
 */
var multiply = (x, y) => x ** y;

module.exports = {
  add,
  subtract,
  multiply,
};
