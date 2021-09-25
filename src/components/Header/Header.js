import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div>
        <div className="header-sec">
            <h1>Billionaire <span>Publications</span> </h1>
            <nav className="navbar">
                <a href="/about">About Us</a>
                <a href="/publication">Our publications</a>
                <a href="/order">Order</a>
                <a href="/contact">Contact Us</a>

            </nav>
        </div>
        <div className="total-sec">
            <h1>Total Cost For Publications: <span>$ 1 Million</span></h1>
        </div>
        </div>
        
    );
};

export default Header;