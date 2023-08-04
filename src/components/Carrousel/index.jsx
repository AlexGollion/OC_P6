import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import PropTypes from 'prop-types';

function Carrousel({pictures})
{
    const nbPictures = pictures.length > 1;
    const [currentImg, setCurrentImg] = useState(0);

    function prev()
    {
        if(currentImg === 0)
        {
            setCurrentImg(pictures.length-1);
        }
        else
        {
            setCurrentImg(currentImg - 1)
        }
    }

    function next()
    {
        if(currentImg === pictures.length-1)
        {
            setCurrentImg(0);
        }
        else
        {
            setCurrentImg(currentImg + 1)
        }
    }

    return (
        <div className='image' id='btn'>
            <img src={pictures[currentImg]} alt='logement'/>
            {nbPictures && <div className='btn'>
                <button className='prev' onClick={prev}>
                    <FontAwesomeIcon className='icon' icon={faChevronUp}/>
                </button>
                <button className='next' onClick={next}>
                    <FontAwesomeIcon className='icon' icon={faChevronUp} />
                </button>
                <p>{currentImg+1}/{pictures.length}</p>
                </div>
            }
        </div>
    );
}

Carrousel.propTypes = {
    pictures: PropTypes.array,
}

export default Carrousel;