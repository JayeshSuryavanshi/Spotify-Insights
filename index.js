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

app.listen(port, () => {
    console.log('Express app listensing at http://localhost:${port}');
});
