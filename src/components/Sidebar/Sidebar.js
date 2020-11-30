import React from 'react';
import './Sidebar.sass';

function Sidebar() {
    return (
        <div className="sidebar">
            <p>SITE ADMIN</p>
            <a href="#">Customer Overview</a>
            <a href="#">Reports</a>
            <a href="#">File transcodings</a>
            <a href="#">Notification Center</a>
        </div>
    );
}

export default Sidebar;