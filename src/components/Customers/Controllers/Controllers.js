import React from 'react';
import SearchIcon from './search.png'
import './Controllers.sass';

const Controllers = ({ searchChange }) => {
    return (
        <div className="controllers">
            <div className="SearchBar">
                <img src={SearchIcon} />
                <input type="search" placeholder="Customer or ID" onChange={searchChange}/>
            </div>
            <button />
        </div>
    );
}

export default Controllers;