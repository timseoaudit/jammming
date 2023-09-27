import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import {useState, useEffect} from 'react';

function SearchBar() {
    const [searchInput, setSearchInput] = useState('');

    <div className="App">
      <Container>
        <InputGroup className="mb-3" size ='lg'>
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            type="imput"
            onKeyPress= {event => {
              if (event.key === 'Enter') {
                console.log('Enter key pressed!');
              }
            }}
            onChange={event => setSearchInput(event.target.value)}
          />
          <Button onClick={event => { console.log("Clicked Button")}}>
            Search
          </Button>
        </InputGroup>
      </Container>
    </div>
};

export default SearchBar;