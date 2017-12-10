
const apiEndpoint = process.env.API_ENDPOINT || '3000'
const dbEndpoint = process.env.DB || '8081'
const Server = require('./server').server
const Route = require('router')
const router = Route()

const Product = require('./api/product').product
const item = new Product(router)
const project = new Server(router)
item.getProductList()
item.getProduct()
project.run().listen(apiEndpoint)
console.log(`server running: ${apiEndpoint}`)
