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

app.get('/login', function (req, res) {
    const state = generateRandomString(16);
    res.cookie(stateKey, state);

    //application requests authorization
    const scope =
      'user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public';

    res.redirect(
      `https://accounts.spotify.com/authorize?${querystring.stringify({
        response_type: 'code',
        client_id: CLIENT_ID,
        scope: scope,
        redirect_uri: REDIRECT_URI,
        state: state,
      })}`,
    );
  });

app.get('/callback', (req, res) => {
    //callback functionality after the user logs into Spotify account
    res.redirect()
})

app.listen(port, () => {
    console.log(`Express app listensing at http://localhost:${port}`);
});
