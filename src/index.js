var express = require( "express" );
var apiRouter = require('./api');
const cors = require('cors');
const serverless = require('serverless-http');

//module.exports = () => {
    const app = express()
    const router = express.Router();
    app.use(cors()) // TO remove CORS error while calling directly from UI
    router.get('/', (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello from Express.js!</h1>');
        res.end();
      });
    app.use('/.netlify/functions/server',router)
//     return app
// }

module.exports  = app
module.exports.handler = serverless(app);
