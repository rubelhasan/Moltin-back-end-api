
const api_endpoint=process.env.API_ENDPOINT || '3000';
const db_endpoint=process.env.DB || '8081';
const server=require('./server').server;
const Route=require('router');
const router=Route();

const product=require('./api/product').product;
const item=new product(router);
const project=new server(router);
item.getProductList();
item.getProduct();
project.run().listen(api_endpoint);




console.log(`server running: ${api_endpoint}`);	