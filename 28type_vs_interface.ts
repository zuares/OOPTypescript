
type UserType = {
    name : string;
}

interface UserInterface {
    name : string;
}


// class User1 implements UserInterface {
//         name : string;
// }

// Interface hanya bisa memakai object type
// interface !== interface = string harus obj interface {} sedangkan type bisa keduanya
// Interface bisa di merge sedangkan type tidak 

// interface Dinosaurs {
//     name : string;
// }
// interface Dinosaurs {
//     weight : number;
// }

// class Dino implements Dinosaurs {
//     name : string;
//     weight : number;

//     constructor(name : string , weight : number) {
//         this.name = name;
//         this.weight = weight;
//     }
// }

// Sedangkan type tidak 
// type Dino = {
//     name : string;
// }

// type Dino = {
//     weight : number;
// }

// Interface bisa mengextends sebuah class sedangkan type tidak 
//  cara merge type 
type Name = {
    name : string
}
type Age = {
    age : number
}

type employ1 = Name & Age;
type employ2 = Name | Age;

const employee : employ2 = {
    name : "Sdfsfdsf"
}


// pakai interface ketika untuk membuat object  / class
// pakai seuah type jika membuat variable / function

// KONSISTEN

