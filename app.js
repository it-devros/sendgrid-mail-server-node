
let express = require('express')
let http = require('http')
let bodyParser = require('body-parser')

const join = require('path').join
const port = process.env.PORT || 8000

let app = express()

app.use(bodyParser.json({limit: '50mb', extended: true}))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version, X-File-Name, Authorization')
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Credentials', true)

  if ('OPTIONS' === req.method) {
    res.sendStatus(200)
  }
  else {
    next()
  }
})


require('./router/index')(app)


let server = http.createServer(app)

server.listen(port, () => {
  console.log('Runing server on port: ' + port)
})

