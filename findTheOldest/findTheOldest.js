let findTheOldest = function(people) {

    const now = new Date();
    const currentYear = now.getFullYear();
    
    let oldestAge = 0;
    let oldestPerson;
    let age;

    for (person of people) {

        if (person.yearOfDeath == undefined) {
            age = currentYear - person.yearOfBirth;
        }
        else {
            age = person.yearOfDeath - person.yearOfBirth;
        }

        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = person;
        }
    }

    return oldestPerson
}

module.exports = findTheOldest
