/* eslint-disable no-unused-vars */
import React from 'react';
import logotipo from 'assets/logo.svg';
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
        <div className="login">
            <form className="login__form">
                <div className="login__img">
                    <img src={logotipo} alt="Logotipo da pr'Ecormm" className="login__logo" />
                </div>
                <label htmlFor='' className="login__label">E-mail</label>
                <input 
                    type="text" 
                    placeholder="nome@email.com" 
                    maxLength="50"
                    required 
                    onChange={handleChange}
                    className="login__input"
                />

                <label htmlFor='' className="login__label">Senha</label>
                <input
                    type="password" 
                    placeholder="digite sua senha aqui" 
                    minLength="8"
                    required 
                    onChange={handleChange}
                    className="login__input"
                />

                <button type="button" onClick={handleSubmit} className="login__botao">Entrar</button>

                <p className="login__paragrafo">Não tem conta?</p>

                <button type="button" className="login__botao">Cadastre-se</button>
            </form>

        </div>
        </>
    );
}

export default Login;