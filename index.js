const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
    res.send('Hello World');
    res.end();
})
 
app.listen(8080, () => {
    console.log('app is running on server port: 8080')
})