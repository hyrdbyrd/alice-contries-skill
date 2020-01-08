const { json } = require('micro');

const { toLowerCase } = require('./lib/helpers');
const { DataBase } = require('./lib/DataBase');
const { chat } = require('./lib/chat');

const db = new DataBase();

module.exports = async (req, res) => {
    const { request, session, version } = await json(req);

    const key = session.session_id;

    if (!db.get(key))
        db.add(key, { state: 'START' });

    res.end(JSON.stringify(
        {
            version,
            session,
            response: {
                text: chat(db, key, request.original_utterance),
                end_session: request.nlu.tokens.map(toLowerCase).includes('хватит'),
            }
        }
    ));
};
