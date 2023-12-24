var joke
var punchline

async function getJoke() {

    var response = await fetch('https://official-joke-api.appspot.com/random_joke')
    var jokes = await response.json()
    console.log(jokes)
    joke = jokes.setup
    punchline = jokes.punchline

    document.getElementById('joke').innerHTML=joke;
    document.getElementById('punchline').innerHTML=punchline;
    navigator.clipboard.writeText(joke + punchline)




}

// copy a joke to clipboard
function copyJoke(){
    navigator.clipboard.writeText(joke + punchline)
document.getElementById('copied').style.display='block'
    setTimeout(()=>document.getElementById('copied').style.display='none',5000)
    console.log(joke)
}
window.onload = getJoke;