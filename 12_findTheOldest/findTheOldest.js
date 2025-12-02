const findTheOldest = function(people) {
    return people.sort((personA, personB) => 
        ((personA.yearOfDeath || new Date().getFullYear()) - personA.yearOfBirth) > ((personB.yearOfDeath || new Date().getFullYear()) - personB.yearOfBirth) ? 1 : -1
    )[people.length-1];

};

// Do not edit below this line
module.exports = findTheOldest;
