const helper=require('../helper/helper').urlHelper;
class product{
	constructor(route){
		this.router=route;
		this.urlHelper=new helper('/product');
	}
	_makeUrl(name){
		return this.urlHelper.makeUrl(name);
	}
	getProductList(req,res){
		let url=this._makeUrl('list');
		return	this.router.get(url, (req,res)=> {
			res.setHeader('Content-Type', 'text/plain; charset=utf-8')
			res.end('product List')
		})
	}
	getProduct(req,res){
		let url=this._makeUrl('view');
		return	this.router.get(url, (req,res)=> {
			res.setHeader('Content-Type', 'text/plain; charset=utf-8')
			res.end('Product View');
		})
	}
}



module.exports={
	product:product
}