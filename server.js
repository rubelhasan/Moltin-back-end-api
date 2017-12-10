const finalhandler = require('finalhandler')
const http = require('http')

class server {
  constructor (route) {
    this.route = route
  }
  run () {
    return http.createServer((req, res) => {
      this.route(req, res, finalhandler(req, res))
    })
  }
}

module.exports = {
  server: server
}
