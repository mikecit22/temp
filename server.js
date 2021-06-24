const express = require('express')
const redis = require('redis')
const app = express()
const port = 8080



app.get('/', (req, res) => {
  res.send('Hello World!')
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


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
