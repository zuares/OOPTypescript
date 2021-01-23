
class Store {
    private name : string = "Store A";
    private profit : number = 1000;

    getName():string {
        return this.name;
    }

    getProfit():number {
        return this.profit;
    }

}

class FashionProduct {
    private store : Store;
    private name : string;
    private price : number;

    constructor(name:string, price:number) {
        this.name = name;
        this.price = price;

        this.store = new Store();
    }

    sell():void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }

}

class TechProduct {
    private store : Store;
    private name : string;
    private price : number;

    constructor(name:string, price:number) {
        this.name = name;
        this.price = price;

        this.store = new Store();
    }

    sell():void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }

}


const baju = new FashionProduct(`Baju lengan panjang`, 50000);
baju.sell();

// --------------------------------------
interface IStore {
    name : string;
    profit : number;
    getProfit(): number;
}


class TokoLama implements IStore {
    name : string = "Store A";
    profit : number = 1000;

    getName():string {
        return this.name;
    }

    getProfit():number {
        return this.profit;
    }

}

class TokoBaru implements IStore {
    name : string = "Store A";
    profit : number = 2500;

    getName():string {
        return this.name;
    }

    getProfit():number {
        return this.profit;
    }

}


class HijabProduct {
    private store : IStore;
    private name : string;
    private price : number;

    constructor(store : IStore, name:string, price:number) {
        this.name = name;
        this.price = price;

        this.store = store;
    }

    sell():void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }

}

class FoodProduct {
    private store : IStore;
    private name : string;
    private price : number;

    constructor(store : IStore, name:string, price:number) {
        this.name = name;
        this.price = price;

        this.store = store;
    }

    sell():void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }

}

const tokoLama = new TokoLama();
const tokoBaru = new TokoBaru();

const hijabMahal = new HijabProduct(tokoLama, 'hijab mahal', 80000);
const hijabMahal2 = new HijabProduct(tokoBaru, 'hijab mahal', 80000);

hijabMahal.sell();
hijabMahal2.sell();