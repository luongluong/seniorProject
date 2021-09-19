import React from 'react';
import {ReactComponent as Logo} from '../../Logo/star-wars.svg';
import {Link} from "react-router-dom";
import './header-function.style.scss';

const Header= ({currentUser}) =>(
    <div className='header'>

        <Link className='logo-container' to='/'>
            <Logo className='logo'>
            </Logo>
        </Link>

            <div className='menu-top-options'>
                <Link className='option' to='/save'>
                    Save
                </Link>
               
                {
                    currentUser?
                    <div className='option' onClick>Sign Out</div>
                    :
                    <Link className='option' to='/register'>
                    Log In
                    </Link>
                }
            </div>
    </div>
)
export default Header;
