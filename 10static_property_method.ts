class Ayam {
    static kaki:number = 2;

    static jalan() {
        console.log(`Ayam berjalan dengan ${this.kaki} kaki`);
    }

    getKaki() {
        console.log(Ayam.kaki)
    }

}


const ayam2 = new Ayam()
const ayam3 = new Ayam()
const ayam4 = new Ayam()
const ayam5 = new Ayam()
const ayam6 = new Ayam()

console.log(ayam2.getKaki())
console.log(ayam3.getKaki())
console.log(ayam4.getKaki())
console.log(ayam5.getKaki())
console.log(ayam6.getKaki())

Ayam.kaki = 4;


console.log(ayam2.getKaki())
console.log(ayam3.getKaki())
console.log(ayam4.getKaki())
console.log(ayam5.getKaki())
console.log(ayam6.getKaki())