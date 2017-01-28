const path = require('path')
const winston = require('winston')
const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
const routes = require('./routes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/static', express.static(path.join(__dirname, './../static')))
routes(app)

winston.level = 'debug'

app.listen(config.port, () => {
  winston.info(`Server started at localhost:${config.port}`)
})