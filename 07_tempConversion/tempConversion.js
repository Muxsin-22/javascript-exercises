const convertToCelsius = function(fahrenheit) {
const c = (fahrenheit - 32) * 5/9;
return Math.round(c);
};
const convertToFahrenheit = function(celsius) {
  const f = (celsius * 9/5) + 32;
  return Math.round(f);
};
let toCelsius  =convertToCelsius(32);
console.log(toCelsius);
let ToFahrenheit = convertToFahrenheit(32);
console.log(ToFahrenheit);
// This is how we should think.
// The first step to take is think about conversion of both temperatures.
// The formula for converting to fahrenheit is f = (c * 9/5) + 32
// The formula for converting to celcius is c = (f - 32) * 5/9

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
