// adds 2 to inputted number
// ex: addTwo(5); -> 7
// ex: addTwo(6); -> 8
function addTwo(number) {
  return number + 2;
};

let addTwo = number => {number + 2};

// adds the two inputted numbers together
// ex: add(5, 10); -> 15
function add(num1, num2) {
  return num1 + num2;
}

let add = (num1, num2) => {num1 + num2};

// adds all three inputted numbers together
// ex: addd(1,2,3); -> 6
// ex: addd(2,4,2); -> 8
function addd(value1, value2, value3) {
  return value1 + value2 + value3;
}

let addd = (value1, value2, value3) => {value1 + value2 + value3};

// subtracts the second inputted number from the first inputted number
// ex: subtract(5, 10); -> -5
function subtract(n1, n2) {
  return n1 - n2;
}

let subtract = (n1, n2) => {n1 + n2};

// multiplies the inputted number by 2
// ex: multiplyByTwo(5); -> 10
// ex: multiplyByTwo(6); -> 12
function multiplyByTwo(numero) {
  return numero * 2;
}

let multiplyByTwo = numero => {numero * 2};

// multplies the two inputted numbers together
// ex: multiply(1,2); -> 2
// ex: multiply(2,2); -> 4
function multiply(val1, val2) {
  return val1 * val2;
}

let multiply = (val1, val2) => {val1 * val2};

// multiplies all three inputted numbers together
// ex: multiplyy(1,2,3); -> 6
// ex: multiplyy(2,2,3); -> 12
function multiplyy(a, b, c) {
  return a * b * c;
}

let multiply = (a, b, c) => {a * b * c};

// returns the square of the inputted number
// ex: square(5); -> 25
function square(value) {
  return value * value;
}

let square = value => {value * value};

// determines if the number is odd
// outputs true if the number is odd
// outputs false if the number is even
// ex: isOdd(4); -> true
// ex: isOdd(5); -> false
function isOdd(num) {
  if(num % 2 === 0){
    return true;
  }else {
    return false;
  }
}

let isOdd = num => num % 2 === 0 ? true : false;

// determines if the number is negative
// outputs true if the number is negative
// outputs false if the number is zero or positive
// ex: isNegative(-1); -> true
// ex: isNegative(1); -> false
// ex: isNegative(0); -> false
function isNegative(num) {
  if(num < 0){
    return true;
  }else {
    return false;
  }
}

let isNegative = num => num < 0 ? true : false;

// returns the absolute value of the inputted number
// ex: positive(-1); -> 1
// ex: positive(1); -> 1
function positive(num) {
  if(num < 0){
    return num * (-1);
  }else {
    return num;
  }
}

let positive = num => num < 0 ? num * -1: num;

// Returns boolean of whether argument is classified as a Numbe'r object
// isNumber(5); → true
// isNumber('hi'); → false
function isNumber(value) {
  if(typeof value === 'number'){
    return true;
  }else {
    return false;
  }
}

let isNumber = value => value === 'number' ? true : false;

// Returns boolean of whether argument is classified as an Array object
// isArray(5); → false
// isArray([1,2,3]); → true
function isArray(value) {
  if(Array.isArray(value)){
    return true;
  }else {
    return false;
  }
}

let isArray = (value) => Array.isArray(value) ? true : false;

// Returns boolean of whether argument is classified as an Object
// isObject(5); → false
// isObject([1,2,3]); → false
function isObject(value) {
  if(Object.isObject(value)) {
    return true;
  }else {
    return false;
  }
}

let isObject = (value) => Object.isObject(value ? true : false)

// return boolean of whether argument is classified as null
// isNull(null); -> true
// isNull(5); -> false
function isNull(value) {
  if (value === null){
    return true;
  }else {
    return false;
  }
}

let isNull = value => value === null ? true : false;