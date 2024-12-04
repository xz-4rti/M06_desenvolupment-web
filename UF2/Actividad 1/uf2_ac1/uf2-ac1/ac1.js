function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

// loadScript('1.js'); // ASINCRONO
// funcion1();

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.append(script);
    // script.addEventListener('load', callback);
}

// loadScript('1.js', funcion1);
// loadScript('1.js', ()=>{funcion1()});

function loadScript(src, callback, errorCallback) {
    let script = document.createElement('script');
    if (src == "") errorCallback("Error en el proceso");
    else {
        script.src = src;
        document.head.append(script);
        script.addEventListener('load', callback);
    }
}

// loadScript('', () => {
//     console.log(`Función 1 ha devuelto: ${funcion1()}`);
// },
//     console.log);

function loadScript(src) {
    return new Promise(function (resolved, rejected) {
        let script = document.createElement('script');
        if (src == "") rejected("Error en el proceso");
        else {
            script.src = src;
            document.head.append(script);
            script.addEventListener('load', resolved);
        }

    })
}

// loadScript('1.js')
//     .then(() => {
//         console.log(`Función 1 ha devuelto: ${funcion1()}`);
//     })
//     .catch((error) => {
//         console.log(error)
//     });


// function sleep(miliseconds) {
//     return new Promise((resolved, rejected) => {
//         setTimeout(() => resolved(), miliseconds)
//     })
// }

// function sleep(miliseconds){
//     return new Promise((resolved,rejected) => {
//         setTimeout(resolved,miliseconds)
//     })
// }

// sleep(3000)
//     .then(() => {
//         console.log('Sleep finalizado. Continua ejecución del programa...');
//     })


function sleep(miliseconds) {
    return new Promise(function (resolved, rejected) {
        setTimeout(function () {
            resolved();
        }, miliseconds);
    });
}

// function sleep(miliseconds){
//     return new Promise(function (resolved,rejected){
//         setTimeout(resolved,miliseconds);
//     });
// }


let url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
    .then((response) => {
        return response.json();
        
    })
    .then((usuarios)=>{
        console.log(usuarios);
    })

