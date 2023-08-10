Array.prototype.myFilter = function (callback, args) {
	if (typeof callback !== 'function') {
		throw new TypeError('Callback must be a function');
	}

	const result = [];
	const array = this;

	for (let i = 0; i < array.length; i++) {
		const item = array[i];
		if (callback.call(args, item, i, array)) {
			result.push(item);
		}
	}

	return result;
};

// ---------------------------------------------------------------------------

const createDebounceFunction = (callback, delay) => {
	let delayId;

	return (...args) => {
		clearTimeout(delayId);

		delayId = setTimeout(() => {
			callback.apply(this, args);
		}, delay);
	};
};
