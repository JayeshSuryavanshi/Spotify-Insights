const express = require ('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    const data = {
        name: 'Jayesh',
        isFantastic: true
    };

    res.json(data);
});

app.get('/fantastic-generator', (req, res) => {
    const { name, isFantastic } = req.query;
    res.send('${name} is ${JSON.parse(isFantastic) ? 'really':
    'not'} fantastic');
});


app.listen(port, () => {
    console.log('Express app listensing at http://localhost:${port}');
});
