const getTheTitles = function(books) {
    let bookNames = [];
    books.forEach(element => {
        bookNames.push(element["title"]);
    });

    return bookNames;
};

// Do not edit below this line
module.exports = getTheTitles;
