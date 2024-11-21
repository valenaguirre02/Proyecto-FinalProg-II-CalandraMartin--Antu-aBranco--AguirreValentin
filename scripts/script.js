    // Despliega menu del boton categorias
    let botonCategorias = document.getElementById('categorias'); 

    botonCategorias.addEventListener('click', () => { 
        let ulEncabezado = document.querySelector('.ul-encabezado'); 
        if (!ulEncabezado.classList.contains('show')) { 
            ulEncabezado.classList.add('show'); 
        } else { 
            ulEncabezado.classList.remove('show'); 
        }
    });
    

    // Desplegar botones aside
    let tituloAsidePeli = document.getElementsByClassName('titulo-aside-peliculas')[0];
    tituloAsidePeli.addEventListener('click', () => {
        let ulPelis = document.getElementsByClassName('ul-peliculas')[0];
        ulPelis.style.display = ulPelis.style.display === 'flex' ? 'none' : 'flex';
    });

    let tituloAsideSeries = document.getElementsByClassName('titulo-aside-series')[0];
    tituloAsideSeries.addEventListener('click', () => {
        let ulSeries = document.getElementsByClassName('ul-series')[0];
        ulSeries.style.display = ulSeries.style.display === 'flex' ? 'none' : 'flex';
    });

    let tituloAsideAnime = document.getElementsByClassName('titulo-aside-animes')[0];
    tituloAsideAnime.addEventListener('click', () => {
        let ulAnime = document.getElementsByClassName('ul-animes')[0];
        ulAnime.style.display = ulAnime.style.display === 'flex' ? 'none' : 'flex';
    });

    let tituloAsideDocu = document.getElementsByClassName('titulo-aside-documentales')[0];
    tituloAsideDocu.addEventListener('click', () => {
        let ulDocu = document.getElementsByClassName('ul-documentales')[0];
        ulDocu.style.display = ulDocu.style.display === 'flex' ? 'none' : 'flex';
    });

    let tituloAsideNovela = document.getElementsByClassName('titulo-aside-novelas')[0];
    tituloAsideNovela.addEventListener('click', () => {
        let ulNovela = document.getElementsByClassName('ul-novelas')[0];
        ulNovela.style.display = ulNovela.style.display === 'flex' ? 'none' : 'flex';
    });

    // Cargar películas desde localStorage 
    function cargarPeliculasPorCategoria(categoria, contenedorId) {
        const peliculas = JSON.parse(localStorage.getItem(`peliculas_${categoria}`)) || [];
        const contenedorPeliculas = document.querySelector(`#${contenedorId}`);

        contenedorPeliculas.innerHTML = ""; // Limpia el contenedor antes de cargar

        peliculas.forEach(pelicula => {
            const cajaPelicula = document.createElement("div");
            cajaPelicula.classList.add("padre-imagen");

            cajaPelicula.innerHTML = `
                <img class="imagen" src="${pelicula.imagen}" alt="${pelicula.titulo}">
                <p class="titulo_peli">${pelicula.titulo}</p>
                <div class="estrellita_puntaje">
                    <p>${pelicula.puntaje}</p>
                    <img class="estrellita" src="/static/images/estrellita.jpeg">
                </div>
            `;

            contenedorPeliculas.appendChild(cajaPelicula);
        });
    }

    cargarPeliculasPorCategoria('terror', 'contenedor-terror');
    cargarPeliculasPorCategoria('drama', 'contenedor-drama');
    cargarPeliculasPorCategoria('comedia', 'contenedor-comedia');
    cargarPeliculasPorCategoria('accion', 'contenedor-accion');
    cargarPeliculasPorCategoria('romanticas', 'contenedor-romanticas');
    cargarPeliculasPorCategoria('aventura', 'contenedor-aventura');
    cargarPeliculasPorCategoria('ficcion', 'contenedor-ficcion');

    // Desplazamiento horizontal
    document.querySelectorAll('.movie-row').forEach(row => {
        const contenedorPeliculas = row.querySelector('.contenedor-peliculas');
        const botonIzquierda = row.querySelector('.desplazar-izquierda');
        const botonDerecha = row.querySelector('.desplazar-derecha');

        let desplazamiento = 0;
        const card = contenedorPeliculas.children[0];
        const cardWidth = card ? card.offsetWidth + 20 : 0; 

        botonIzquierda.addEventListener('click', () => {
            desplazamiento = Math.max(desplazamiento - cardWidth, 0);
            contenedorPeliculas.style.transform = `translateX(-${desplazamiento}px)`;
        });

        botonDerecha.addEventListener('click', () => {
            const maxDesplazamiento = contenedorPeliculas.scrollWidth - contenedorPeliculas.clientWidth;
            desplazamiento = Math.min(desplazamiento + cardWidth, maxDesplazamiento);
            contenedorPeliculas.style.transform = `translateX(-${desplazamiento}px)`;
        });
    });

    // Agregar datos de las películas al localStorage
    const categorias = {
        terror: [
            { id: 1, titulo: "The Conjuring", puntaje: "8/10", imagen: "/static/images/elConjuro.jpg" },
            { id: 2, titulo: "Hereditary", puntaje: "7.5/10", imagen: "/static/images/hereditary.jpg" },
            { id: 3, titulo: "No Respires", puntaje: "8/10", imagen: "/static/images/noRespires.jpg" },
            { id: 4, titulo: "IT", puntaje: "6/10", imagen: "/static/images/it.jpg" },
            { id: 5, titulo: "El Exorsista", puntaje: "7.4/10", imagen: "/static/images/elExorsista.jpg" },
            { id: 6, titulo: "Pesadilla En la calle Elm", puntaje: "8/10", imagen: "/static/images/pesadillaEnLaCalleElm.jpg" },
            { id: 7, titulo: "El juego del miedo", puntaje: "8/10", imagen: "/static/images/elJuegoDelMiedo.jpg" },
            { id: 8, titulo: "El resplandor", puntaje: "8/10", imagen: "/static/images/elResplandor.jpg" }
        ],
        drama: [
            { id: 1, titulo: "The Shawshank Redemption", puntaje: "9/10", imagen: "/static/images/TheShawshanRedemption.jpg" },
            { id: 2, titulo: "Forest Gump", puntaje: "8.8/10", imagen: "/static/images/forestGump.jpg" },
            { id: 3, titulo: "La vida es bella", puntaje: "9/10", imagen: "/static/images/laVidaEsBella.jpg" },
            { id: 4, titulo: "Ciudad de Dios", puntaje: "8.4/10", imagen: "/static/images/ciudadDeDIos.jpg" },
            { id: 5, titulo: "El pianista", puntaje: "9/10", imagen: "/static/images/elPianista.jpg" },
            { id: 6, titulo: "Cinema Paradiso", puntaje: "9/10", imagen: "/static/images/cinemaParadiso.jpg" },
            { id: 7, titulo: "La lista de Schindler", puntaje: "9/10", imagen: "/static/images/laListaDeSchinders.jpg" },
            { id: 8, titulo: "Tiempos Violentos", puntaje: "9/10", imagen: "/static/images/tiemposViolentos.jpg" }
        ],
        comedia: [
            { id: 1, titulo: "The Hangover: part II", puntaje: "5/10", imagen: "/static/images/TheHangover.jpg" },
            { id: 2, titulo: "Supercool", puntaje: "8.8/10", imagen: "/static/images/supercool.jpg" },
            { id: 3, titulo: "Zoolander", puntaje: "9/10", imagen: "/static/images/zoolander.jpg" },
            { id: 4, titulo: "American Pie II", puntaje: "9/10", imagen: "/static/images/americanPie.jpg" },
            { id: 5, titulo: "How High", puntaje: "9/10", imagen: "/static/images/howHigh.jpg" },
            { id: 6, titulo: "Grown Ups", puntaje: "9/10", imagen: "/static/images/grownUps.jpg" },
            { id: 7, titulo: "Donde estan las rubias", puntaje: "9/10", imagen: "/static/images/dondeEstanLasRubias.jpg" },
            { id: 8, titulo: "Los Fockers", puntaje: "9/10", imagen: "/static/images/losFockers.jpg" }
        ],
        accion: [
            { id: 1, titulo: "Kill Bill", puntaje: "9/10", imagen: "/static/images/killbill.jpg" },
            { id: 2, titulo: "Arma letal", puntaje: "8.8/10", imagen: "/static/images/armaLetal.jpg" },
            { id: 3, titulo: "Mision Imposible", puntaje: "9/10", imagen: "/static/images/misionImposible.jpg" },
            { id: 4, titulo: "Rambo", puntaje: "9/10", imagen: "/static/images/rambo.jpg" },
            { id: 5, titulo: "Predator", puntaje: "9/10", imagen: "/static/images/predator.jpg" },
            { id: 6, titulo: "Enter the Dragon", puntaje: "9/10", imagen: "/static/images/enterTheDragon.jpg" },
            { id: 7, titulo: "The Warriors", puntaje: "9/10", imagen: "/static/images/theWarrior.jpg" },
            { id: 8, titulo: "Perros de la calle", puntaje: "9/10", imagen: "/static/images/perrosDeLaCalle.jpg" }
        ],
        romanticas: [
            { id: 1, titulo: "La Propuesta", puntaje: "9/10", imagen: "/static/images/laPropuesta_romanticas.jpg" },
            { id: 2, titulo: "Yo antes de ti", puntaje: "8.8/10", imagen: "/static/images/yoAntesDeTi_romanticas.jpg" },
            { id: 3, titulo: "Votos de amor", puntaje: "9/10", imagen: "/static/images/votosDeAmor_romanticas.jpg" },
            { id: 4, titulo: "Mujer Bonita", puntaje: "9/10", imagen: "/static/images/mujerBonita_romantica.jpg" },
            { id: 5, titulo: "Diario de una Pasion", puntaje: "9/10", imagen: "/static/images/diarioDeUnaPasion_romanticas.jpg" },
            { id: 6, titulo: "500 dias con ella", puntaje: "9/10", imagen: "/static/images/500DiasConElla.jpg" },
            { id: 7, titulo: "Mejor Imposible", puntaje: "9/10", imagen: "/static/images/mejorImposible_romantica.jpg" },
            { id: 8, titulo: "Mamma Mia", puntaje: "9/10", imagen: "/static/images/mammaMia_romantica.jpg" }
        ],
        aventura: [
            { id: 1, titulo: "Jumanji", puntaje: "7/10", imagen: "/static/images/jumanji.jpg" },
            { id: 2, titulo: "Piratas del Caribe", puntaje: "8.8/10", imagen: "/static/images/piratasDelCaribe_aventura.jpg" },
            { id: 3, titulo: "Zathura", puntaje: "9/10", imagen: "/static/images/zathura_aventura.jpg" },
            { id: 4, titulo: "300", puntaje: "9/10", imagen: "/static/images/300_aventura.jpg" },
            { id: 5, titulo: "Uncharted", puntaje: "9/10", imagen: "/static/images/uncharted_aventura.jpg" },
            { id: 6, titulo: "La momia", puntaje: "9/10", imagen: "/static/images/laMomia_aventura.jpg" },
            { id: 7, titulo: "Indiana Jones", puntaje: "9/10", imagen: "/static/images/indianaJones_aventura.jpg" },
            { id: 8, titulo: "Troya", puntaje: "9/10", imagen: "/static/images/Troya_aventura.jpg" }
        ],
        ficcion: [
            { id: 1, titulo: "Volver al Futuro", puntaje: "9/10", imagen: "/static/images/volverAlFuturo.jpg" },
            { id: 2, titulo: "X-Men", puntaje: "8.8/10", imagen: "/static/images/X-men.jpg" },
            { id: 3, titulo: "Harry Potter", puntaje: "9/10", imagen: "/static/images/harryPotter.jpg" },
            { id: 4, titulo: "El señor de los anillos", puntaje: "9/10", imagen: "/static/images/ElSeñorDeLosAnillos.jpg" },
            { id: 5, titulo: "Star Wars", puntaje: "9/10", imagen: "/static/images/starWars.jpg" },
            { id: 6, titulo: "Matrix", puntaje: "9/10", imagen: "/static/images/matrix.jpg" },
            { id: 7, titulo: "Blade Runner", puntaje: "9/10", imagen: "/static/images/bladeRunner.webp" },
            { id: 8, titulo: "Avatar", puntaje: "9/10", imagen: "/static/images/avatar.jpg" }
        ]
    };

    // Guardar las categorías en localStorage
    Object.keys(categorias).forEach(categoria => {
        localStorage.setItem(`peliculas_${categoria}`, JSON.stringify(categorias[categoria]));
    });

    // Buscador de películas
    const buscador = document.getElementById('input-form');

    buscador.addEventListener('input', realizarBusqueda);

    function limpiarTexto(texto) {
        return texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    }

    // Función para realizar la búsqueda de películas
    function realizarBusqueda() {
        const textoBusqueda = limpiarTexto(buscador.value);
        const contenedores = document.querySelectorAll('.contenedor-peliculas');
        let resultadosEncontrados = false;

        contenedores.forEach(contenedor => {
            const peliculas = contenedor.querySelectorAll('.padre-imagen');
            let contenedorTieneResultados = false;

            peliculas.forEach(pelicula => {
                const titulo = limpiarTexto(pelicula.querySelector('.titulo_peli').textContent);
                if (titulo.startsWith(textoBusqueda)) {
                    pelicula.classList.remove('hidden');
                    pelicula.classList.add('resultado-encontrado'); // Agregar clase para destacar
                    contenedorTieneResultados = true;
                    resultadosEncontrados = true;
                } else {
                    pelicula.classList.add('hidden');
                    pelicula.classList.remove('resultado-encontrado');
                }
            });

            if (contenedorTieneResultados) {
                contenedor.classList.remove('hidden');
            } else {
                contenedor.classList.add('hidden');
            }
        });

        const mensaje = document.getElementById('mensaje-sin-resultados');
        if (resultadosEncontrados) {
            mensaje.classList.add('hidden');
        } else {
            mensaje.classList.remove('hidden');
        }
    }

