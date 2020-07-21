import React from 'react';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
    return (
     <header>
        <h1>Ecoleeta</h1>
        {title}
     </header>);
}

export default Header;