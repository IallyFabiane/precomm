import React, { useState } from 'react';
import Header from 'components/Header';
import produtos from './produtos.json';
import Produto from 'components/Produto';
import Titulo from 'common/Titulo';
import Ordena from 'components/Ordena';
import "./ecommerce.css";


function Ecommerce() {
    const [textoInput, setTextoInput] = useState('');

    console.log('Renderizou', textoInput);

    function clickBotao() {
        console.log("botao");
    }

    return (
       <>
        <Header value={textoInput} onChange={e => setTextoInput(e.target.value)} onClick={clickBotao} />

        <main className='conteudo'>
            <div className='conteudo__filtro'>
                <div className='conteudo__caixafiltro'>
                    <Titulo name="Produto" />
                    <ul>
                        <li className='conteudo__descricao'>Colar de Ouro</li>
                        <li className='conteudo__descricao'>Colar de Prata</li>
                        <li className='conteudo__descricao'>Colar Único</li>
                        <li className='conteudo__descricao'>Colar Multiplo</li>
                    </ul>
                </div>
                <div className='conteudo__caixafiltro'>
                    <Titulo name="Preço" />
                    <div>
                        <input type="checkbox" id="precol" name="precolado" className='conteudo__checkbox' />
                        <label htmlFor='precol' className='conteudo__descricao'>até R$ 9.99</label>
                    </div>
                    <div>
                        <input type="checkbox" id="precoa" name="precolado" className='conteudo__checkbox' />
                        <label htmlFor='precoa' className='conteudo__descricao'>até R$ 19.99</label>
                    </div>
                    <div>
                        <input type="checkbox" id="precod" name="precolado" className='conteudo__checkbox' />
                        <label htmlFor='precod' className='conteudo__descricao'>até R$ 29.99</label>
                    </div>
                    <div>
                        <input type="checkbox" id="precoo" name="precolado" className='conteudo__checkbox' />
                        <label htmlFor='precoo' className='conteudo__descricao'>até R$ 39.99</label>
                    </div>
                </div>
            </div>
            <div className='conteudo__loja'>
                <Ordena />
                <div className='conteudo__caixaproduto'>
                    {produtos.filter((produto) => {
                        if(textoInput === "") {
                            return produto
                        } else if (produto.nome.toLowerCase().includes(textoInput.toLowerCase())) {
                            return produto
                        }
                        return("") 
                    }).map(produto => (
                        <Produto
                        {...produto}
                        key={produto.id}
                        />
                    ))}
                </div>
            </div>
        </main>
       </> 
    );
}

export default Ecommerce;