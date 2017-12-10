class urlHelper{
	constructor(name){
		this.moduleName=name;
	}
	makeUrl(name){
		return `${this.moduleName}/${name}`;
	}
}

module.exports={
	urlHelper:urlHelper
}