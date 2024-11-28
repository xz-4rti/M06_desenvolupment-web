function funcionAsincronaConCallBack(callback, errorCallback) {
    setTimeout(() => {
        if (error) errorCallback("Error producido en el proceso");
        else {
            console.log('Funcion asíncrona 1 completada');
            callback(20);
        }
    })
}

// PROMICI

function funcionAsincronaConPromesa() {
    return new Promise(function (resolved, rejected) {
        setTimeout(() => {
            if (error) rejected('Error producido en el proceso');
            else {
                console.log('Funcion asíncrona 1 completada');
                resolved(20);
            }
        }, 3000);
    });
}

var error = false;

funcionAsincronaConPromesa() 
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error);
    });