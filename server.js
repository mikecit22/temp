const express = require('express')
const redis = require('redis')
const app = express()
const port = 8080



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/exit', (req, res) => {
  res.send('closing');
  process.exit(1)
})

app.get('/redis', (req, res) => {
  redis.createClient({
    host: req.query.host,
    port: req.query.port,
  }).on('ready', function (error) {
    if (error) {
      res.send('FAILED!')
    }
    res.send('CONNECTED!')
  })
})


let count = 1;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);

  setInterval(() => {
    console.log(`Counting ${count++}`)
  }, 3000)
})
