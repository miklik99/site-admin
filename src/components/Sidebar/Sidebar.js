import React from 'react';
import './Sidebar.sass';
import online from './online.svg';
import list from './list-dot.png';
import files from './file-add.png';
import bell from './notification.png';

function Sidebar() {
    return (
        <div className="sidebar">
            <p>SITE ADMIN</p>
            <a className="active" href="#"><img src={online}/>Customer Overview</a>
            <a href="#"><img src={list}/>Reports</a>
            <a href="#"><img src={files}/>File transcodings</a>
            <a href="#"><img src={bell}/>Notification Center</a>
        </div>
    );
}

export default Sidebar;