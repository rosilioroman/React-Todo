import React from 'react';

const SearchBar = props => {
    return (
        <div>
            <input 
                type="text" 
                onChange={props.searchInput} 
                value={props.searchText} 
                name="searchText"
                placeholder="search..."
            >
            </input>
        </div>
    );
}

export default SearchBar;