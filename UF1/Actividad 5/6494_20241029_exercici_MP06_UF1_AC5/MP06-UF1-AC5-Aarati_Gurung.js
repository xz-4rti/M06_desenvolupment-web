// 1. Saca por consola todo el contenido del body sin utilizar ningún método de document
console.log(document.body.innerHTML);
console.log(document.body.childNodes);
//-------------------------------------------------------------------------

// 2. Saca por consola el texto del elemento #titulo sin utilizar ningún método de document
// no se puede sin utilizar ningun metodo de document

//-------------------------------------------------------------------------

// 3. Saca el contenido del tercer li usando el método querySelector
console.log(document.querySelector("ul li:nth-child(3)").innerHTML);

//-------------------------------------------------------------------------

// 4. Saca el contenido del tercer li usando el método querySelectorAll
console.log(document.querySelectorAll("ul li")[2].innerHTML);

//-------------------------------------------------------------------------

// 5. Que ocurre cuando se ejecuta este comando. ¿Por qué?
// let elementos = document.querySelector('li');
// elementos[2].remove();

/**
 * Este codigo nos da undefined porque elementos no es un array
 * querySelector solo seleciona un elemento
 */

//-------------------------------------------------------------------------

// 6. Que ocurre cuando se ejecuta este comando. ¿Por qué?
// let lista = document.querySelectorAll('ul');
// lista.remove();

/**
 * No funciona porque .remove() solo elimina un elemento y como que
 * lista es un array hay que hacer for each para eliminar lo
 */

//-------------------------------------------------------------------------

// 7. Accede a la lista ul y borra el segundo de sus hijos, utilizando su propiedad children
let ul = document.querySelector("ul");
ul.children[1].remove();

//-------------------------------------------------------------------------

// 8. Accede a la lista ul y borra el segundo de sus hijos, utilizando su propiedad childNodes
let ul2 = document.querySelector("ul");
ul2.childNodes[3].remove();

//-------------------------------------------------------------------------

// 9. Completa este código para que se ponga de color azul el hermano siguiente al primer elemento de la lista
let elemento = document.querySelector('li:first-child');
elemento.nextElementSibling.style.color = 'blue';

//-------------------------------------------------------------------------

// 10. Completa este código para que se pongan de color azul él y todos sus hermanos
let elemento2 = document.querySelector('li:first-child');

while(elemento2) {
    elemento2.style.color = 'blue';
    elemento2 = elemento2.nextElementSibling;
}

//-------------------------------------------------------------------------

// 11. ¿Por qué no podemos acceder así al atributo 'tema' del #título?
// let titulo = document.querySelector('#titulo');
// console.log(titulo.tema);

/**
 * tema es un atributo personalizado, no una propiedad del 
 * elemento DOM. En su lugar, utilice getAttribute("tema").
 */

//-------------------------------------------------------------------------

// 12. Saca por consola el valor del atributo 'tema' del #título
console.log(titulo.getAttribute('tema'));

//-------------------------------------------------------------------------

// 13. Añade al título el atributo 'cfgs' con valor 'daw'
titulo.setAttribute('cfgs', 'daw');

//-------------------------------------------------------------------------

// 14. Cambia el id del h3 sin utilizar el método setAttribute
let h3 = document.querySelector('h3');
h3.id = 'titulo2';
console.log(h3.id)

//-------------------------------------------------------------------------

// 15. ¿Este código añade correctamente la classe 'elem' a los elementos de la lista?
// let elementos = document.querySelectorAll('.item');
// for (let elemento of elementos){
//    elemento.className = "elem";
// }

/**
 * El código no añade correctamente la clase elem. En lugar de eso, 
 * reemplaza la clase actual de cada elemento con elem, lo que significa
 * que se pierde la clase original item. Después de ejecutar este 
 * código, los elementos de la lista solo tendrán la clase elem y ya 
 * no tendrán la clase item.
 */

//-------------------------------------------------------------------------

// 16. Añade correctamente a los elementos de la lista la clase "item"

let elementos = document.querySelectorAll('.item');
for (let elemento of elementos) {
    elemento.classList.add("item");
}

//-------------------------------------------------------------------------

// 17. ¿Es correcta la salida por consola?
let primerElemento= document.querySelectorAll('.item')[0];
primerElemento.classList.add("elem");
console.log(primerElemento.className);

// La salida porla consola es item elem

//-------------------------------------------------------------------------

// 18. Añade un Cuarto Elemento al final de la lista
let newElemento = document.createElement('li');
newElemento.className = 'item';
newElemento.innerHTML = 'newHtml';
document.querySelector('ul').append(newElemento);

//-------------------------------------------------------------------------

// 19. Añade un Elemento Cero al principio de la lista
let newElemento0 = document.createElement('li');
newElemento0.className = 'item';
newElemento0.innerHTML = 'newHtmlZero';
document.querySelector('ul').prepend(newElemento0);

//-------------------------------------------------------------------------

// 20. Duplica el Tercer Elemento a continuación de éste en la lista
let tercerElemento = document.querySelectorAll('li')[2];
let duplicate = tercerElemento.cloneNode(true);
tercerElemento.after(duplicate);