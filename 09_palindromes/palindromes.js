const palindromes = function (testedString) {
    testedString = testedString.toUpperCase();
    testedString = testedString.replaceAll(' ','');
    testedString = testedString.replace(/[^\w\s]/gi, '')

    let revertedString = '';
    for (let i = testedString.length-1; i >= 0; i--) {
        revertedString += testedString[i];
    }

    return (testedString == revertedString);
};

// Do not edit below this line
module.exports = palindromes;
