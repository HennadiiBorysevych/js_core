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
