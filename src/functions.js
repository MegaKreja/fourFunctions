const random = (min, max) => {
	if (typeof min !== 'number' || typeof max !== 'number') {
		return 'You must type a number';
	}
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const minIntegerFromArray = (array) => {
	if (array.length < 6) {
		return 'You must type a array with at least 10 elements';
	}
	const numArr = array.filter(el => typeof el === 'number');
	return numArr.length > 0 ? Math.min(...numArr) : false;
};

const minIntegerFromString = (string) => {
	if (typeof string !== 'string' || string.length < 10) {
		return 'You must type a string with at least 10 characters';
	}
	const numArr = string.match(/\d+/g).map(Number);
	return numArr.length > 0 ? Math.min(...numArr) : false;
};

const concatStringsByLength = (arrayOfStrings, type) => {
	const sortedArray = arrayOfStrings.slice();
	if (type === 0) {
		sortedArray.sort((a, b) => a.length - b.length);
	} else {
		sortedArray.sort((a, b) => b.length - a.length);
	}
	return sortedArray;
};

module.exports = {
	random,
	minIntegerFromArray,
	minIntegerFromString,
	concatStringsByLength,
};
