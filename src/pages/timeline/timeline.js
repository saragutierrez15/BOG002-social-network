import { signOut } from '../../index.js';


export function timelinePage() {

    const view = `
        <section id="screenWall">
            <header>
                <div class="headerWall">
                    <img src="assets/WikiMomsNegro.png">
                    <img id="imgUser" src="assets/IconoUsuario.png">
                </div>
            </header>

            <main>
                <form id="logOut">
                    <button id="btnLogOut">Cerrar sesion</button>
                </form>
                <div class = "container" id = "containerPosts">
                    <div id ="posts">
                        <ul id = "listPost">
                        </ul>
                    </div>
                </div>
            </main>
        </section>    
    `
    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    return divElement;
}


export function signOutGoogle() {
    const buttonSignOut = document.getElementById('btnLogOut');
    buttonSignOut.addEventListener('click', function () {
        signOut()
            .then(() => {
                console.log('cerraste sesión')
                window.location = '#/'
            })
            .catch(err => {
                console.log(err)
            })

    });
}
export function postsTimeline() {
    const postlist = document.getElementById('listPost');
    const setPost = data => {
        if (data.length) {
            let html = '';
            data.forEach(doc => {
                const post = doc.data();
                const li = `
            <li>
            <h5>${post.titulo}</h5>
            <p>${post.contenido}</p>
            </li>
            `;
                html += li;

            });
            postlist.innerHTML = html;
        } else {
            postlist.innerHTML = '<p>No hay publicaciones</p>'
        }
    }

    // Eventos 
    auth.onAuthStateChanged(user => {
        if (user) {
            fireStore.collection('posts')
                .get()
                .then((snapshot) => {
                    setPost(snapshot.docs)
                })
        } else {
            console.log('cerraste sesion')
        }
    })
}
