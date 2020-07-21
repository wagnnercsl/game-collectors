import React from 'react';
import './styles.css';
import logo from '../../assets/logo.png';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <div className="header-container">
                        <img src={logo} alt="Games" width={50}/>
                        <h2>Games</h2>
                    </div>
                </header>

                <main>
                    <h1>Seu portal de games preferido.</h1>
                    <p>Conectamos colecionadores de todas as gerações.</p>
                    
                    <div className="buttons-container">

                        <Link to="/create-user">
                            <strong>Cadastrar usuário</strong>
                        </Link>

                        <Link to="/create-console">
                            <strong>Cadastrar videogame</strong>
                        </Link>

                        <Link to="/create-game">
                            <strong>Cadastrar jogos</strong>
                        </Link>
                    </div>

                </main>

            </div>
        </div>
    );
}

export default Home;