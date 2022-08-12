import Header from 'components/Header';
import produtos from './produtos.json';
import Produto from 'components/Produto';
import Titulo from 'common/Titulo';
import Ordena from 'components/Ordena';
import { useState } from 'react';
import "./ecommerce.css";


function Ecommerce() {
    const [textoInput, setTextoInput] = useState('');

    console.log('Renderizou', textoInput);

    return (
       <>
       <Header value={textoInput} onChange={e => setTextoInput(e.target.value)} />

        <main className='conteudo'>
            <div className='conteudo__filtro'>
                <div className='conteudo__caixafiltro'>
                    <Titulo name="Produto" />
                    <p className='conteudo__descricao'>Colar de Ouro</p>
                    <p className='conteudo__descricao'>Colar de Prata</p>
                    <p className='conteudo__descricao'>Colar Único</p>
                    <p className='conteudo__descricao'>Colar Multiplo</p>
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