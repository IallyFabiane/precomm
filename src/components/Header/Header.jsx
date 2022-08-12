import React from 'react';
import logotipo from 'assets/logo.svg';
import { FaUserAlt, FaSearch, FaShoppingCart } from "react-icons/fa";
import './header.css';

function Header(props) {

    return (
        <header className='cabecalho'>
            <img src={logotipo} alt="Logotipo da pr'Ecormm" className='cabecalho__logo' />
            <div className='cabecalho__bloco'>
                <input
                value= {props.value}
                onChange={props.onChange}
                type="text"
                placeholder="Buscar produto..." 
                maxLength="30" 
                spellCheck 
                className='cabecalho__input' />
                <button type='button' onClick={props.onClick} className='cabecalho__lupa'><FaSearch className='icon' /></button>
            </div>
            <div className='cabecalho__bloco'>
                <h4 className='cabecalho__nome'>Olá usuário <FaUserAlt className='icon' /></h4>
                <button type='button' className='cabecalho__carrinho--ecommerce'><FaShoppingCart className='icon' /></button>
            </div>
        </header>
    );
}

export default Header;