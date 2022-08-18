/* eslint-disable */
import { useState } from 'react';
import logotipo from 'assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import './cadastro.css';

const Cadastro = () => {
    const [state, setState] = useState('');
    const [senha, setSenha] = useState('');
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
        <div className='cadastro'>
            <form className='cadastro__form'>
                    <img src={logotipo} alt="Logotipo da pr'Ecormm" className="cadastro__img cadastro__logo" />

                    <label className='cadastro__label'>Nome</label>
                    <input type="text" id="nome" placeholder="Seu nome aqui"  className='cadastro__input' onBlur={handleChange} />
            
                    <label className='cadastro__label'>Sobrenome</label>
                    <input type="text" id="sobrenome" placeholder="Seu sobrenome aqui" className='cadastro__input' onBlur={handleChange} />
            
                
                    <label className='cadastro__label'>E-mail</label>
                    <input type="email" id="email" placeholder="usuario@mail.com" className='cadastro__input' onBlur={handleChange} />

                    <label className='cadastro__label'>Senha</label>
                    <input type="password" id="senha" placeholder="......" className='cadastro__input' onBlur={handleChange} />
                
                    <label className='cadastro__label'>Telefone</label>
                    <input type="tel" id="telefone" placeholder="(xx) xxxxx - xxxx" className='cadastro__input' onBlur={handleChange} required />
                
                    <label className='cadastro__label'>Endereço</label>
                    <input type="text" id="endereço" placeholder="Nome da rua, nº - Bairro Cidade-UF" className='cadastro__input' onBlur={handleChange} />

                    <button variant="primary" onClick={handleSubmit} type="submit" className='cadastro__botao'>Submit</button>
          
            </form>
        </div>
    
       
    ); 
};

export default Cadastro;