require('dotenv').config()
const express = require ('express');
const app = express();
const port = 8000;

//To check if client ID is being displayed on the console
console.log(process.env.CLIENT_ID);

app.get('/', (req, res) => {
    const data = {
        name: 'Jayesh',
        isFantastic: true
    };

    res.json(data);
});

app.get('/fantastic-generator', (req, res) => {
    const {name, isFantastic} = req.query;
    res.send('${name} is ${JSON.parse(isAwesome) ? really} awesome');
})

app.listen(port, () => {
    console.log('Express app listensing at http://localhost:${port}');
});
