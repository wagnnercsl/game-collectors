import React, { useState , useEffect, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import axios from 'axios';
import api from '../../services/api';

import './styles.css';
import logo from '../../assets/logo.png';

interface Game {
    id: number;
    title: string;
    year: string;
    image: string;
}

interface GameConsole {
    id: number;
    name: string;
    year: string;
    image: string;
}

const CreateGame = () => {

    const [game, setGame] = useState<Game>();
    const [gameConsole, setConsole] = useState<GameConsole>();
    const [gameConsolesList, setGameConsolesList] = useState<GameConsole[]>([]);

    const [formData, setFormData] = useState({
        title: '',
        year: '',
        image: '',
    });

    const [selectedConsole, setSelectedConsole] = useState<number[]>([]);
    
    const history = useHistory();

    useEffect(() => {
        api.get('consoles').then(response => {
           setGameConsolesList(response.data);
        })
    }, []);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        
        setFormData({...formData, [name]: value});
    }

    function handleSelectItem(id: number) {
        const alreadySelected = selectedConsole.findIndex(item => item === id);

        if(alreadySelected >= 0) {
            const filteredItems = selectedConsole.filter(item => item !== id);

            setSelectedConsole(filteredItems);
        } else {
            setSelectedConsole([...selectedConsole, id]);
        }
        
        console.log(selectedConsole);
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        
        const { title, year, image } = formData;

        const data = {
            title,
            year,
            image,
        };

        await api.post('games', data);

        alert('Cadastro realizado com sucesso!');
        history.push('/');
    }

    return(
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Games" width={50}/>

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para a home
                </Link>
            </header>

            <form onSubmit={handleSubmit}>
                <h1>Cadastro de <br/> games</h1>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="title">Título</label>
                        <input 
                        type="text"
                        name="title"
                        id="title"
                        onChange={handleInputChange}
                        />
                    </div>
                    
                </fieldset>

                <fieldset>
                    <legend>
                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="year">Ano de lançamento</label>
                                <input 
                                type="text"
                                name="year"
                                id="year"
                                onChange={handleInputChange}
                                />
                            </div>

                            <div className="field">
                                <label htmlFor="image">Imagem</label>
                                <input 
                                type="text"
                                name="image"
                                id="image"
                                onChange={handleInputChange}
                                />
                            </div>
                        </div>

                    </legend>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Console do game</h2>
                        <span>Selecione um item abaixo</span>
                    </legend>

                    <ul className="items-grid">
                        
                        { gameConsolesList.map(item => 
                            (
                                <li 
                                className={selectedConsole.includes(item.id) ? 'selected': ''}
                                key={item.id} 
                                onClick={() => handleSelectItem(item.id)}>
                                    <img src={item.image} alt={item.image} />
                                <span>{item.name}</span>
                                </li>
                            )
                        ) }
                        
                    </ul>
                </fieldset>

                <button type="submit">
                    Salvar
                </button>
            </form>

        </div>
    );
}

export default CreateGame;