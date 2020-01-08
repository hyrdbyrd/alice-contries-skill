const cloneDeep = require('lodash/cloneDeep');

const { toLowerCase, random } = require('./helpers');
const { LOCATIONS } = require('./constants');
const { Locales } = require('./types');

const getQuestion = (locations, lang = Locales.ru) => {
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

    if (random(0, 1))
        return {
            question: `Как называют страну, столица которой ${capital[lang]}?`,
            answer: root[lang]
        };
    else
        return {
            question: `Какая столица у страны ${root[lang]}`,
            answer: capital[lang]
        };
};

module.exports.contries = (() => {
    let checkedContry;
    let answer;

    return request => {
        if (!checkedContry) {
            if (request.nlu.tokens.map(toLowerCase).includes('земля'))
                checkedContry = LOCATIONS;
            else
                checkedContry = request.nlu.tokens.map(toLowerCase).find(e => LOCATIONS.some(contry => contry.ru === e));
        }

        if (checkedContry) {
            const { question, answer: nextAnswer } = getQuestion();

            answer = nextAnswer;
            return { question }
        }
    };
})();
