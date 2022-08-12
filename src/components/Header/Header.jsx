import logotipo from 'assets/logo.svg';
import { FaUserAlt, FaSearch, FaShoppingCart } from "react-icons/fa";
import './header.css';

function Header({textoInput, setTextoInput}) {

    return (
        <header className='cabecalho'>
            <img src={logotipo} alt="Logotipo da pr'Ecormm" className='cabecalho__logo' />
            <div className='cabecalho__bloco'>
                <input
                value={textoInput}
                onChange={e => {setTextoInput(e.target.value)}}
                type="text"
                placeholder="Buscar produto..." 
                maxLength="30" 
                spellCheck 
                className='cabecalho__input' />
                <button type='button' className='cabecalho__lupa'><FaSearch /></button>
            </div>
            <div className='cabecalho__bloco'>
                <h4 className='cabecalho__nome'>Olá usuário <FaUserAlt /></h4>
                <button type='button' className='cabecalho__carrinho--ecommerce'><FaShoppingCart /></button>
            </div>
        </header>
    );
}

export default Header;