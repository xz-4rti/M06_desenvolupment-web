// Tasca 1 

function loadScript(src, resolve, reject) {

    return new Promise((resolve, reject) => {

        if (!src) {
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

loadScript('1.js')
    .then(() => funcion1())
    .then(result => {
        console.log(`La función 1 ha devuelto el número ${result}`);
    })
    .catch((error) => {
        console.log(error);
    });
  
// Tasca 2

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