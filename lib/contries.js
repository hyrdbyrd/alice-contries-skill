const cloneDeep = require('lodash/cloneDeep');
const { getContryByCapital, getCaptialByContry } = require('./helpers');

const { random } = require('./helpers');

const getQuestion = (locations, settings) => {
    const { onlyCapital, onlyContries } = settings;

    const originalLocations = cloneDeep(locations);

    const path = [];

    let capital;
    while (!capital) {
        const idx = random(0, locations.length - 1);
        path.push(idx);

        const location = locations[idx];

        if (location.capital)
            capital = location.capital;

        locations = location;
    }

    path.pop();

    let root = originalLocations;
    while (path.length)
        root = root[path.pop()];

    const whatIsContry = {
        question: getContryByCapital(capital.ru),
        answer: root.ru
    };

    const whatIsCaptial = {
        question: getCaptialByContry(root.ru),
        answer: capital.ru
    };

    if (onlyCapital) {
        return whatIsCaptial;
    } else if (onlyContries) {
        return whatIsContry;
    }

    return random(0, 1) ? whatIsContry : whatIsContry;
};

module.exports = { getQuestion };
