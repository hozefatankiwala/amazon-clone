import React from 'react'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import "./Header.css"
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase"

function Header() {
    const [{ cart, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="https://www.pinclipart.com/picdir/big/358-3584545_amazon-web-services-logo-png-transparent-svg-vector.png" />
            </Link>
            <div className="header__location">
                <LocationOnOutlinedIcon />
                <div className="header__locationText">
                    <p>Hello</p>
                    <h4>Select you address</h4>
                </div>
            </div>
            <div className="header__search">
                <input className="header__searchInput" type="text"></input>
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to='/login'>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionOne">
                            Hello User,
                        </span>
                        <span className="header__optionTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionOne">
                        Returns
                    </span>
                    <span className="header__optionTwo">
                        & Orders
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionCart">
                        <ShoppingCartOutlinedIcon className="header__cartIcon" />
                        <span className="header__optionLineTwo header__cartCount">
                            {cart?.length}
                        </span>
                        <span className="header__optionTwo">Cart</span>
                    </div>
                </Link>
            </div >
        </div >
    )
}

export default Header
