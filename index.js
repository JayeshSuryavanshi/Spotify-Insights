const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello in my world!');
});

const port = 8000;

app.listen(port, () => {
    console.log('Express app listensing at http://localhost:${port}');
})
