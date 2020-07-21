import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.png';


const Header = () => {
    return(
        <header>
            <img src={logo} alt="Games" width={50}/>

            <Link to="/">
                <FiArrowLeft />
                Voltar para a home
            </Link>
        </header>
    )
}

export default Header;