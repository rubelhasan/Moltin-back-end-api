class response {
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
class url extends response {
  constructor () {
    super()
  }
  makeUrl (name) {
    return `${this.moduleName}/${name}`
  }
}

class Helper extends url {
  constructor (name) {
    super()
    this.moduleName = name
  }
}

module.exports = {
  Helper: Helper
}
