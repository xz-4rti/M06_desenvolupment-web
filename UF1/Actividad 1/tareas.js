// -1. let i var: comparativa dels respectius abasts (scopes).

function scopesEjemplo() {

    if (true) {
        var varVariable = "var scope";
        let letVariable = "let scope";
    }
+
    // "var scope" es accessible fuera del bloque pero no del dentro
    console.log(varVariable);
    // Error: letVariable no está definida fuera del bloque
    console.log(letVariable);

}

scopesEjemplo();


// -2. let i var: redeclaració de variables i hoisting de declaracions.

// REDECLARACION DE VARIABLE
// con 'var'
var x = 10;
var x = 20; // Permitido: redeclaración con 'var'
console.log(x); // 20

// Con 'let'
let y = 10;
let y = 20; // Error: no se puede redeclarar 'y' en el mismo bloque

// HOSTING DE DECLARACIONES
// Con 'var'
console.log(a); // undefined (la declaración es elevada pero no el valor)
var a = 5;

// Con 'let'
console.log(b); // Error: no se puede acceder a 'b' antes de declararla
let b = 5;


// -3. Conversió a tipus numèric des de diversos altres tipus de dada amb Numeric().

// String numerico a número devuelve 123
console.log(Number("123"));

// String no numerico a numero devuelve NaN
console.log(Number("abc"));

// Boolean true a número devuleve 1
console.log(Number(true));

// Boolean false a número devuleve 0
console.log(Number(false));


// -4. Diferència d’ús entre Numeric() vs parseInt().

// Se convierte todo el string a numero (12.23) 
console.log(Number("12.23"));

// Se convierte a entero, quitando los partes decimal
alert(parseInt("12.23"));


// -5. Diferència entre null i undefined.

/**
 * Undefined es cuando variable esta declarado pero no se ha 
 * defenido aun su valor
*/
let userUndefined;
alert(userUndefined);

/**
 * Null es cuando el variable esta declarado null 
 * para indicar que no hay valor
 */
let userNull = null;
alert(userNull);

// ambos significa ausencia del valor


// -6. Comparació entre igualtat estricta i no estricta.

// Comparación no estricta (solo compara valor)
console.log(1 == "1");

// Comparación estricta (compara valor y tipo)
console.log(1 === "1");


// -7. Ús de l’operador condicional ?. Comparació amb estructura if clàssica.

let user = {
    name: "Aarati",
    address: {
        city: "Barcelona"
    }
};

// Uso del operador condicional
console.log(user.address?.city);  // "Barcelona"
console.log(user.contact?.phone); // undefined: evita error si no existe la propiedad

// Comparado con un if clásico
if (user.address && user.address.city) {
    console.log(user.address.city);
} else {
    console.log("No hay ciudad");
}


// -8. Ús de l’operador nullish coallescing.

let valorNulo = null;
let valorDefinido = "Texto disponible";
console.log(valorNulo ?? "Valor predeterminado");      // "Valor predeterminado"
console.log(valorDefinido ?? "Valor predeterminado");  // "Texto disponible"


// -9. Break i continue en bucles for.

// BREAK = se  usa para detener la ejecucion de un bucle
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;  // Detiene el bucle cuando i es 3
    }
    console.log(i);  // Resultado: 0, 1, 2
}

// CONTINUE = se usa para saltar la sigunete iteracion del bucle
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;  // Salta la iteración cuando i es 2
    }
    console.log(i);  // Resultado: 0, 1, 3, 4
}


// -10. Funcions amb paràmetres per defecte.

function saludar(nombre = "Invitado") {
    console.log(`Hola, ${nombre}!`);
}

saludar();               // "Hola, Invitado!"
saludar("Aarati");       // "Hola, Aarati!"


// -11. Funció passada com a paràmetre a una altra funció.

// Funció que suma dos números
function suma(a, b) {
    return a + b;
}

// Función que recibe otra función y dos números
function ejecutarSuma(funcion, num1, num2) {
    return funcion(num1, num2); // Llama a la función 'suma'
}

// Llamamos a 'ejecutarSuma' pasando la función 'suma'
const resultado = ejecutarSuma(suma, 5, 3);
console.log(resultado); // Output: 8


// -12. Hoisting en declaracions de funcions vs hoisting en expressions de funcions.

// HOSTING EN DECLARACION DE FUNCIONS
console.log(sumar(2, 3)); // Output: 5

function sumar(a, b) {
    return a + b;
}

// HOSTING EN EXPRESSION DE FUNCIONS
console.log(restar(5, 3)); // Error: restar no es una funcion

var restar = function(a, b) {
    return a - b;
};


// -13. Traducció d’una funció en notació clàssica a la notació fletxa (funcions d’una línia de codi i funcions de més d’una línea de codi).

// NOTACION CLASSICA de una linea de codigo
function sumar(a, b) {
    return a + b;
}

// NOTACION FUNCION FLECHA de una linea de codigo
const sumar = (a, b) => a + b;

// NOTACION CLASSICA mas de una linea de codigo
function multiplicar(a, b) {
    const resultat = a * b;
    return resultat;
}

// NOTACION FUNCION FLECHA mas de una linea de codigo
const multiplicar = (a, b) => {
    const resultat = a * b;
    return resultat;
};


// -14. Depuració de codi al navegador web: posar breakpoints i inspeccionar el valor d’una variable.

