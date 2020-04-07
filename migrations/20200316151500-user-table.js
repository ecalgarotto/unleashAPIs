'use strict';

exports.up = function(db, callback) {
    db.runSql(
        `CREATE TABLE users (
            id serial primary key,
            username varchar(255) NOT NULL,
            pass varchar(255) NOT NULL
          );`,
        callback
    );
};

exports.down = function(db, callback) {
    db.runSql(
        'ALTER TABLE client_instances DROP COLUMN "sdk_version";',
        callback
    );
};
