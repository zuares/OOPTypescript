
interface AndroidPhone {
    name : string;
    menu():void;
    home():void;
    back():void;
}


class Samsung implements AndroidPhone {
    name: string;

    constructor(name:string) {
        this.name = name;
    }

    menu(): void {
        console.log(`Menu tap`)
    }

    home(): void {
        console.log(`Home tap`)
    }

    back(): void {
        console.log(`Back tap`)
    }
    
}

class Asus implements AndroidPhone {
    name: string;

    constructor(name:string) {
        this.name = name;
    }

    menu(): void {
        console.log(`Menu tap`)
    }

    home(): void {
        console.log(`Home tap`)
    }

    back(): void {
        console.log(`Back tap`)
    }

}

class GameAndroid {
    private phone : AndroidPhone;

    constructor(phone : AndroidPhone) {
        this.phone = phone;
    }

    back() {
        console.log(`Kembali ke menu utama di game`);
    }

    menu() {
        this.phone.menu();
    }

    home() {
        this.phone.home();
    }

}



const samsung =  new Samsung('J2');

const game = new GameAndroid(samsung);


game.home();
game.back();
game.menu();



//  Iphone 

interface Apple {
    home():void;    
}


class Iphone {
    
}
