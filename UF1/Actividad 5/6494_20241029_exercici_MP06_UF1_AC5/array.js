let arr = [1,2,3];
let arr2 = [];

for (let elem of arr) {
    arr2.push(elem*2);
}

// No cambia
arr.forEach((elem) => {
    elem = elem*2;
});

// devuelve
arr.map((elem) => {
    return elem = elem*2;
});
// Funciona lo mismo
arr.map(elem=>elem = elem*2);