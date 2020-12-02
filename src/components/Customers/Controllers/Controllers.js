import React from 'react';
import SearchIcon from './search.png'
import './Controllers.sass';
import plus from './plus.svg'

const Controllers = ({ searchChange }) => {
    return (
        <div className="controllers">
            <div className="SearchBar">
                <img src={SearchIcon} />
                <input type="search" placeholder="Customer or ID" onChange={searchChange}/>
            </div>
            <div className="plus">
            <img src={plus} />
            </div>
        </div>
    );
}

export default Controllers;