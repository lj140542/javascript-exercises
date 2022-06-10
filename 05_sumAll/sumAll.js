const sumAll = function(iFrom, iTo) {
    let tmp = 0; // used to swap parameters if needed
    let ret = 0;

    if(typeof(iFrom) != 'number' || typeof(iTo) != 'number') {
        return 'ERROR';
    }

    if(iFrom > iTo) {
        tmp = iFrom;
        iFrom = iTo;
        iTo = tmp;
    }

    if(iFrom < 0) {
        return 'ERROR';
    }

    for(let i=iFrom; i<=iTo; i++) {
        ret += i;
    }

    return ret;
};

// Do not edit below this line
module.exports = sumAll;
