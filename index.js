require('dotenv').config()
const express = require ('express');
const querystring = require('querystring');
const app = express();
const port = 8000;


const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;



//To check if client ID is being displayed on the console
console.log(process.env.CLIENT_ID);

app.get('/', (req, res) => {
    const data = {
        name: 'Jayesh',
        isFantastic: true
    };

    res.json(data);
});


const generateRandomString = length => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };
  
const stateKey = 'spotify_auth_state';

// app.get('/fantastic-generator', (req, res) => {
//     const {name, isFantastic} = req.query;
//     res.send('${name} is ${JSON.parse(isAwesome) ? really} awesome');
// })

app.get('/login', (req, res) => {

    const queryParams = querystring.stringify({
        client_id : CLIENT_ID,
        response_type : 'code',
        redirect_uri: REDIRECT_URI,
    })
    // res.send('Test login to Spotify');
    res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});

app.get('/callback', (req, res) => {
    //callback functionality after the user logs into Spotify account
    res.redirect()
})

app.listen(port, () => {
    console.log(`Express app listensing at http://localhost:${port}`);
});
