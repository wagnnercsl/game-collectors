import React, { useState , useEffect, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import axios from 'axios';
import api from '../../services/api';

import './styles.css';
import Header from '../Header';

interface Item {
    id: number;
    title: string;
    image_url: string;
}

interface IBGEUFResponse {
    sigla: string;
}

interface IBGECityResponse {
    nome: string;
}

const CreateUser = () => {

    const [items, setItems] = useState<Item[]>([]);
    const [ufs, setUfs] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
    });

    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    
    const history = useHistory();

    //useEffect(() => {
        //api.get('items').then(response => {
        //    setItems(response.data);
        //})
    //}, []);

    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(response => {
            const ufInitials = response.data.map(uf => uf.sigla);
            setUfs(ufInitials);
        })
    });

    useEffect(() => {
        if(selectedUf === '0') {
          return;
        }
        axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
        .then(response => {
            const cityNames = response.data.map(city => city.nome);
            setCities(cityNames);
        })
    }, [selectedUf]);

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
        
        const { name, email, whatsapp } = formData;
        const uf = selectedUf;
        const city = selectedCity;
        const items = selectedItems;

        const data = {
            name,
            email,
            whatsapp,
            uf,
            city,
        };

        await api.post('users', data);

        alert('Cadastro realizado com sucesso!');
        history.push('/');
    }

    return(
        <div id="page-create-point">
            <Header />

            <form onSubmit={handleSubmit}>
                <h1>Cadastro de <br/> usuários</h1>

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
                                <label htmlFor="email">E-mail</label>
                                <input 
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleInputChange}
                                />
                            </div>

                            <div className="field">
                                <label htmlFor="whatsapp">Whatsapp</label>
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

                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                    </legend>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (UF)</label>
                            <select 
                              name="uf" 
                              id="uf"
                              value={selectedUf}
                              onChange={handleSelectUf}
                            >
                              <option value="0">Selecione uma UF</option>
                              {ufs.map(uf => (
                                  <option key={uf} value={uf}>{uf}</option>   
                              
                              ))}
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select 
                            name="city" 
                            id="city"
                            value={selectedCity}
                            onChange={handleSelectCity}
                            >
                                <option value="0">Selecione uma cidade</option>
                                {cities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </fieldset>

                <button type="submit">
                    Salvar
                </button>
            </form>

        </div>
    );
}

export default CreateUser;