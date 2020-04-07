'use strict';

const auth = require('basic-auth');
const pgp = require('pg-promise')( /* initialization options */ );

const db = pgp(process.env.DATABASE_URL); // database instance;

function clientAuthentication(app){
    app.use('/api/', (req, res, next) => {
        const credentials = auth(req);

        if (credentials) {
            // select and return a single user name from id:
            db.one('SELECT id, username FROM users WHERE username = $1 and pass = $2', [credentials.name, credentials.pass])
                .then(user => {
                    next();
                })
                .catch(error => {
                    return res
                        .status('401')
                        .set({ 'WWW-Authenticate': 'Basic realm="example"' })
                        .end('access denied');
                });

            console.log(credentials.name, credentials.pass);

        } else {
            return res
                .status('401')
                .set({ 'WWW-Authenticate': 'Basic realm="example"' })
                .end('access denied');
        }
    });
}

module.exports = clientAuthentication;