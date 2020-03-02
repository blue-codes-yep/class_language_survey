const options = {
    host: '127.0.0.1',
    database: 'class_ranking'
};

const pgp = require('pg-promise')({
    query: function (e) {
        console.log('QUERY', e.query);
    }
})

const db = pgp(options);

module.exports = db;