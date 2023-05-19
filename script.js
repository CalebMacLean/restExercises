// Refactoring
const filterOutOdds = (...rest) => rest.filter(arg => arg % 2 === 0);

// Find Min Function
const findMin = (...nums) => nums.reduce((min, nxt) => min < nxt ? min : nxt);

// Merge Objects Function
function mergeObjects(objOne, objTwo) {
    const result = {...objOne, ...objTwo};
    return result;
};

// Double & Return Args Function
function doubleAndReturnArgs(arr, ...nums) {
    const doubleArr = arr.map(val => val * 2);
    const doubleNums = nums.map(val => val * 2);
    return [...doubleArr, ...doubleNums];
};

// Slice and Dice Section
const removeRandom = items => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
};

const extend = (arr1, arr2) => [...arr1, ...arr2];

const addKeyVal = (obj, key, val) => {
    const resultObj = {...obj};
    resultObj[key] = val;
    return resultObj;
};

const removeKey = (obj, key) => {
    const noKeyObj = {...obj};
    delete noKeyObj[key];
    return noKeyObj;
};

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
};

const update = (obj, key, val) => {
    const updatedObj = {...obj};
    updatedObj[key] = val;
    return updatedObj;
}
