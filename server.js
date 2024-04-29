// require('dotenv').config()

// const express = require('express')
// // const path = require('path');
// const app = express()

// const port = process.env.PORT || 9999

// app.use(express.static('public'))

// app.get('/healthcheck', (req, res) => {
//   res.send(`helpmybabies-e2e-auth is alive on ${port}!`);
// });

// app.listen(port, () => {
//   console.log(`helpmybabies-e2e-auth listening on port ${port}`)
// })

require('dotenv').config()

const express = require('express');
const app = express();
const path = require('path');

/****************************************************** 
 * API Content
 * Put server express routes at the beginning 
 * ****************************************************/ 
app.use(express.json());

const apiVersion = '/api/v' + process.env.API_VERSION

const router = require('./routes/route'); 
app.use(apiVersion, router);



/****************************************************** 
 * Static Content
 * ****************************************************/ 
let port = process.env.PORT || 9999

app.listen(port, () => {
    console.log(`helpmybabies E2E Test Server is live and running on ${port}.`);
});