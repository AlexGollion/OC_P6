import { Link } from 'react-router-dom';

function Header()
{
    return(
        <nav>
            <Link to='/'>Accueil</Link>
            <Link to='/a_propos'>A Propos</Link>
            <Link to='/logement'>Logement</Link>
        </nav>
    );
}

export default Header;