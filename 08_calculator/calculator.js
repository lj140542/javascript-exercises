const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(arr) {
  let result = 0;

  for (let cpt = 0; cpt < arr.length; cpt++) {
    result += arr[cpt];
  }

  return result;
};

const multiply = function(arr) {
  if (arr.length == 0) {
    return 0;
  }

  let result = arr[0];

  for (let cpt = 1; cpt < arr.length; cpt++) {
    result = result * arr[cpt];
  }

  return result;
};

const power = function(x,y) {
  if (y == 0) {
    return 0;
  }

  let result = x;

  for (let cpt = 1; cpt < y; cpt++) {
      result = result * x;
  }

  return result;
};

const factorial = function(x) {
	let result = 1;

  for (let cpt = 1; cpt <= x; cpt++) {
    result = result * cpt;
  }

  return result;
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
