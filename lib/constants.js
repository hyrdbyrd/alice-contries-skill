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
        {
            [Locales.ru]: 'Европа',
            [Locales.en]: 'Europe',
            contries: [
                {
                    [Locales.ru]: 'Австрия',
                    [Locales.en]: 'Austria',
                    captial: {
                        [Locales.ru]: 'Вена',
                        [Locales.en]: 'Vienna'
                    }
                }
            ]
        }
        {
            [Locales.ru]: 'Австралия и Океания',
            [Locales.en]: 'Australia and Oceania',
            contries: [
                {
                    [Locales.ru]: 'Австралия',
                    [Locales.en]: 'Australia',
                    captial: {
                        [Locales.ru]: 'Канберра',
                        [Locales.en]: 'Canberra'
                    }
                }
            ]
        }
        {
            [Locales.ru]: 'Африка',
            [Locales.en]: 'Africa',
            contries: [
                {
                    [Locales.ru]: 'Алжир',
                    [Locales.en]: 'Algeria',
                    captial: {
                        [Locales.ru]: 'Алжир',
                        [Locales.en]: 'Algeria'
                    }
                }
            ]
        }
    ]
};
