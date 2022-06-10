const removeFromArray = function(collection) {
    for(let i = 1; i<arguments.length; i++) {
        let intruder = arguments[i];
        while(collection.indexOf(intruder) >= 0) {
            collection.splice(collection.indexOf(intruder),1);
        }
    }
    
    return collection;
};

// Do not edit below this line
module.exports = removeFromArray;
