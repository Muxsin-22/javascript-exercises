const removeFromArray = function(array, ...myArg) {
    const newArr = [];
    array.forEach((item) => {
        if (!myArg.includes(item)) {
            newArr.push(item);
        }
    });
    return newArr;
    }
    const result = removeFromArray([[1,2,3,4],3]);
    console.log(result);
// Do not edit below this line
module.exports = removeFromArray;
