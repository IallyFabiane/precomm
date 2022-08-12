import Botao from 'common/Botao';
import Titulo from 'common/Titulo';
import { memo } from 'react';
import './produto.css';

function Produto({
    nome,
    imagem,
    id,
    valor
}) {
    return (
        <div className='conteudo__cartao'>
            <img src={`/assets/${imagem}.jpg`} alt={`Imagem de ${nome}`} className='conteudo__produto'/>
            <Titulo name={nome} />
            <Titulo name={`R$ ${valor?.toFixed(2)}`} />
            <Botao />
        </div> 
    );
}

export default memo(Produto);

