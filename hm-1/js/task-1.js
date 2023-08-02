const ERROR_MESSAGE = 'Invalid value, Enter a number!';

function toBase() {
	const number = +prompt('Enter a number, please!');
	const base = +prompt('Enter a base, please!');

	if (isNaN(firstValue) || isNaN(secondValue)) {
		console.log(ERROR_MESSAGE);
	} else {
		console.log(Number(firstValue).toString(secondValue));
	}
}

toBase();
