
class Hewan4 {
    nama : string = '';
    kaki : number = 0;

    bernafas() {
        console.log(`Bernafas`);
    }
}

class Burung4 extends Hewan4 {
    warna: string = 'merah';
}

const burung4 = new Burung4();
burung4.nama ="Kenari";
burung4.kaki =2;
burung4.warna ="Kuning";

console.log(burung4)
burung4.bernafas();