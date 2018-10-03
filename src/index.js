const createEnumerableProperty = (propertyName) => propertyName;

const createNotEnumerableProperty = (propertyName) => {
	Object.defineProperty(Object.prototype,
		propertyName,
		{
			get: () => value,
			set: (newValue) => value = newValue,
			enumerable: false,
			configurable: true
		});
	return propertyName;
};

const createProtoMagicObject = () => {
	let object = () => [];
	object.prototype = object.__proto__;
	return object;
};

let n = 0;
const incrementor = () => {
	n++;
	Object.prototype.valueOf = () => n;
	return incrementor;
};

let n1 = 0;
const asyncIncrementor = () => {
	n1++;
	let asyncFunction = () => {
		n1++;
		return new Promise(resolve => {
			setTimeout(() => {
				resolve();
			}, 1000)
		});
	}
	Object.prototype.valueOf = () => n1;
	return asyncFunction;
};

const createIncrementer = () => {
	let nextValue = {
		value: 0,

		[Symbol.iterator]() {
			return this
		},

		next() {
			this.value++;

			if (this.current === undefined) {
				this.current = 1;
			}

			if (this.current <= this.value) {
				return {
					done: false,
					value: this.current++
				};
			} else {
				delete this.current;
				return {
					done: true
				};
			}
		}
	}

	return nextValue;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
	return new Promise(function (resolve) {
		setTimeout(() => {
			resolve(param);
		}, 1000);
	});
};

const getDeepPropertiesCount = (object) => {
	let count = 0;
	
	function counter(object) {
		for (key in object) {
			count++;
			if(typeof object[key] === 'object') {
				counter(object[key]);
			}	
		}
		return count;
	};

	return counter(object);
};

const createSerializedObject = () => { };
const toBuffer = () => { };
const sortByProto = (arr) => { 
  let temp = arr;

  temp.sort((a, b) => a.__proto__ - b.__proto__);

  return temp;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;