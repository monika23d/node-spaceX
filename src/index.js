var express = require( "express" );
var apiRouter = require('./api');
const cors = require('cors');
const path = require('path');
const serverless = require('serverless-http');
const router = express.Router();

    const app = express()
    app.use(cors()) // TO remove CORS error while calling directly from UI
    app.use('/api',apiRouter)
    app.use('/.netlify/functions/server', router); 

module.exports = app;
module.exports.handler = serverless(app);
  


