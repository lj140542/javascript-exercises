const repeatString = function(value, nbOfRepeat) {
    var ret = '';
    
    // CHECK FOR NEGATIVE NUMBERS
    if(nbOfRepeat<0) {
        return 'ERROR';
    }

    for(var i = 0; i<nbOfRepeat; i++) {
        ret += value;
    }

    return ret;
};

// Do not edit below this line
module.exports = repeatString;
