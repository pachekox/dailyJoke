async function getMovies() {

    const response = await fetch('https://official-joke-api.appspot.com/random_joke')
    const movies = await response.json()
    console.log(movies)
    this.joke = movies.setup
    this.punchline = movies.punchline

    document.getElementById('joke').innerHTML=joke;
    document.getElementById('punchline').innerHTML=punchline;

}
window.onload = getMovies;