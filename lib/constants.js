const { Locales } = require('./types');

module.exports = {
    LOCATIONS: [
        {
            [Locales.ru]: 'Азия',
            [Locales.en]: 'Asia',
            contries: [
                {
                    [Locales.ru]: 'Россия',
                    [Locales.en]: 'Russia',
                    captial: {
                        [Locales.ru]: 'Москва',
                        [Locales.en]: 'Moscow'
                    }
                }
            ]
        },
        {
            [Locales.ru]: 'Америка',
            [Locales.en]: 'America',
            contries: [
                {
                    [Locales.ru]: 'США',
                    [Locales.en]: 'USA',
                    captial: {
                        [Locales.ru]: 'Вашингтон',
                        [Locales.en]: 'Washington'
                    }
                }
            ]
        }
    ];
};
