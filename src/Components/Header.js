import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
            <div className="search">
                <SearchIcon />
                <ShoppingCartIcon />
            </div>
        </nav>
    );

}

export default Header;