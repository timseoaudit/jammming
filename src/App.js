import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import {useState, useEffect} from 'react';
import SearchBar from './SearchBar';


function App() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="App">
      <SearchBar /> 
    </div>
  );
}

export default App;
