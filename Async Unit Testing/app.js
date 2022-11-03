const {fetchData} = require('./http');
const {printTitle} = require('./util');

const button = document.querySelector('button');

const loadTitle = () => {
    return fetchData().then(extractedData => {
        const title = extractedData.title;
        const transformedTitle = title.toUpperCase();
        return transformedTitle;
    });
};


button.addEventListener('click', printTitle);

exports.printTitle = printTitle;