"use strict"

require('dotenv').config()
const PORT          = process.env.PORT || 8080;
const express       = require("express");
// const WebSocket     = require('ws');
// const SocketServer  = WebSocket.Server;
const uuidV4        = require('uuid/v4');
const app           = express();



// app.use(express.static("public"));

const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));