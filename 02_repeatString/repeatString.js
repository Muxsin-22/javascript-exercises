const repeatString = function(str, num) {
   if (num <= 0) {
    return "";
   }
   let repeatStr = "";
   for (let i = 0; i < num; i++) {
    repeatStr += str;
   }
   return repeatStr;
};
console.log(repeatString("hey", 10));

// Do not edit below this line
module.exports = repeatString;
