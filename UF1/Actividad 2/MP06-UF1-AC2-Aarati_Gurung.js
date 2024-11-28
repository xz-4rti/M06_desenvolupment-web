
// Tarea 1. 

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}


function sumaSalaris(salaris) {
    let total = 0;

    for (let persona in salaris) {
        total += salaris[persona];
    }

    return total;
}

console.log(sumaSalaris(salaries));

// Tarea 2.

let original = {
    name: "John",
    age: 30
}

// Copiar un objecte per referencia
let copiaPerReferencia = original;

copiaPerReferencia.age = 40; // modificar la copia

alert(original.name); // Seria 40 (La original ha cambiado)

// Copiar un objecte per clonat

let copiaPerClonat = Object.assign({}, original);

// let copiaPerClonat = structuredClone(User);

copiaPerClonat.name = "Anna"; // modificar la copia

alert(original.name); // Seria "John" (La original no cambia)

// Copiar un objecte per estructurat o recursiu
let copiaPerRecursiu = {};


// Tarea 3.

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry ({
    name: "John"
}, {
    name: "Ann"
})

// a) Què farà què esborrarà de memòria el garbage collector si fem:

delete family.father;
/**
 * Si borramos father desdel family no se va decaparecer completamente,
 * El father sigue exsistiendo porque la madre todavia lo recuerda.
 */

delete family.mother.husband;
/**
 * Si borramos el husband de mother nadie recuerda al father,
 * Father desaparece completamente.
 */

// b) I si fem:

family = null;
/**
 * No puedemos encontrar mother and father
 */


// Tarea 4.

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

console.log(user.ref);

// a) A quin objecte fa referència user.ref?
/**
 * User.ref = Apunta al objeto global(window, el objeto que representa todo el navegador) 
 * no se refiere al nuevo objeto user, sino al objeto global
 */

// b)Com podríem fer que user.ref apunti sempre a user?
function makeUser2() {
    let user = {
        name: "John"
    };
    user.ref = user; // Asignamos ref para que apunte a 'user'
    return user;
}

let user2 = makeUser2();

console.log(user2.ref); // Esto ahora apunta a 'user'

function makeUser() {
    return {
        name: "John",
        ref: function() {
            return this; // esta dentro de methodo de funcion this es objeto
        }
    };
}


// Tarea 5.

let calculator = {

    num1: 0,
    num2: 0,

    // Methodo para que pida los numeros al usuario
    read() {
        this.num1 = Number(prompt("Introduce el primer numero: "));
        this.num2 = Number(prompt("Introduce el segundo numero: "));
    },

    // Methodo para sumar dos numeros
    sum() {
        return this.num1 + this.num2;
    },

    // Methodo para multiplicar dos numeros
    mul() {
        return this.num1 * this.num2;
    }
}

calculator.read();

alert("La suma es: " + calculator.sum() );
alert("La multiplicación es: " +  calculator.mul() );


// Tarea 6.

let ladder = {
    step: 0,

    up() {
        this.step++;
        return this; // Si no devuelvo this, la funcion no continua
    },

    down() {
        this.step--;
        return this; // Si no devuelvo this, la funcion no continua
    },

    showStep() {
        alert(this.step);
        return this; // Si no devuelvo this, la funcion no continua
    }
};

/**
 * en cada función, lo que estamos haciendo es decirle al programa que
 * después de ejecutar esa función, queremos volver al mismo objeto para
 * poder seguir usando sus otras funciones.
 */

// Primero mostra el valor 1 y segundo 0
ladder.up().up(),down(),showStep().down().showStep(); 


// Tarea 7

let str = "Hello";

str.test = 5;

alert(str.test);

/**
 * Da undefined por que str no es un objeto, es un valor primitivo.
 * Es una variable que contiene cadena. No puedes agregar la propiedad test al valor 
 * primitivo de cadena
 */


// Tarea 8

let i = 0;
while (i != 10) {
    i += 0.2;
}

/**
 * Es un bucle infinito por que i es nunca 10, solo se acerca al 10
 * pero no es 10, por lo tanto i != 10 siempre se evalua como true y 
 * el bucle sigue ejecutandose indefenidamente.
 */


// Tarea 9

function checkSpam(str) {

    // Convertir la cadena a minúsculas para hacer la comprobación insensible a mayúsculas
    let lowerStr = str.toLowerCase();
    
    // Comprobar si contiene 'viagra' o 'xxx'
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');

}

// Ejemplos de uso
console.log(checkSpam("buy ViAgRA now") == true); // true
console.log(checkSpam("free xxxxx") == true); // true
console.log(checkSpam("innocent rabbit") == false); // false


// Tarea 10
function formatDate(date) {

    // obtiene la hora actual
    let now = new Date();

    // calcula la differencia
    let diff = now - date;

    // Cob¡nvertir la diff a segundos, minutos y horas
    let sec = Math.floor(diff / 1000);
    let min =  Math.floor(diff / 60);
    let hour =  Math.floor(diff / 60);

    // Si des de date ha passat menys d'1 segon, retornarà "right now".
    if (sec < 1) {
        return "right now";
    } 
    // Si des de date ha passat menys d'1 minut, retornarà "n sec. ago"
    else if (sec < 60) {
        return "${sec} sec, ago";
    }
    // si és menys d'una hora, reornarà "m min. ago".
    else if (min < 60) {
        return "${min} min, ago";
    }
    else {
        let day = String(date.getDate()).padStart(2, '0'); // Día en formato de 2 dígitos
        let month = String(date.getMonth() + 1).padStart(2, '0'); // Mes (0-11, así que sumamos 1)
        let year = String(date.getFullYear()).slice(-2); // Últimos 2 dígitos del año
        let hours = String(date.getHours()).padStart(2, '0'); // Horas en formato de 2 dígitos
        let minutes = String(date.getMinutes()).padStart(2, '0'); // Minutos en formato de 2 dígitos

        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
}

// Ejemplos de uso
console.log(formatDate(new Date(Date.now() - 1))); // "right now"
console.log(formatDate(new Date(Date.now() - 30 * 1000))); // "30 sec. ago"
console.log(formatDate(new Date(Date.now() - 5 * 60 * 1000))); // "5 min. ago"
console.log(formatDate(new Date(Date.now() - 86400 * 1000))); // Depende de la fecha actual


// Tarea 11

// a) Utilitza el mètode Date.now() per calcular quant de temps (en mil·lisegons) triga a
// executar-se el següent bucle:

// Registra el tiempo de inicio 
let startTime = Date.now();

// Ejecuta el bucle
for (let i = 0; i < 100000; i++) {
    let dosomething = i * i * i;
}

// Registra el tiempo de finalizacion
let endTime = Date.now();

// Calcula la diferencia de tiempo
let timeTaken = endTime - startTime; // en milisegundos

// Imprime el tiempo que ha tardado el bucle en ejecutarse
console.log("El bucle se ha ejecutado en ${timeTaken} milisegundos");

