
abstract class Hewan {
        name:string;

        constructor(name:string) {
            this.name = name;
        }

        makan():void {
            console.log(`${this.name} sedang makan`);
        }

        abstract bergerak():void;

}

class Kucing extends Hewan {
    constructor() {
        super("kucing");
    }

    bergerak():void {
        console.log(`${this.name} bergerak`)
    }
}

