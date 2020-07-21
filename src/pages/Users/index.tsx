import React, {useEffect, useState} from 'react';
import { FiLogIn, FiArrowLeft, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import logo from '../../assets/logo.png';

interface User {
    id: number,
    name: string, 
    avatar: string,
    email: string,
    city: string,
    uf: string
}

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);
    const exampleUser = [
        {
         id: 1,
         name: "Wagnner",
         email: "wagnner.leivas@gmail.com"
        },
        {
            id: 2,
            name: "Pablo",
            email: "vidarte@gmail.com"
        },
];

    useEffect(() => {
        api.get('users').then(response => {
            setUsers(response.data);
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
                            exampleUser.map(user => 
                                <li key={user.id} className="">
                                    <div>
                                    <span>{user.email}</span>
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

export default Users;