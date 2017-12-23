const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('model/product.json')
const db = low(adapter)
const Moltin = require('../moltin').Moltin

class DataModel {
  constructor (modelName) {
    this._model = modelName
  }
  save () {
    const products = Moltin.Products.With('files, main_images, collections').All()
    return products.then((item) => {
      return db.defaults({
        content: item
      }).write()
    })
  }
  getModel () {
    const model = db.get('content').value()
    return model
  }
}
module.exports = {
  Model: DataModel
}
