
class Hewan6 {
    constructor(public name:string=""){}

    bernafas() {
        console.log(`Sedang bernafas`);
    }
}

class Katak6 extends Hewan6 {
    bernafas() {
        console.log(`Malas bernafas`);
    }
}

const katak6 = new Katak6();
katak6.bernafas();