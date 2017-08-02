"use strict"

// require('dotenv').config()
const PORT          = process.env.PORT || 8080;
const express       = require("express");
// const WebSocket     = require('ws');
// const SocketServer  = WebSocket.Server;
// const uuidV4        = require('uuid/v4');
// const app           = express();

const elements = [
  { name: 'coffee' },
  { name: 'espresso' },
  { name: 'steamed milk' },
  { name: 'milk' },
  { name: 'sugar' }
]

const productDB = [
  { name: 'drip coffee',
    cost: 4.00,
    components: ['coffee'],
    modifiers: [
      { name: 'milk', max: 5 },
      { name: 'sugar', max: 5 }
    ]
  },
  { name: 'latte',
    cost: 5.00,
    components: ['espresso', 'steamed milk'],
    modifiers: [
      { name: 'chocolate syrup', max: 1 },
      { name: 'whipped cream', max: 1 }
    ]
  },
  { name: 'smoothie',
    cost: 3.00,
    components: ['espresso', 'steamed milk'],
    modifiers: [
      { name: 'chocolate syrup', max: 1 },
      { name: 'whipped cream', max: 1 }
    ]
  }
]

function findElement(name) {
  return elements.find(function(elem) {
    return elem.name === name
  })
}

// app.use(express.static("public"));

const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))

server.get('/api/products', (req, res) => {
  res.contentType('json')
  res.send(JSON.stringify({ products: productDB, elements }))
})

server.listen(PORT, () => console.log(`Listening on ${ PORT }`));