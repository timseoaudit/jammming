import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button} from 'react-bootstrap';
import {useState} from 'react';
import Search from './Search';

function SearchBar() {
    const [searchInput, setSearchInput] = useState('');

    return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3" size ='lg'>
          <FormControl
            placeholder="Enter Artist, Song, or Album"
            aria-label="Enter Artist, Song, or Album"
            aria-describedby="basic-addon2"
            type="imput"
            onKeyPress= {event => {
              if (event.key === 'Enter') {
                Search.search(searchInput);
              }
            }}
            onChange={event => setSearchInput(event.target.value)}
          />
          <Button onClick={Search}>
            Search
          </Button>
        </InputGroup>
      </Container>
    </div>
    );
};

export default SearchBar;