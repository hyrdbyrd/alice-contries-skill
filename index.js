const { json } = require('micro');

const { contries } = require('./lib/contries');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.statusCode = 404;
        return res.end('Not found :(');
    }

    const { request, session, version } = await json(req);

    const helloMessage =
        'Привет! Я помогу вам подтянуть ваши знания в географии!' +
        'Назовите, пожалуйста, интересующий континент.' +
        'Если вам не важно какой какой континент учить, скажи "Земля".' +
        'Если вам надоест, просто скажи "Алиса, Хватит", и я тот час остановлюсь.';

    let question = request.original_utterance && contries(request);
    question = question.question || 'Хм, что-то пошло нет так.';

    res.end(JSON.stringify(
        {
            version,
            session,
            response: {
                // В свойстве response.text возвращается исходная реплика пользователя.
                // Если навык был активирован без дополнительной команды,
                // пользователю нужно сказать "Hello!".
                text:
                    request.original_utterance
                        ? helloMessage
                        : question,

                // Свойство response.end_session возвращается со значением false,
                // чтобы диалог не завершался.
                end_session: request.nlu.tokens.map(e => e.toLowerCase()).includes('хватит'),
            }
        }
    ));
};
