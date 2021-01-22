class Hewan5 {
    constructor(public nama : string ,public kaki:number) {}
}

class Katak5 extends Hewan5 {
    constructor(nama:string, kaki:number, public beracun:boolean) {super(nama, kaki) }
}

const katak5 = new Katak5("katak", 4, false);
console.log(katak5);