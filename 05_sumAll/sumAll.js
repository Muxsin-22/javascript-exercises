const sumAll = function(a,b) {
let sum = 0;
for (let num = a; num <= b; num++) {
    sum+=num;
}
return sum;
};
let result = sumAll(2,1000000);
console.log(result);

// Do not edit below this line
module.exports = sumAll;
