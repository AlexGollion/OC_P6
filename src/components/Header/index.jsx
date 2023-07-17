import { Link } from 'react-router-dom';
import logo from '../../assets/LOGO_header.png';
import '../../styles/Header.scss';

function Header()
{
    return(
        <div className='header'>
            <img src={logo} alt='Logo Kasa' />
            <nav>
                <Link to='/' className='link'>Accueil</Link>
                <Link to='/a_propos' className='link'>A Propos</Link>
            </nav>
        </div>
    );
}

export default Header;