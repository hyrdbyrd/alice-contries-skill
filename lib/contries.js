const cloneDeep = require('lodash/cloneDeep');
const { getContryByCapital, getCaptialByContry } = require('./helpers');

const { random } = require('./helpers');

const getQuestion = (locations, settings) => {
    const { onlyCapital, onlyContries } = settings;

    const originalLocations = cloneDeep(locations);

    const path = [];

    let capital;
    while (!capital) {
        if (locations.capital) {
            capital = locations.capital;
            break;
        }

        const idx = random(0, locations.contries.length - 1);
        path.unshift(idx);

        locations = locations.contries[idx];
    }

    let root = originalLocations;
    while (path.length)
        root = root.contries[path.pop()];

    const whatIsContry = {
        question: getContryByCapital(capital.name),
        answer: root.name
    };

    const whatIsCaptial = {
        question: getCaptialByContry(root.name),
        answer: capital.name
    };

    if (onlyCapital)
        return whatIsCaptial;
    else if (onlyContries)
        return whatIsContry;

    return random(0, 1) ? whatIsContry : whatIsContry;
};

module.exports = { getQuestion };
