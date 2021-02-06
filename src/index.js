var express = require( "express" );
var apiRouter = require('./api');

module.exports = () => {
    const app = express()
    app.use('/api',apiRouter)
    return app
}


