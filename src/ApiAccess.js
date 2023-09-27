import {useState, useEffect} from 'react';

const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';

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
