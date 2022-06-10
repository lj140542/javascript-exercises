const reverseString = function(value) {
    let ret = '';

    for(let i = value.length-1; i>=0; i--) {
        ret += value[i];
    }

    return ret;
};

// Do not edit below this line
module.exports = reverseString;
