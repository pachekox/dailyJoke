const app = Vue.createApp({
    data() {
        return {
            punchline: '',
            joke: 'hhjjhg',

        }
    },
    methods: {
        async getMovies() {

            const response = await fetch('https://official-joke-api.appspot.com/random_joke')
            const movies = await response.json()
            console.log(movies)
            this.joke = movies.setup
            this.punchline = movies.punchline

        }
    },


})

// getMovies()
app.mount('#app')