const api = '46d234cc6703473b204fdcae0ed69364';
const year = '2021'
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&sort_by=popularity.desc&page=1&year=${year}`;

const content = document.getElementById('content')
const urlimg=`https://image.tmdb.org/t/p/w500/`
async function DisplayMovie(url){
    const response = await fetch(url)
    const movie = await response.json()
    movie.results.forEach(data =>{
        const movieEl = document.createElement('div')
        const title = document.createElement('h2')
        const img =document.createElement('img')
        title.innerHTML=`${data.title}`
        img.src =`${urlimg}${data.poster_path}`
        movieEl.appendChild(title)
        movieEl.appendChild(img)
        content.appendChild(movieEl)
    });
    console.log(movie);
}

DisplayMovie(url)