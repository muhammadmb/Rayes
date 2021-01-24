import React from 'react';

const Header = () => {

    return(
        <nav>
            <div className = "logo">Rayes</div>
            <ul>
                <li>Home</li>
                <li>Our Products</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
            <div className="Search">
                <i className = "fa fa-search"></i>
                <i className = "fa fa-shopping-basket"></i>
            </div>
        </nav>
    );

}

export default Header;