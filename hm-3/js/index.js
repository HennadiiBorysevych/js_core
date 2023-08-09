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

const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.myFilter(function (number) {
	return number % 2 === 0;
});

console.log(filteredNumbers);

// 2) Написать функцию createDebounceFunction. Она должна принимать два аргумента: callback-функцию и задержку в миллисекундах. Данная функция должна возвращать новую функцию, вызывающую callback-функцию с задержкой в переданное количество миллисекунд. ПРИ ЭТОМ! Если за то время, пока внутрення callback-функция ждёт своего вызова, наша созданная функция вызывается ещё раз, то "счётчик" времени должен сбрасываться и начинаться заново (т.е. вызова внутренней функции произойти не должно).

// > Пример:
// const log100 = () => console.log(100);
// const debounceLog100 = createDebounceFunction(log100, 1000);
// debounceLog100();
// setTimeout(debounceLog100, 200); // так как задержка в 1000мс и новый вызов этой же функции происходит через 200 миллисекунд, то таймер запускается заново
// setTimeout(debounceLog100, 400); // снова сбрасываем таймер ещё через 200 миллисекунд

// Вывод в консоли значения 100 прим
