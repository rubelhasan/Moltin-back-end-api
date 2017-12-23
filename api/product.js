const Helper = require('../helper/helper').Helper
const Moltin = require('../moltin').Moltin

class product {
  constructor (route) {
    this.router = route
    this._helper = new Helper('/product')
    this._route()
  }
  _makeUrl (name) {
    return this._helper.url.makeUrl(name)
  }
  getProductList (req, res) {
    let url = this._makeUrl('list')
    return this.router.get(url, (req, res) => {
      const products = Moltin.Products.With('files, main_images, collections').All()
      products.then((product) => {
        this._helper.response.render(product, res)
      })
    })
  }
  getProduct (req, res) {
    let url = this._makeUrl('view')
    return this.router.get(url, (req, res) => {
      this._helper.response.render('Product view', res);
    })
  }
  _route () {
    this.getProduct()
    this.getProductList()
  }
}

module.exports = {
  product: product
}
