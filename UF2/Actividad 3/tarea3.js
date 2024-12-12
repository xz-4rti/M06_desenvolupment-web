// Reescribir codigo a Async/await

// Tarea 1

function paso1(callback) {
    setTimeout(() => callback("Paso 1 completado"), 2000);
}

function paso2(callback) {
    setTimeout(() => callback("Paso 2 completado"), 3000);
}

function main2(){
    console.log("Inicio del processo");
    paso1((resultado1) => {
        console.log(resultado1);
        paso2((resultado2) => {
            console.log(resultado2);
            console.log("Processo completado");
        });
    })
}

main2();

// Tarea 2 
async function fetchPosts() {

    // 1 - Demani al primer endpoint la llista d'usuaris.
    let url1 = "https://jsonplaceholder.typicode.com/users";
    let userResponse = await fetch(url1);
    let users = await userResponse.json();
    console.log('Lista d\'usuaris:', users);

    // 2. Per cada usuari, obtenim la seva llista de posts
    for (let user of users) {

        let url2 = `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`;
        let postResponse = await fetch(url2);
        let posts = await postResponse.json();
        console.log(`\nPosts de ${user.name}:`);

        // 3. Imprimim els títols dels posts a la consola
        posts.forEach(post => console.log(`- ${post.title}`));
        
    }

}