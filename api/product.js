'use strict'
const Helper = require('../helper/helper').Helper
const DataModel = require('../model').Model 
class product {
  constructor (route) {
    this.router = route
    this._modulelName = 'product'
    this._helper = new Helper(`/${this._modulelName}`)
    this._model = new DataModel(this._modulelName)
    this._route()
  }
  _makeUrl (name) {
    return this._helper.url.makeUrl(name)
  }
  getProductList (req, res) {
    let url = this._makeUrl('list')
    return this.router.get(url, (req, res) => {
      const product = this._model.getModel()
      this._helper.response.render(product, res)
    })
  }
  getProduct (req, res) {
    let url = this._makeUrl('view')
    return this.router.get(url, (req, res) => {
      this._helper.response.render('Product view', res)
    })
  }
  saveApiSource () {
    let url=this._makeUrl('saveapisource')
    this.router.get(url, (req, res) => {
      this._model.save().then(() => {
        this._helper.response.render('save item', res)
      })
    })
  }
  _route () {
    this.getProduct()
    this.getProductList()
    this.saveApiSource()
  }
}

module.exports = {
  product: product
}
