import React, {useContext} from 'react';
import { Link } from "react-router-dom";

//Context
import { ClickContex } from '../../contexts/ClickProvider';
//Styles
import "./Navbar.scss";

//Icons
import {AiOutlineHome, AiOutlineFund, AiOutlineMoneyCollect, AiOutlineBulb} from "react-icons/ai";

const Navbar = () => {

    const {menu} = useContext(ClickContex);

    return (
        <div 
            className='nav-container'
        >
            <div className="logo-container">
                <Link to="/">Crypto App</Link>
            </div>
            <div className='menu'>
                <Link to="/"><AiOutlineHome className='icon'/> Home</Link>
                <Link to="/cryptocurrencies"><AiOutlineFund className='icon'/> Cryptocurrencies</Link>
                <Link to="/exchanges"><AiOutlineMoneyCollect className='icon'/> Exchanges</Link>
                <Link to="/news"><AiOutlineBulb className='icon'/> News</Link>
            </div>
        </div>
    );
};

export default Navbar;