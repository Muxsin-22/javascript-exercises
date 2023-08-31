const palindromes = function (str) {
    const revertStr = str.split('').reverse().join('');
    return revertStr === str;
};

// Do not edit below this line
module.exports = palindromes;
