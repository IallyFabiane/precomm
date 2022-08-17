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

    function handleRegistration (e) {
        navigate("/Cadastro");
    };

    return (
        <>
        <div className="login">
            <form className="login__form">
                <img src={logotipo} alt="Logotipo da pr'Ecormm" className="login__img login__logo" />

                <label className="login__label" htmlFor=''>E-mail</label>
                <input 
                    type="text" 
                    placeholder="nome@email.com" 
                    maxLength="50"
                    className="login__input"
                    required 
                    onChange={handleChange}
                />
                
                <label className="login__label" htmlFor=''>Senha</label>
                <input
                    type="password" 
                    placeholder="digite sua senha aqui" 
                    minLength="8"
                    className="login__input"
                    required 
                    onChange={handleChange}
                />

                <button className="login__botao" type='button' onClick={handleSubmit}>Entrar</button>

                <p className="login__paragrafo ">Não tem conta?</p>

                <button className="login__botao" type='button' onClick={handleRegistration}>Cadastre-se</button>

            </form>
            
        </div>
        </>
    );
}

export default Login;