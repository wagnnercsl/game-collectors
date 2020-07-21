import React, {useEffect, useState} from 'react';
import { FiLogIn, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import logo from '../../assets/logo.png';

interface GameConsole {
    id: number,
    name: string, 
    image: string,
    year: string,
}

const Consoles = () => {
    const [gameConsoles, setGameConsoles] = useState<GameConsole[]>([]);
    const exampleVideogame = [{
        id: 1,
        title: "Atari",
        year: "1972"
    }];

    useEffect(() => {
        api.get('consoles').then(response => {
            setGameConsoles(response.data);
        });
    }, []);

    return (
        <div id="page-consoles">
            <div className="content">
                <header>
                    <img src={logo} alt="Games" height={50}/>
                </header>

                <main>
                    <div className="consoles-container">
                        <ul className="consoles-list">
                        {
                            exampleVideogame.map(gameConsole => 
                                <li key={gameConsole.id} className="">
                                    <div>
                                        <p>{gameConsole.title}</p>
                                        <p>{gameConsole.year}</p>
                                    </div>
                                </li>
                            )
                        }
                        </ul>
                    </div>

                    <Link to="/">
                        <span>
                            <FiArrowLeft />
                        </span>
                        <strong>Voltar</strong>
                    </Link>
                </main>

            </div>
        </div>
    );
}

export default Consoles;