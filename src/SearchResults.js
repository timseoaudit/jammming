//Module to create SearchResults component
//Imports
import React, {useState} from 'react';

//SearchResults component
const SearchResults = (searchRequest) => {
    const [result, setResult] = useState([]);
    setResult(searchRequest);
    return (
        <div className='searchResults'>
            <h1>Search Results</h1>
            <p>{result}</p>
        </div>
    )
};

export default SearchResults;