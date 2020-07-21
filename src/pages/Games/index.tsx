import React, {useEffect, useState} from 'react';
import { FiTrash2, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import logo from '../../assets/logo.png';

interface Game {
    id: number,
    title: string,
    year: string
    image: string
}

const Games = () => {
    const [games, setGames] = useState<Game[]>([]);
    const exampleGame = [{
        id: 1,
        title: "Pac Man",
        year: "1980"
    }];

    useEffect(() => {
        api.get('games').then(response => {
            setGames(response.data);
        });
    }, []);

    return (
        <div id="page-users">
            <div className="content">
                <header>
                    <img src={logo} alt="Games" width={40}/>
                </header>

                <main>
                    <div className="users-container">
                        <ul className="user-list">
                        {
                            exampleGame.map(game => 
                                <li key={game.id} className="">
                                    <div>
                                    <span>{game.title}</span>
                                    <span>
                                        <FiTrash2 />
                                    </span>
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

export default Games;