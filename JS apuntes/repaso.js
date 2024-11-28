let titulo = documento.querySelector('h3');

// Change the text of h3
titulo.innerHTML = 'FAMILY FELIZ'

// Si titulo no tiene id añadir desde js
titulo.id= 'titulo';

// Añadir class list
titulo.classList.add("encabezado");
titulo.classList.add("patapa");

console.log(titulo.id)
console.log(titulo.classList)

// Quitar del class list
titulo.classList.toggle("encabezado");
titulo.classList.toggle("patapa");

let input = document.querySelector("#input");
input.value = "slay";

// -------------------------------------------------------------------

// Crear hija nueva new element
let hijaNuevo = document.createElement('li');
hijaNuevo.id = "hijoNuevo";
hijaNuevo.classList.add("elementosAnadidos");
hijaNuevo.innerHTML = "Hija";
hijaNuevo.style.color = "red"

/**
 * Append = lo añade al final dentro de un contenedor
 * Prepend = lo añade al principio dentro de un contenedor
 * 
 * before = lo añade al principio fuerade un contenedor
 * after = lo añade al final fuera de un contenedor
 */ 
let ul = document.querySelector("ul");
ul.append(hijaNuevo); // or document.querySelector("ul").append(hijaNuevo);

// -------------------------------------------------------------------

// Comienza en 1 y aqui selecionamos el segundo child
let papa = document.querySelector('li:nth-child(2)');
papa.remove(); // Eliminar hija

// -------------------------------------------------------------------

let mama = document.querySelector('li:nth-child(2)');

// cloneNode(true) = El true lo copia tambien el interior si objeto tiene
let mamaClonada = mama.cloneNode(true);

mama.remove(); // Borrar mama original pero el conada si se queda
ul.append(mamaClonada); // Añadir mama clonado otra vez al final dentro del contenedor

// -------------------------------------------------------------------

// Cambiar estilo con js
ul.style.cssText = `
    border: 2px black dotted;
`
ul.style.border = "2px black dotted";

titulo.style = ul.style.border; // no funciona

titulo.style = getComputedStyle(ul).border;

// -------------------------------------------------------------------

function cambiarColor() {
    this.classList.toggle("marcada")
}

window.onload=()=>{
    let celdas = document.querySelectorAll('.celda')
    for(let celda of celdas){
        celda.addEventListener('click', cambiarColor)
    }
}

