
// Tarea 1. Crea una funció createList1(data) que generi una llista UL/LI 
// a dins de l’element #container de l’HTML a partir d’un objecte JSON 
// sense aniuaments. Cada element de la llista ha tenir un id igual al 
// seu text:

let json1 = `{
    "Aves": {},
    "Peces": {},
    "Mamíferos": {}
}`

function createTree(json) {

    let lista = JSON.parse(json);
    let div = document.querySelector('.container');
    let ul = document.createElement('ul');

    for(let clave in lista) {
        let element = document.createElement('li');
        element.innerHTML = clave;
        ul.append(element);
    }
    div.append(ul);
}

createTree(json1);

// ----------------------------------------------------------------------

// Tarea 2. Crea una funció createList2(data) que generi una llista ul-li
// a dins de l’element #container de l’HTML a partir d’un JSON amb un
// nivell d’aniuament. Cada element de la llista ha tenir un id igual
// al seu text i, a més, pertànyer a la classe mare corresponent
// (per exemple, “no voladoras” hauria de tenir id = “noVoladoras”
// i class=”aves” :

let json2 = {
    "Aves": {
        "voladoras": {},
        "no voladoras": {}
    },
    "Peces": {},
    "Mamíferos": {
        "ungulados": {},
        "paquidermos": {}
    }
};

function createTree2(objeto) {
    // let lista = JSON.parse(json);
    let div = document.querySelector('.container');
    let ul = document.createElement('ul');
    for (let clave in objeto) {
        let elemento = document.createElement('li');
        elemento.innerHTML = clave;
        elemento.id = clave;
        ul.append(elemento);

        //Mirar si el valor de la clave tiene claves
        if (Object.keys(objeto[clave]).length != 0) {
            let ul2 = document.createElement('ul');
            for (let clave2 in objeto[clave]) {
                let elemento2 = document.createElement('li');
                elemento2.innerHTML = clave2;
                elemento2.id = clave2;
                ul2.append(elemento2);
            }
            elemento.append(ul2)
        }
        div.append(ul);
    }
}

window.onload = () => {
    createTree2(json2);
}


// ----------------------------------------------------------------------

// Tasca 3. Fes que el JSON amb que es treballa es mostri en un <textarea>,
// perquè pugui ser editat per l’usuari. La llista es generarà a partir
// del contingut del <textarea> quan es premi un botó “CONVERTIR”.

function textArea() {
    let textArea = document.querySelector('textArea');
    let button = document.querySelector('button');
    button.addEventListener()
}


// ----------------------------------------------------------------------

// Tasca 4. Fes que l’usuari pugui triar el color del text de la llista a
// partir d’un input type=”color”.



// ----------------------------------------------------------------------

// Tasca 5. Fes que l’usuari pugui marcar i desmarcar de color groc un
// element de la llista (background-color) quan cliqui sobre ell amb el ratolí.



// ----------------------------------------------------------------------

// Tasca 6. Fes que quan l’usuari cliqui sobre un element de la llista de
// la Tasca 2, aquest element es dupliqui.


// ----------------------------------------------------------------------

// Tasca 7. Fes que, quan l’usuari cliqui amb el botó dret sobre un element
// de la llista, l’element s’elimini.