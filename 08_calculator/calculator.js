const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return  a-b;
};

const sum = function(arr) {
	const result = arr.reduce((sum, current) => sum + current);
  return result;
};

const multiply = function(arr) {
	const result = arr.reduce((sum, current) => sum * current);
	return result;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
let number = 1;
for (let i = 1; i <= num; i++ ) {
  number*=i;
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
