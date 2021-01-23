
function getData(a:any) {
    return a ;
}

const data1 = getData("String");
const data2 = getData(123);

// console.log(data1);
// console.log(data2);

function getData2<T>(a: T) {
    return a;
}

const data3 = getData2<string>(`Strings`);
const data4 = getData2<number>(123);
console.log(data3.length);
console.log(data4);