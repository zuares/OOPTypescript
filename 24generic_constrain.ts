

// function generics25<T>(arg :T):T {
//     console.log(arg.length);
//     return arg;
// }


interface Length {
    length : number
}

function generics24<T extends Length> (arg : T) {
    console.log(arg.length);
    return arg;
}

const g24 = generics24('asfsdfs');
const g242 = generics24({length : 10, value : 200});

console.log(g24)
console.log(g242)
