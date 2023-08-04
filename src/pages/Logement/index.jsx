import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Navigate, useParams } from 'react-router-dom';
import Data from '../../logement.json';
import Carrousel from '../../components/Carrousel';
import Collapse from '../../components/Collapse';

function Logement()
{
    const { id }  = useParams();
    let dataLogement = Data.filter((logement) => logement.id === id);
    const state = dataLogement.length > 0;
    const rating = [];

    if (state) 
    {
        for (let i = 1; i<=5; i++)
        {
            if (i <= dataLogement[0].rating)
            {
                if(i === 5)
                {
                    rating.push(<FontAwesomeIcon key={i} className="starFill lastStar" icon={faStar} />)
                }
                else
                {
                    rating.push(<FontAwesomeIcon key={i} className="starFill" icon={faStar} />)
                }
                
            }
            else
            {
                if(i === 5)
                {
                    rating.push(<FontAwesomeIcon key={i} className="starVoid lastStar" icon={faStar} />)
                }
                else
                {
                    rating.push(<FontAwesomeIcon key={i} className="starVoid" icon={faStar} />)
                }
                
            }
        }
    }


    return (
        <div>
            {state ?
                <div className='logement'>
                    <Carrousel
                        key={dataLogement[0].id}
                        pictures={dataLogement[0].pictures}
                    />
                    <div className='information'>
                        <div>
                            <h1>{dataLogement[0].title}</h1>
                            <p>{dataLogement[0].location}</p>
                            <div className='tags'>
                                {dataLogement[0].tags.map((tag, index) => (
                                    <p key={tag+index} className={`_${index}`}>{tag}</p>
                                ))}
                            </div>
                        </div>
                        <div className='host'>
                            <figure>
                                <img src={dataLogement[0].host.picture} alt='propriétaire de la location' />
                                <figcaption>{dataLogement[0].host.name}</figcaption>
                            </figure>
                            <div className='star'>
                                {rating}
                            </div>
                        </div>
                    </div>
                    <div className='information'>
                            <Collapse 
                                titre="Description"
                                text={dataLogement[0].description}
                            />
                            <Collapse 
                                titre="Équipements"
                                text={dataLogement[0].equipments}
                            />
                    </div>
                </div>
            : 
                <Navigate to="/error" />
        }
           </div>
    );
}

export default Logement;