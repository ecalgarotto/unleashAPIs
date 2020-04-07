'use strict';

// export module version
require('pkginfo')(module, 'version');
const version = module.exports.version;
const clientApiDef = require('./client-api/api-def.json');

const apiDef = {
    name: 'unleash-server',
    version,
    uri: '/api',
    links: {
        client: {
            uri: '/api/client',
            links: clientApiDef.links,
        },
    },
};

module.exports = apiDef;
