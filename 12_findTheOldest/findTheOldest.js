function getAge(person) {
    let retval = "yearOfDeath" in person ?
        person.yearOfDeath - person.yearOfBirth : 
        new Date().getFullYear() - person.yearOfBirth;
    
    console.log(retval);
    return retval;
}

const findTheOldest = function(people) {
    return people.reduce((acc, curr) => {
        return getAge(curr) > getAge(acc) ? curr : acc;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
