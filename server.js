'use strict';

const unleash = require('./lib/server-impl');
const basicAuth = require('./basic-auth-hook');
  
//   // Optional.
//   // If you want to get access_token for a specific resource, you can provide the resource here; otherwise,
//   // set the value to null.
//   // Note that in order to get access_token, the responseType must be 'code', 'code id_token' or 'id_token code'.
//   exports.resourceURL = 'https://graph.windows.net';
  
//   // The url you need to go to destroy the session with AAD
//   exports.destroySessionUrl = 'https://login.microsoftonline.com/common/oauth2/logout?post_logout_redirect_uri=http://localhost:4242';
  
//   // If you want to use the mongoDB session store for session middleware, set to true; otherwise we will use the default
//   // session store provided by express-session.
//   // Note that the default session store is designed for development purpose only.
//   exports.useMongoDBSessionStore = false;
  
//   // If you want to use mongoDB, provide the uri here for the database.
//   exports.databaseUri = 'mongodb://localhost/OIDCStrategy';
  
//   // How long you want to keep session in mongoDB.
//   exports.mongoDBSessionMaxAge = 24 * 60 * 60;  // 1 day (unit is second)

  
unleash
    .start({
        databaseUrl: process.env.DATABASE_URL,
        // secret: 'super-duper-secret',
        //adminAuthentication: 'none',
        preRouterHook: basicAuth,
        //preRouterHook: app => {
            // adminAuthentication(app)
            //basicAuth(app);
        //},
    })
    .then(server => {
        console.log(
            `Unleash APIs started on https://localhost:${server.app.get('port')}`
        );
    });
