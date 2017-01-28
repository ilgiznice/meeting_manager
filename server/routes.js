const path = require('path')

const staticPath = `${__dirname}/../static/`

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'))
  })
}
