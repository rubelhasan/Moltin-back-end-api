
class product{
	constructor(route){
		this.router=route;
		this.name
	}
	getProductList(req,res){
		return	this.router.get('/', (req,res)=> {
			res.setHeader('Content-Type', 'text/plain; charset=utf-8')
			res.end('Hello World!')
		})
	}
}



module.exports={
	product:product
}