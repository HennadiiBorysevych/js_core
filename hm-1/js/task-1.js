const ERROR_MESSAGE = 'Invalid value, Enter a number!';

function toBase() {
	const number = +prompt('Enter a number, please!');
	const base = +prompt('Enter a base, please!');

	if (isNaN(number) || isNaN(base)) {
		console.log(ERROR_MESSAGE);
	} else {
		console.log(+number.toString(base));
	}
}

toBase();
