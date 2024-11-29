// Tasca 1 

function loadScript(src) {

    return new Promise((resolve, reject) => {

        if (!src) {
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


// Tasca 2

function sleep(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    })
}

sleep(3000)
    .then(()=>{
        console.log('Sleep finalizado. Continua ejecución del programa...');
    })

