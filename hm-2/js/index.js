function makeObjectDeepCopy(object) {
	if (typeof object !== 'object') {
		return object;
	}

	let deepCopy = {};

	if (Array.isArray(object)) {
		const deepArray = [];
		object.forEach(element => {
			deepArray.push(makeObjectDeepCopy(element));
		});
		return deepArray;
	}

	for (const key of Object.keys(object)) {
		if (typeof object[key] !== 'object') {
			deepCopy[key] = object[key];
		} else {
			deepCopy[key] = makeObjectDeepCopy(object[key]);
		}
	}
	return deepCopy;
}

const client = {
	name: 'John Doe',
	age: 30,
	address: {
		city: 'New York',
		country: ['USA', 'Ukraine'],
	},
	hobbies: ['Reading', 'Traveling', 'Cooking', { subHobby: 'Jumping' }],
};

const newClient = makeObjectDeepCopy(client);

// ---------------------------------------------------------------------------------------------

function selectFromInterval(array, firstNumber, secondNumber) {
	if (!Array.isArray(array)) {
		throw new Error('Should be an array as first paramater');
	}

	if (isNaN(firstNumber) || isNaN(secondNumber)) {
		throw new Error('The interval should be number');
	}

	array.forEach(el => {
		if (isNaN(el)) {
			throw new Error('The array should only contain numbers.');
		}
	});

	const intervalValues = [];

	const start = Math.min(firstNumber, secondNumber);
	const end = Math.max(firstNumber, secondNumber);

	for (let i = start; i <= end; i++) {
		if (array.includes(i)) {
			intervalValues.push(i);
		}
	}
	return intervalValues;
}
// ---------------------------------------------------------------------------------------------

const myIterable = {
	from: 1,
	to: 4,
	[Symbol.iterator]: function () {
		const from = this.from;
		const to = this.to;

		if (typeof from !== 'number' || typeof to !== 'number' || from > to) {
			throw new Error('Invalid "from" or "to" properties');
		}

		let current = from;

		return {
			next: function () {
				return current <= to ? { done: false, value: current++ } : { done: true };
			},
		};
	},
};

for (let item of myIterable) {
	console.log(item);
}
