//     // Get elements from the DOM (Document Object Model) 
const bntGetJoke = document.querySelector('.btnGetJokes'); //Get the button 
const displayJokes = document.querySelector('.displayJokes') //Get the div

// const result = await fetch('/api/v1/random-joke')

bntGetJoke.addEventListener('click', () => {

    (async () => {

        const h2 = document.querySelector('.displayJokes>h2')
        const h3 = document.querySelector('.displayJokes>h3')

        const url = '/api/v1/random-joke'

        const result = await fetch(url)
        const {joke, punchline } = await result.json()

        h2.textContent = `Joke: ${joke} `
        h3.textContent = `Punchline: ${punchline}`
    })()

});


