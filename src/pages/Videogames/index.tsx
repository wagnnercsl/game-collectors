import React, {useEffect, useState} from 'react';
import { FiLogIn, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import logo from '../../assets/logo.png';

interface Videogame {
    id: number,
    name: string, 
    image: string,
    year: string,
}

const Videogames = () => {
    const [videogames, setVideogames] = useState<Videogame[]>([]);
    const exampleVideogame = [{
        id: 1,
        title: "Atari",
        year: "1972"
    }];

    useEffect(() => {
        api.get('videogames').then(response => {
            setVideogames(response.data);
        });
    }, []);

    return (
        <div id="page-videogames">
            <div className="content">
                <header>
                    <img src={logo} alt="Games" height={50}/>
                </header>

                <main>
                    <div className="videogames-container">
                        <ul className="videogames-list">
                        {
                            exampleVideogame.map(videogame => 
                                <li key={videogame.id} className="">
                                    <div>
                                        <p>{videogame.title}</p>
                                        <p>{videogame.year}</p>
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

export default Videogames;