class ProductA {
    private _price:number = 0;
    private discount:number = 0.05;

    get price() {
        return this._price;
    }

    set price(a : number) {
        this._price = a - (a * this.discount);
    }
}

const productA = new ProductA();
productA.price = 2000;
console.log(productA);