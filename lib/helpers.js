const random = (min, max) => Math.floor(Math.random() * (max - min + 1));
const toLowerCase = e => e.toLowerCase();

module.exports = {
    random,
    toLowerCase,
    getContryByCapital: capital => {
        const items = [
            `У какой страны столица ${capital}?`,
            `Как называют страну, столица которой ${capital}?`,
            `Страну, у которой столица ${capital}, называют...`,
            `Это что за страна такая, в которой столица ${capital}?!`,
            `Страна, у которой столица ${capital}, обычно называют...`,
            `Что за страна такая, в которой сталицу называют ${capital}?`,
        ];

        return items[random(0, items.length - 1)];
    },
    getCaptialByContry: contry => {
        const items = [
            `Что за столица такая, у которой страну зовут ${contry}?`,
            `Столица, у которой страна ${capital}, обычно называют...`,
            `Если страну называют ${contry}, то как называют столицу?`,
            `Как могли обозвать столицу, если страну называют ${contry}?`
        ];

        return items[random(0, items.length - 1)];
    },
    correctMessage: newQuestion => {
        const items = [
            `Верно! Продолжим. ${newQuestion}`,
            `Правильно! Так держать! ${newQuestion}`,
            `Отлично! Но что на счет следующего вопроса? ${newQuestion}`,
            `Ага!.. Верно... Тогда что на счёт этого: ${newQuestion}`,
            `Ну, допустим, правильно, но что вы скажете на это: ${newQuestion}`
        ];

        return items[random(0, items.length - 1)];
    },
    incorrectMessage: (newQuestion, correctAnswer) => {
        const items = [
            `Неверно! Правильный ответ ${correctAnswer}. Продолжим. ${newQuestion}`,
            `Не совсем так. В действительности, верный ответ ${correctAnswer}. ${newQuestion}`,
            `Звучит здорово, но это неверный ответ. Правильным ответом является ${correctAnswer}. Давайте продолжим. ${newQuestion}`,
            `Ага!.. Неверно... Верный ответ это ${correctAnswer}. Не стоит унывать, давайте продолжим. ${newQuestion}`,
            `Ну, это никуда не годиться! Верный ответ будет ${correctAnswer}. Давайте еще! ${newQuestion}`
        ];

        return items[random(0, items.length - 1)];
    }
};
