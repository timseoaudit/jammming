import {useState, useEffect} from 'react';

const CLIENT_ID = '1a672fd1f3014899a3c1fb50aac6b4e7';
const CLIENT_SECRET = 'd60be553af1e4cc389f9380b6111b6a9';

function ApiFetch() {
const [token, setToken] = useState('');

useEffect (() => {
let authParameters =  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
}
    fetch('https://accounts.spotify.com/api/token', authParameters)
        .then(response => response.json())
        .then(data => setToken(data.access_token));
}, []);
};

export default ApiFetch;
