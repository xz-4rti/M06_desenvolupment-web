
// // Callback to Promise
// function fetchData() {
//     return new Promise((resolve) => setTimeout(() => resolve("Datos Obtenido"), 1000));
// }

// function main() {
//    console.log("Cargando....");
//     fetchData()
//         .then((data) => {
//             console.log(data);
//             console.log("Processo completado");
//         })
// }

// //main();

// // Promise to callback
// function paso1(callback) {
//     setTimeout(() => callback("Paso 1 completado"), 2000);
// }

// function paso2(callback) {
//     setTimeout(() => callback("Paso 2 completado"), 3000);
// }

// function main2(){
//     console.log("Inicio del processo");
//     paso1((resultado1) => {
//         console.log(resultado1);
//         paso2((resultado2) => {
//             console.log(resultado2);
//             console.log("Processo completado");
//         });
//     })
// }

// main2();