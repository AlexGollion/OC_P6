import image from "../../assets/a_propos.png";
import Collapse from '../../components/Collapse';
import Data from '../../aPropos.json';

function Propos()
{
    
    return (
        <div className="aPropos">
            <div className='image'>
                <img src={image} alt="Des Montagnes" />
            </div>
            {Data.map((information) => (
                <Collapse
                    key={information.id}
                    titre={information.title}
                    text={information.description}
                />
            ))}
        </div>
    );
}

export default Propos;