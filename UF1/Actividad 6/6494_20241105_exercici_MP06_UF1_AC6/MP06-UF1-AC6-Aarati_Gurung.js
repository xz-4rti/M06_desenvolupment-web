// 1. Quina és la diferència de comportament entre aquests dos fragments de codi? Per què?
// Fragment A
// window.onload = ()=>{
//     let items = document.querySelectorAll('.item');
//     console.log(items.length);
//     items[items.length-1].remove();
//     console.log(items.length);
// }

/**
 * Utiliza document.querySelectorAll que retorna un NodeList
 * La longitud no cambia tras eliminar un elemento debido a que Nodlist es
 * estático
 */

// Fragment B
// window.onload = ()=>{
//     let items = document.getElementsByClassName('item');
//     console.log(items.length);
//     items[items.length-1].remove();
//     console.log(items.length);
// }

/**
 * La longitud disminuye tras eliminar un elemento porque HTMLCollection 
 * es dinámico y refleja cambios en el DOM automáticamente.
 */

// ---------------------------------------------------------------------------------

let lista = ["Cervantes", "Quevedo", "Lope de Vega", "Calderón"];

// La resta de tasques es fan a partir de la variable llista. Printa per consola, en cada cas, el resultat de l'operació.

// 2. Afegeix un element al final de la llista
lista.push("element 1");
console.log(lista);

// ---------------------------------------------------------------------------------

// 3. Elimina el darrer element de la llista
lista.pop();
console.log(lista);

// ---------------------------------------------------------------------------------

// 4. Elimina el primer element de la llista
lista.shift();
console.log(lista);

// ---------------------------------------------------------------------------------

// 5. Afegeix un element al principi de la llista
lista.unshift("element 2")
console.log(lista);

// ---------------------------------------------------------------------------------

// 6. Afegeix tres elements entre "Quevedo" i "Lope de Vega"
lista.splice(2, 0, "element 3", "element 4", "element 5");
console.log(lista);

// ---------------------------------------------------------------------------------

// 7. Elimina el segon i el tercer elements de la llista
lista.splice(1, 2);
console.log(lista);

// ---------------------------------------------------------------------------------

// 8. Crea una llista2 amb els dos darrers elements de la llista (mètode splice)
let lista2 = lista.splice(-2);
// lista.splice(2, 2);
console.log(lista2);

// ---------------------------------------------------------------------------------

// 9. Crea una llista3 amb els dos darrers elements de la llista (mètode slice)
let lista3 = lista.slice(-2);
console.log(lista3);

// ---------------------------------------------------------------------------------

// 10. Concatena llista3 al final de llista2
lista2 = lista2.concat(lista3);
console.log(lista2);

// ---------------------------------------------------------------------------------

// 11. Assigna llista2 a un nou array llista4 i comprova que la còpia s'ha fet per referència
let lista4 = lista2;
console.log(lista4 == lista2);

// ---------------------------------------------------------------------------------

// 12. Comprova si llista2 i llista4 tenen els mateixos elements


// ---------------------------------------------------------------------------------

// 13. Comprova si llista4 és un array.
console.log(Array.isArray(lista4));

// ---------------------------------------------------------------------------------

// 14. Serveix aquesta instrucció per eliminar correctament l'element de la llista
// delete llista4[1];
delete lista4[1];
console.log(lista);

// ---------------------------------------------------------------------------------

// 15. Elimina el 2n element de la llista4
lista4.splice(1, 1);
console.log(lista4);

// ---------------------------------------------------------------------------------

// 16. Printa per consola els elements de llista4, un a un
lista4.forEach(element => console.log(element));

// ---------------------------------------------------------------------------------

// 17. Printa per consola les claus de llista4, una a una
Object.keys(lista4).forEach(key => console.log(key));

// ---------------------------------------------------------------------------------

// 18. Fes servir el mètode forEach per printar per consola tots els elements de llista4 en majúscules
lista4.forEach(element => console.log(element.toUpperCase()));

// ---------------------------------------------------------------------------------

// 19. Ordena alfabèticament la llista4
lista4.sort();
console.log(lista4);

// ---------------------------------------------------------------------------------

// 20. Ordena la llista4 pel nombre de lletres de cada element, de menor nombre de lletres a major
// lista4.sort((a, b) => a.length - b.length);

lista4.sort((a,b) => {
    return (a.length - b.length);
})
console.log(lista4);