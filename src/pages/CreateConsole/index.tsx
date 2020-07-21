import React, { useState , useEffect, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import axios from 'axios';
import api from '../../services/api';

import './styles.css';
import logo from '../../assets/logo.png';

interface Console {
    id: number;
    name: string;
    year: string;
    image: string;
}

const CreateConsole = () => {

    const [formData, setFormData] = useState({
        name: '',
        year: '',
        image: '',
    });

    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    
    const history = useHistory();

    function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value;
        setSelectedUf(uf);
    }

    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = event.target.value;
        setSelectedCity(city);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        
        setFormData({...formData, [name]: value});
    }

    function handleSelectItem(id: number) {
        const alreadySelected = selectedItems.findIndex(item => item === id);

        if(alreadySelected >= 0) {
            const filteredItems = selectedItems.filter(item => item !== id);

            setSelectedItems(filteredItems);
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        
        const { name, year, image } = formData;

        const data = {
            name,
            year,
            image,
        };

        await api.post('consoles', data);

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
                <h1>Cadastro de <br/> consoles</h1>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="name">Nome</label>
                        <input 
                        type="text"
                        name="name"
                        id="name"
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
                                <label htmlFor="whatsapp">Imagem</label>
                                <input 
                                type="text"
                                name="whatsapp"
                                id="whatsapp"
                                onChange={handleInputChange}
                                />
                            </div>
                        </div>

                    </legend>
                </fieldset>

                <button type="submit">
                    Salvar
                </button>
            </form>

        </div>
    );
}

export default CreateConsole;