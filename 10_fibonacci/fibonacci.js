const fibonacci = function(x) {
    let tmp = 0;
    let first = 0;
    let second = 1;

    if (x <= 0) {
        return "OOPS";
    }

    for (let cpt = 1; cpt < x; cpt++) {
        tmp = second;
        second += first;
        first = tmp;
    }

    return second;
};

// Do not edit below this line
module.exports = fibonacci;
