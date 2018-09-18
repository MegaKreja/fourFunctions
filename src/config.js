const functions = require('./functions.js');

const random = functions.random(2, 6);
const minIntegerFromArray = functions.minIntegerFromArray([1, 'etf', 'kgj', 4, 0, 2]);
const minIntegerFromString = functions.minIntegerFromString('Danas, 17tog Septembra, bice hladnije nego juce u 20h, 16og Septembra');
const concatStringsByLength = functions.concatStringsByLength(['abc', 'ac', 'bdca', 'edagas'], 0);

module.exports = {
	random,
	minIntegerFromArray,
	minIntegerFromString,
	concatStringsByLength,
};
