const { json } = require('micro');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.statusCode = 404;
        return res.end('Not found :(');
    }

    const { request, session, version } = await json(req);

    res.end(JSON.stringify(
        {
            version,
            session,
            response: {
                // В свойстве response.text возвращается исходная реплика пользователя.
                // Если навык был активирован без дополнительной команды,
                // пользователю нужно сказать "Hello!".
                text: request.original_utterance || 'Йо!',

                // Свойство response.end_session возвращается со значением false,
                // чтобы диалог не завершался.
                end_session: false,
            }
        }
    ));
};
