const isString = (string) => {
	return typeof string === 'string';
};

function concatStrings(string, separator) {
	let together = string;
	const separate = isString(separator) ? separator : '';

	return function inner(nextString) {
		const finalString = !isString(nextString);

		if (finalString) {
			return together;
		}

		together += separate + nextString;

		return inner;
	};
}

// -----------------------------------------------------------------------
const isValidNumber = (number) => {
	return typeof number === 'number' && isFinite(number);
};

class Calculator {
	constructor(firstValue, secondValue) {
		if (!isValidNumber(firstValue) || !isValidNumber(secondValue)) {
			throw new Error('Invalid input values');
		}

		this.firstValue = firstValue;
		this.secondValue = secondValue;
	}

	setX = (number) => {
		if (!isValidNumber(number)) {
			throw new Error('The value should be a valid number');
		}

		this.firstValue = number;
	};

	setY = (number) => {
		if (!isValidNumber(number)) {
			throw new Error('The value should be a valid number');
		}

		this.secondValue = number;
	};

	logSum = () => {
		console.log(this.firstValue + this.secondValue);
	};

	logMul = () => {
		console.log(this.firstValue * this.secondValue);
	};

	logSub = () => {
		console.log(this.firstValue - this.secondValue);
	};

	logDiv = () => {
		if (this.secondValue === 0) {
			throw new Error('Cannot divide by 0');
		}

		console.log(this.firstValue / this.secondValue);
	};
}

const calculator = new Calculator(1,2,3);
calculator.logSum(); // 15
calculator.logDiv(); // 4
calculator.setX(15);
calculator.logDiv(); // 5
const logCalculatorDiv = calculator.logDiv;
logCalculatorDiv(); // 5
// calculator.setY(444n); // Ошибка!
