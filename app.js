async function getJoke() {

    const response = await fetch('https://official-joke-api.appspot.com/random_joke')
    const jokes = await response.json()
    console.log(jokes)
    this.joke = jokes.setup
    this.punchline = jokes.punchline

    document.getElementById('joke').innerHTML=joke;
    document.getElementById('punchline').innerHTML=punchline;
    

}

// copy a joke to clipboard
function copyJoke(){
    return 0
}
window.onload = getJoke;