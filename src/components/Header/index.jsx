import { Link } from 'react-router-dom';
import logo from '../../assets/LOGO_header.png';

function Header()
{
    return(
        <div className='header'>
            <img src={logo} alt='Logo Kasa' />
            <nav className='navDesktop'>
                <Link to='/' className='link'>Accueil</Link>
                <Link to='/a_propos' className='link'>A Propos</Link>
            </nav>
            <nav className='navMobile'>
                <Link to='/' className='link'>ACCUEIL</Link>
                <Link to='/a_propos' className='link'>A PROPOS</Link>
            </nav>
        </div>
    );
}

export default Header;