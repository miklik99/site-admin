import React from 'react';
import Dropdown from './Dropdown';

const Client = ({ logo, name, com_id, lae_id, size, status}) => {
    return (
        <div className="customer">
            <div className="companyName">
                <div className="logo">
                    <img src={require(`../../images/${logo}`).default} className="img-inline" alt={`logo${name}`}/>
                </div>
                <p>{name}</p>
            </div>
            <Dropdown title="Default" list={['1', '2', '3']}/>
            <div className="right">
                <p>{com_id}</p>
                <p>{lae_id}</p>
                <p style={{textAlign:"right", width:"50px" }}>{size} GB</p>
                <p className="status">{status}</p>
            </div>
        </div>
    );
}

export default Client;