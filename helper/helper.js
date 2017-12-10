class Response {
  _makeJson (content) {
    const response = {
      statusCode: 200,
      body: content
    }
    return JSON.stringify(response)
  }
  render (content, res) {
    const bodyContent = this._makeJson(content)
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(bodyContent)
  }
}
class Url {
  constructor (name) {
    this.moduleName = name
  }
  makeUrl (name) {
    return `${this.moduleName}/${name}`
  }
}

class Helper {
  constructor (name) {
    this.moduleName = name
    this.url = new Url(name)
    this.response = new Response()
  }
}

module.exports = {
  Helper: Helper
}
