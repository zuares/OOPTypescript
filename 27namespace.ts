namespace NameSpaceExample {

    export class Hewan2 {
        
        constructor (public name : string) {}
    }

    export const kodok = new Hewan2('kodox');
}

const belalang = new NameSpaceExample.Hewan2("Belelang tempur");

console.log(belalang);


