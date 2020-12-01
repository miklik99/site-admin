import React from 'react';

const Client = ({ logo, name, com_id, lae_id, size, status}) => {
    return (
        <div className="customer">
            <div className="companyName">
                <img src={require(`../../images/${logo}`).default} className="img-inline" alt="logo?"/>
                <p>{name}</p>
            </div>
            <button>Default</button>
            <div className="right">
                <p>{com_id}</p>
                <p>{lae_id}</p>
                <p>{size}</p>
                <p className="status">{status}</p>
            </div>
        </div>
    );
}

export default Client;