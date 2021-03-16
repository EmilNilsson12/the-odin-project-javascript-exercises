const getTheTitles = function(books) {
    const titles = [];

    for (book of books) {
        titles.push(book.title)
    }

    return titles

}

module.exports = getTheTitles;
