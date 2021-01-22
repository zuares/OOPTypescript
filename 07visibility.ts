
class Hewan7 {
    constructor(public nama:string, private kaki:number, protected mamalia:boolean){}

    berjalan() {

    }
}

class Katak7 extends Hewan7 {
    private umurTelur : number = 4;
    private umurKecebong : number = 7;
    private umurKatak : number = 90;

    getUmur() {
        console.log(this.umurTelur + this.umurKecebong + this.umurKatak);
        this.mamalia;
    }

}

const katak7 = new Katak7("nama", 2, false);
