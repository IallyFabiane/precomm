/* eslint-disable no-unused-vars */
import React from 'react';
import logotipo from 'assets/logo.svg'
import './login.css';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [state, setState] = useState('');
    let navigate = useNavigate();

    function handleChange (e) { 
        const value = e.target.value;
        setState(value);
        localStorage.setItem(value, JSON.stringify(value));
    }

    function handleSubmit (e) {
       navigate("/Ecommerce");
    };

    return (
        <>
        <div>
            <img src={logotipo} alt="Logotipo da pr'Ecormm" className='cabecalho__logo' />

            <label htmlFor=''>E-mail</label>
            <input 
                type="text" 
                placeholder="nome@email.com" 
                maxLength="50"
                required 
                onChange={handleChange}
            />

            <label htmlFor=''>Senha</label>
            <input
                type="password" 
                placeholder="digite sua senha aqui" 
                minLength="8"
                required 
                onChange={handleChange}
            />

            <button type='button' onClick={handleSubmit}>Entrar</button>

            <p>Não tem conta?</p>

            <button type='button'>Cadastre-se</button>

        </div>
        </>
    );
}

export default Login;