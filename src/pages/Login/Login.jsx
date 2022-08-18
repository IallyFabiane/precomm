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

    function handleRegistration (e) {
        navigate("/Cadastro");
    };

    return (
        <>
        <div className="login">
            <form className="login__form">
<<<<<<< HEAD
                <img src={logotipo} alt="Logotipo da pr'Ecormm" className="login__img login__logo" />

                <label className="login__label" htmlFor=''>E-mail</label>
=======
                <div className="login__img">
                    <img src={logotipo} alt="Logotipo da pr'Ecormm" className="login__logo" />
                </div>
                <label htmlFor='' className="login__label">E-mail</label>
>>>>>>> f1abbdf8e11be4fd290c942df0b2928cc7b5ce18
                <input 
                    type="text" 
                    placeholder="nome@email.com" 
                    maxLength="50"
<<<<<<< HEAD
                    className="login__input"
                    required 
                    onChange={handleChange}
                />
                
                <label className="login__label" htmlFor=''>Senha</label>
=======
                    required 
                    onChange={handleChange}
                    className="login__input"
                />

                <label htmlFor='' className="login__label">Senha</label>
>>>>>>> f1abbdf8e11be4fd290c942df0b2928cc7b5ce18
                <input
                    type="password" 
                    placeholder="digite sua senha aqui" 
                    minLength="8"
<<<<<<< HEAD
                    className="login__input"
                    required 
                    onChange={handleChange}
                />

                <button className="login__botao" type='button' onClick={handleSubmit}>Entrar</button>

                <p className="login__paragrafo ">Não tem conta?</p>

                <button className="login__botao" type='button' onClick={handleRegistration}>Cadastre-se</button>
=======
                    required 
                    onChange={handleChange}
                    className="login__input"
                />

                <button type="button" onClick={handleSubmit} className="login__botao">Entrar</button>

                <p className="login__paragrafo">Não tem conta?</p>

                <button type="button" className="login__botao">Cadastre-se</button>
            </form>
>>>>>>> f1abbdf8e11be4fd290c942df0b2928cc7b5ce18

            </form>
            
        </div>
        </>
    );
}

export default Login;