const isValidNumber = (number) => {
	return typeof number === 'number' && isFinite(number);
};

class Stack {
	constructor(elements = 10) {
		if (!isValidNumber(elements) || elements < 0) {
			throw new Error('Invalid value');
		} else {
			this.elements = elements;
		}

		this.length = 0;
		this.top = null;
	}

	push(element) {
		if (this.length === this.elements) {
			throw new Error('Max size has exeeded');
		}

		const newElement = {
			element,
			previous: this.top || null,
		};

		this.length++;
		this.top = newElement;
	}

	pop() {
		if (this.length === 0) {
			throw new Error('Stack is empty!');
		}

		const deletedElement = this.top;

		this.top = this.top.previous;
		this.length--;

		return deletedElement.element;
	}

	peek() {
		if (this.length === 0) {
			return null;
		}

		return this.top.element;
	}
	
	isEmpty() {
		return this.length === 0;
	}

	toArray() {
		let current = this.top;
		const array = [];

	    while (current) {
            array.push(current.element);
            current = curr.previous;
        }

        return array.reverse();
	}

	static fromIterable(iterable) {
		const isIterable = typeof iterable[Symbol.iterator] === 'function';

		if (!isIterable) {
			throw new Error('Not iterable');
		}

		const stack = new Stack(iterable.length);

		for (let element of iterable) {
			stack.push(element);
		}

		return stack;
	}
}

module.exports = { Stack };