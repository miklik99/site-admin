import React from 'react';
import Controllers from './Controllers/Controllers';
import './Customers.sass';
import Client from './Client';
import arrow from './arrow-body-down.svg';

const Customers = ({ customers, searchChange, sort, sorted }) => {
    return (
        <div className="customers">
            <h1>Customer Overview</h1>
            <Controllers searchChange={searchChange}/>
            <div className="all">
                <div className="head">
                    <p>CUSTOMER</p>
                    <div className="right">
                        <p>COM ID</p>
                        <p>LEG ID</p>
                        <p className="size"onClick={sort}>SIZE{sorted ? <img src={arrow} alt="arrow"/> : <img src={arrow} alt="arrow" style={{transform: "rotate(180deg)"}}/>}</p>
                        <p>STATUS</p>
                    </div>
                </div>
                {
                    customers.map((_client, i) => {
                        return (
                            <Client 
                            key={i}
                            id={customers[i].id}
                            logo={customers[i].logo}
                            name={customers[i].name}
                            com_id={customers[i].com_id}
                            lae_id={customers[i].lae_id}
                            size={customers[i].size}
                            status={customers[i].status}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Customers;