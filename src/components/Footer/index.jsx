import '../../styles/Footer.scss';
import logo from '../../assets/LOGO_footer.png';

function Footer()
{
    return(
        <div className='footer'>
            <img src={logo} alt='Logo Kasa' />
            <p>© 2020 Kasa. All right reserved</p>
        </div>
    );
}

export default Footer;