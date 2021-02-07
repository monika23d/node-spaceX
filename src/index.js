var express = require( "express" );
var apiRouter = require('./api');
const cors = require('cors');

module.exports = () => {
    const app = express()
    app.use(cors())
    app.use('/api',apiRouter)
    return app
}


