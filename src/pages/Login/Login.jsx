import React from 'react';
import logotipo from 'assets/logo.svg'
import './login.css';

function Login() {
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
            />

            <label htmlFor=''>Senha</label>
            <input
                type="password" 
                placeholder="digite sua senha aqui" 
                minLength="8"
                required 
            />

            <button type='button'>Entrar</button>

            <p>Não tem conta?</p>

            <button type='button'>Cadastre-se</button>

        </div>
        </>
    );
}

export default Login;