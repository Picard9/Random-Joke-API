
//Import the express package into my app
const express = require('express') 

// add path module and root of the static files

const path = require('path')// Import the path package into my app
const root = path.join(__dirname, 'public') /*Tell the server where the File is located*/

//Step #6
const app = express() //Invoke express as a method/function and bind it to a variable which will represent my Listener
const port = 3000

//Step #7 Setup my application to handle requests 

/*Tell express how to handle the JSON*/
app.use(express.json()) //Allows to send JSON

/*Tell express how to handle response with static webpages (html) */
app.use(express.static('public'))

/*Creat routes / end pointfor the front end*/ 

// End points on the root
app.get('/', (request, response) => {
    response.sendFile('index.html', {root})
})

// End points on a route called /api/v1/random-joke
app.get('/api/v1/random-joke', (req, res) => {
    const jokes = require('./joke.json')  
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
    res.send( {id, joke, punchline} = randomJoke )
})


app.listen(port, () => console.log(`http://localhost:${port}/`)) //Method that starts a web server and binds it to the given port.

