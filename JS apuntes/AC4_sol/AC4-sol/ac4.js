// ACTIVITAT AC4

// Tasca 1. Crea una funció createList1(data) que generi una llista UL/LI a dins de l’element #container de l’HTML a partir d’un objecte JSON sense aniuaments. Cada element de la llista ha tenir un id igual al seu text:

let json1 = `{
    "Aves": {},
    "Peces": {},
    "Mamíferos": {},
    "Hongos": {}
   }`

function createTree1(json) {
    let lista = JSON.parse(json);
    let div = document.querySelector('.container');
    let ul = document.createElement('ul');
    for (let clave in lista) {
        let elemento = document.createElement('li');
        elemento.innerHTML = clave;
        elemento.id = clave;
        ul.append(elemento);
    }
    div.append(ul);
}

// window.onload = () => {
//     createTree1(json1);
// }

//    Tasca 2. Crea una funció createList2(data) que generi una llista ul-li a dins de l’element #container de l’HTML a partir d’un JSON amb un nivell d’aniuament. Cada element de la llista ha tenir un id igual al seu text i, a més, pertànyer a la classe mare corresponent (per exemple, “no voladoras” hauria de tenir id = “noVoladoras” i class=”aves” :

let data2 = {
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

// window.onload = () => {
//     createTree2(json2);
// }

// Tasca 3. Fes que el JSON amb que es treballa es mostri en un <textarea>, perquè pugui ser editat per l’usuari. La llista es generarà a partir del contingut del <textarea> quan es premi un botó “CONVERTIR”.

// function createTree4(){
//     let json = document.querySelector('textarea').value;
//     createTree2(JSON.parse(json));
// }

// window.onload = () => {
//     let textarea = document.querySelector('textarea');
//     textarea.value = JSON.stringify(data2,null,2);
//     let button = document.querySelector('button');
//     button.addEventListener('click',createTree4);
// }

// Tasca 4. Fes que l’usuari pugui triar el color del text de la llista a partir d’un input type=”color”.
// Pistes: per detectar el canvi de valor de l’input, fes servir l’event ‘input’.

function changeColor(event) {
    // let color = this.value;
    let color = event.target.value;
    document.querySelector('ul').style.color = color;
}

// window.onload = () => {
//     let textarea = document.querySelector('textarea');
//     textarea.value = JSON.stringify(data2,null,2);
//     let button = document.querySelector('button');
//     button.addEventListener('click',createTree4);
//     let colorInput = document.querySelector('input');
//     colorInput.addEventListener('input',changeColor)
// }

// Tasca 5. Fes que l’usuari pugui marcar i desmarcar de color groc un element de la llista (background-color) quan cliqui sobre ell amb el ratolí.
// Pistes: pots modificar la funció createTree2 per afegir els listeners corresponents...

// function toggleColor(event) {
//     this.classList.toggle('marcado');
//     event.stopPropagation();
// }

// function createTree4() {
//     let json = document.querySelector('textarea').value;
//     createTree2(JSON.parse(json));
//     let elementos = document.querySelectorAll('li');
//     for (let elemento of elementos) {
//         elemento.addEventListener('click', toggleColor);
//     }
// }

// window.onload = () => {
//     let textarea = document.querySelector('textarea');
//     textarea.value = JSON.stringify(data2, null, 2);
//     let button = document.querySelector('button');
//     button.addEventListener('click', createTree4);
//     let colorInput = document.querySelector('input');
//     colorInput.addEventListener('input', changeColor);
// }

// Tasca 6. Fes que quan l’usuari cliqui sobre un element de la llista de la Tasca 2, aquest element es dupliqui.
// Tasca 7. Fes que, quan l’usuari cliqui amb el botó dret sobre un element de la llista, l’element s’elimini.

    function createTree4() {
        let json = document.querySelector('textarea').value;
        createTree2(JSON.parse(json));
        let elementos = document.querySelectorAll('li');
        for (let elemento of elementos) {
            elemento.addEventListener('click', cloneElement);
            elemento.addEventListener('contextmenu', deleteElement);
        }
    }

    function cloneElement(event){
        event.preventDefault();
        let nouElement = this.cloneNode(true);
        nouElement.addEventListener('click', cloneElement);
        nouElement.addEventListener('contextmenu', deleteElement);
        this.after(nouElement);
        event.stopPropagation();
    }

    function deleteElement(event){
        event.preventDefault();
        this.remove();
        event.stopPropagation(); 
    }

    window.onload = () => {
        let textarea = document.querySelector('textarea');
        textarea.value = JSON.stringify(data2, null, 2);
        let button = document.querySelector('button');
        button.addEventListener('click', createTree4);
        let colorInput = document.querySelector('input');
        colorInput.addEventListener('input', changeColor);
    }