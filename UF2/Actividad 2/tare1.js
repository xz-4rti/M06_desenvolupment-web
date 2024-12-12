async function fetchPosts() {

    try {
        // 1 - Demani al primer endpoint la llista d'usuaris.
        let url1 = "https://jsonplaceholder.typicode.com/users";

        let userResponse = await fetch(url1);
        if (!userResponse.ok) throw new Error('Error obtenint usuaris');
        let users = await userResponse.json();
        console.log('Lista d\'usuaris:', users);

        // 2. Per cada usuari, obtenim la seva llista de posts
        for (let user of users) {

            let url2 = `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`;

            let postResponse = await fetch(url2);
            if (!postResponse.ok) throw new Error(`Error obtenint posts per a l'usuari ${user.id}`);

            let posts = await postResponse.json();
            console.log(`\nPosts de ${user.name}:`);

            // 3. Imprimim els títols dels posts a la consola
            posts.forEach(post => console.log(`- ${post.title}`));
        }
    } catch (error) {
        console.log(error.message);
    }

}

// Llamada a la función
fetchPosts();


let apiUrlUsers = "https://jsonplaceholder.typicode.com/users";
let apiUrlPosts = "https://jsonplaceholder.typicode.com/posts?userId=";

// Cridem la funcion
fetchPosts();

function fetchPosts() {
    fetch(apiUrlUsers)
        .then((response) => {
            response.json()
        })

        .then((json) => {
            json.array.forEach(user => {
                let userId = apiUrlPosts + usuario.id;

                fetch(url)
                    .then((response) => {
                        return response.json();
                    })
                    .then((posts) => {
                        console.log(posts);
                        let listatotal = document.querySelector('#user-posts');
                        let nuevoItem = document.createElement('li');
                        nuevoItem.innerHTML = userName;
                        listatotal.append(nuevoItem);
                        let listPost = document.createElement('ul');
                        nuevoItem.append(listPost);
                        for (let post of posts) {
                            let itemPost = document.createElement('li');
                            itemPost.innerHTML = post.title;
                            listaPost.append(itemPost);
                        }
                    })
            });
        })
}


