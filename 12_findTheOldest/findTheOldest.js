const findTheOldest = function (people) {
    let today = new Date();
    let calculatedAge = 0;
    let highestAge = 0;
    let person;
    people.forEach(element => {
        if(element.hasOwnProperty("yearOfDeath")) {
            calculatedAge = element["yearOfDeath"] - element["yearOfBirth"];
        } else {
            calculatedAge = today.getFullYear() - element["yearOfBirth"];
        }  
        
        if(calculatedAge > highestAge) {
            highestAge = calculatedAge;
            person = element;
        } 
    });

    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
