const ERROR_MESSAGE = 'Invalid value, Enter a number!';

function isValid(num) {
	if (isNaN(num)) {
		throw TypeError(ERROR_MESSAGE);
	}
}

const firstNumber = +prompt('Enter first number, please!');
isValid(firstNumber);

const secondNumber = +prompt('Enter a second number, please!');
isValid(secondNumber);

console.log(`Answer: ${firstNumber + secondNumber}, ${(firstNumber / secondNumber).toFixed(1)}`);
