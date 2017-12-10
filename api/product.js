const Helper = require('../helper/helper').Helper
const moltin = require('@moltin/sdk')
const Moltin = moltin.gateway({
  client_id: process.env.MOLTIN_CLIENT_ID,
  client_secret: process.env.MOLTIN_CLIENT_SECRET
})
class product {
  constructor (route) {
    this.router = route
    this._helper = new Helper('/product')
  }
  _makeUrl (name) {
    return this._helper.makeUrl(name)
  }
  getProductList (req, res) {
    let url = this._makeUrl('list')
    return this.router.get(url, (req, res) => {
      const products = Moltin.Products.All()
      products.then((product) => {
        this._helper.render(product, res)
      })
    })
  }
  getProduct (req, res) {
    let url = this._makeUrl('view')
    return this.router.get(url, (req, res) => {
      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      res.end('Product View')
    })
  }
}

module.exports = {
  product: product
}
