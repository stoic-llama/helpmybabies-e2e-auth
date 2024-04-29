require('dotenv').config()

const express = require('express')
// const path = require('path');
const app = express()

const port = process.env.PORT || 9999

app.use(express.static('public'))

app.get('/healthcheck', (req, res) => {
  res.send(`helpmybabies-e2e-auth is alive on ${port}!`);
});

app.listen(port, () => {
  console.log(`helpmybabies-e2e-auth listening on port ${port}`)
})