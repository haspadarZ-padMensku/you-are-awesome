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

const createProtoMagicObject = (propertyName) => {
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

const asyncIncrementor = () => { };
const createIncrementer = () => { };

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => { };
const getDeepPropertiesCount = () => { };
const createSerializedObject = () => { };
const toBuffer = () => { };
const sortByProto = () => { };

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