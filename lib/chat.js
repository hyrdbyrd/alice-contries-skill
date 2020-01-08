const { getQuestion } = require('./contries');

const { LOCATIONS } = require('./constants');

const { correctMessage, incorrectMessage } = require('./helpers');

const chat = (message, chatState) => {
    message = message.toLowerCase();

    const { state } = chatState;

    switch (state) {
        case 'START':
            chatState.state = 'SETTINGS.START';
            // Чтобы не было пересечений сессии
            chatState.contry = undefined;

            return 'Привет. Назовите, пожалуйста, интересующий вас континент. Если вам не важно какой континент учить, скажите "Земля"';
        case 'SETTINGS.START':
            const foundContry = LOCATIONS.contries.find(e => message.includes(e.name.toLowerCase()));

            if (foundContry)
                chatState.contry = foundContry;
            else if (message.includes('земля'))
                chatState.contry = LOCATIONS;

            if (chatState.contry) {
                chatState.state = 'SETTINGS.WHAT_IS_STUDY';
                return 'Что вы хотите выучить? Столицы или Страны? Если не важно, так и скажите - буду всё подряд спрашивать.';
            }

            return 'Не смогла найти такой континент, попробуйте еще раз.';
        case 'SETTINGS.WHAT_IS_STUDY':
            if (message.includes('страны') || message.includes('страна'))
                chatState.onlyContries = true;
            else if (message.includes('столицы') || message.includes('столица'))
                chatState.onlyCapital = true;
            else if (message.includes('не важно') || message.includes('важно')) {
                chatState.onlyCapital = false;
                chatState.onlyContries = false;
            }

            if ('onlyCapital' in chatState || 'onlyContries' in chatState) {
                chatState.state = 'STUDY';

                const { answer, question } = getQuestion(chatState.contry, { ...chatState });

                chatState.answer = answer;
                chatState.question = question;

                return `Отлично, приступим! ${question}`;
            }

            return 'Не совсем поняла вас. Выберите, пожалуйста, - "Стоилцы", "Страны" или "Не важно".';
        case 'STUDY':
            if (message.includes('хватит'))
                return 'Заканчиваю';

            const { answer: prevAnswer } = chatState;
            const { answer, question } = getQuestion(chatState.contry, { ...chatState });

            chatState.answer = answer;
            chatState.question = question;

            if (message.includes(prevAnswer))
                return correctMessage(question);
            else
                return incorrectMessage(question, prevAnswer);
        default:
            chatState.state = 'SETTINGS.START';
            return 'Назовите, пожалуйста, интересующий вас континент. Если вам не важно какой континент учить, скажите "Земля"';
    }
};

module.exports.chat = chat;
