// Get weather from Open Weather API √
// Once weather JSON has been received, return formatted weather
// TODO: use state code to refer to New York state

const { default: axios } = require('axios')
const express = require('express')
const app = express()

const port = 3000
 
app.get('/', (req, res) => {
    res.send('Welcome to your weather dashboard!')
})

app.get('/weather', async (req, res) => {
    const data = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=New York&appid=dd04a9f1cfc6cf77cf55b3adea10f302')
        .then(response => response.data)
    
    console.log('response data: ', data)
})
 
app.listen(port, () => console.log(`Listenting on port ${port}`))