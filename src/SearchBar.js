// Module to create the SearchBar component
//Imports
import React from 'react';

// SearchBar component

const SearchBar = ({searchfield, searchChange}) => {
    return (
        <div className='searchBar'>
            <input 
                className='searchfield'
                type='search' 
                placeholder='search Title' 
                onChange={searchChange}
            />
            <button className='searchButton'>Search</button>
        </div>
    );
};

export default SearchBar;