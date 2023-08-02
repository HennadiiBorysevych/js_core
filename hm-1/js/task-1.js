const ERROR_MESSAGE = 'Invalid value, Enter a number!';

function toBase() {
	const number = +prompt('Enter a number, please!');
	const base = +prompt('Enter a base, please!');

	const condition = isNaN(number) || isNaN(base);

	return condition ? console.log(ERROR_MESSAGE) : console.log(+number.toString(base));
}

toBase();
