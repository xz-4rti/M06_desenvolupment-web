const apiUrlUsers = 'https://jsonplaceholder.typicode.com/users';
const apiUrlPosts = 'https://jsonplaceholder.typicode.com/posts?userId='; // Base para la segunda solicitud
const userPostsList = document.getElementById('user-posts');

fetchPosts();
// Función para cargar usuarios y sus publicaciones

function fetchPosts() {
    fetch(apiUrlUsers)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud de usuarios: ' + response.statusText);
            }
            return response.json();
        })
        .then((users) => {
            users.forEach((user) => {
                let url = apiUrlPosts + user.id;
                fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Error en la solicitud de usuarios: ' + response.statusText);
                        }
                        return response.json();
                    })
                    .then((posts)=>{
                        console.log(posts);
                        let lista = document.querySelector('#user-posts');
                        let usuario = document.createElement('li');
                        usuario.innerHTML = user.name;
                        lista.append(usuario);
                        let postsUsuario = document.createElement('ul');
                        usuario.append(postsUsuario);
                        for (let post of posts){
                            let postLi = document.createElement('li');
                            postLi.innerHTML = post.title;
                            postsUsuario.append(postLi);
                        }
                    })
            })
        })
}

