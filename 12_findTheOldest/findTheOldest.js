const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
]

const findTheOldest = function(oldest) {
    const oldestPerson = oldest.sort((a,b) => 
    a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth? 1: -1);
    return oldestPerson[0];   
}

console.log(findTheOldest())
    

// Do not edit below this line
module.exports = findTheOldest;
