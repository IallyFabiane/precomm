import './ordena.css';

function Ordena() {

    return (
        <div className='conteudo__caixaordem'>
            <select className='conteudo__ordem'>
                <option value="maior">maior preço</option>
                <option value="menor">menor preço</option>
            </select>
        </div>
    );
}

export default Ordena;