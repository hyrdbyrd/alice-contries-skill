const { json } = require('micro');

const { contries } = require('./lib/contries');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.statusCode = 404;
        return res.end('Not found :(');
    }

    const { request, session, version } = await json(req);

    const helloMessage =
        'Привет! Я помогу тебе подтянуть твои знания в географии!' +
        'Назови, пожалуйста, интересующий континент.' +
        'Если тебе не важно какой какой континент учить, скажи "Земля"' +
        'Если тебе надоест, просто скажи "Алиса, Хватит", и я тот час остановлюсь.';

    res.end(JSON.stringify(
        {
            version,
            session,
            response: {
                // В свойстве response.text возвращается исходная реплика пользователя.
                // Если навык был активирован без дополнительной команды,
                // пользователю нужно сказать "Hello!".
                text:
                    request.original_utterance || helloMessage,

                // Свойство response.end_session возвращается со значением false,
                // чтобы диалог не завершался.
                end_session: request.nlu.tokens.map(e => e.toLowerCase()).includes('хватит'),
            }
        }
    ));
};
