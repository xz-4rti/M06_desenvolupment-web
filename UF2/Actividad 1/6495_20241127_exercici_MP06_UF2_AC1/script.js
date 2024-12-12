// Tasca 1 

<<<<<<< HEAD
function loadScript(src, resolve, reject) {
=======
function loadScript(src) {
>>>>>>> 5515fe2d503652956f8b417cb826ab970e56ce23

    return new Promise((resolve, reject) => {

        if (!src) {
<<<<<<< HEAD
            reject('Error en el proceso');
            return;
        }

        let script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve('Script cargado');
        // script.addEventListener('load', resolve); equivalente a onload
        script.onload = () => reject('Script no cargado');
        document.head.append(script);
    })

}

// loadScript('1.js', funcion1); funcion1 no exite
// loadScript('1.js', ()=>{funcion1()}); declaracion de funcion1 si existe
// loadScript('', null, (error) => console.log(error));
loadScript('', () => {
    console.log(`Ha devuelto: ${funcion1()}`);
},
    console.log()
);
=======
            errorCallback("Error en el proceso");
            return;
        }
    
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject("Error al cargar el script");
        document.head.append(script);

    });

}

loadScript('1.js')
    .then(() => {
        const result = funcion1();
        console.log("Funcion 1: " + result);
    })
    .catch((error) => console.error(error));


// loadScript('1.js', () => funcion1());

>>>>>>> 5515fe2d503652956f8b417cb826ab970e56ce23

loadScript('1.js')
    .then(() => funcion1())
    .then(result => {
        console.log(`La función 1 ha devuelto el número ${result}`);
    })
    .catch((error) => {
        console.log(error);
    });
  
// Tasca 2

<<<<<<< HEAD
// function sleep(milliseconds) {
//     return new Promise(function (resolved, rejected){
//         setTimeout(funcion(){
//             resolved();
//         }, milliseconds);
//     });
// }

function sleep(milliseconds) {
    return new Promise(function (resolved, rejected){
        setTimeout( resolved, milliseconds);
    });
}

// sleep(3000) {

//     .then(() => {
//          console.log('Sleep finalizado. Continua ejecución del programa');
//    })
// }

// FETCH
// url = 'https//jsonplaceholder.typicode.com/users';
// fetch(url); // URL or enviar al servidor como Post or get
//     .then((response) => {
//         let users = resonxse,
//     })
//     .then((ususarios) =>{
//         console.log(ususarios)
//     })


// Fetch() -> Jason -> fech fech fech fech -> json json json json
// fetch tiene dos fases -> Primero respuesta y segundo parseado
=======
function sleep(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    })
}

sleep(3000)
    .then(()=>{
        console.log('Sleep finalizado. Continua ejecución del programa...');
    })

>>>>>>> 5515fe2d503652956f8b417cb826ab970e56ce23
