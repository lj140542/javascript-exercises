const leapYears = function(iYear) {
    if(iYear%100 == 0) {
        return (iYear%400==0);
    } else {
        return (iYear%4==0);
    }
};

// Do not edit below this line
module.exports = leapYears;
