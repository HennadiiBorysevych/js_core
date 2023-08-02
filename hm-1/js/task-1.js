const ERROR_MESSAGE = 'Invalid value, Enter a number!';

function toBase() {
	const number = +prompt('Enter a number, please!');
	const base = +prompt('Enter a base, please!');
	return !number && !base
		? console.log(ERROR_MESSAGE)
		: console.log(+number.toString(base));
}

toBase();
