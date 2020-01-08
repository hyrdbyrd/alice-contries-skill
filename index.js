const { json } = require('micro');

const { toLowerCase } = require('./lib/helpers');

const { chat } = require('./lib/chat');

const db = {};

module.exports = async (req, res) => {
    const { request, session, version } = await json(req);

    const chatState = db[session.session_id] || (db[session.session_id] = { state: 'START' });

    res.end(JSON.stringify(
        {
            version,
            session,
            response: {
                text: chat(request.original_utterance, chatState),
                end_session: request.nlu.tokens.map(toLowerCase).includes('хватит'),
            }
        }
    ));
};
