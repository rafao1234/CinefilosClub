async function getPopularMovies() {
    const movies = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=9efd1c22d32f20feb5d64f5268db1f54&language=pt-br&page=1")
        .then(response => response.json())
        .then(data => data.results)
    const filteredMovies = Array.from(movies).slice(0, 4)
    await console.log(movies)
    return filteredMovies
}
getPopularMovies()
async function destaques() {
    const movies = await getPopularMovies()
    const moviessections = document.querySelector(".posters")
    for (let i = 0; i < movies.length; i++) {
        const movie = document.createElement("div")
        movie.innerHTML += `<img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}">`
        movie.innerHTML += `<p>${movies[i].original_title}</p>`
        movie.innerHTML += `<p>Avaliações:${movies[i].vote_average}<i class="material-icons">star</i></p>`
        movie.innerHTML += `<p>Lançamento:${movies[i].release_date}</p>`
        movie.innerHTML += `<a href="https://www.themoviedb.org/movie/${movies[i].id}?language=pt-BR">Ver Mais</a>`
        moviessections.appendChild(movie)
    }
    console.log(movies)
}
destaques()

    