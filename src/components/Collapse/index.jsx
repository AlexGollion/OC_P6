import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import PropTypes from 'prop-types';


function Collapse({titre, text})
{
    const [isOpen, setOpen] = useState('slideUp');
    const [rotation, setRotation] = useState('');

    function click()
    {
        if (isOpen === 'slideUp')
        {
            setOpen('slideDown');
            setRotation('rotation')
        }
        else
        {
            setOpen('slideUp');
            setRotation('');
        }
    }

    return (
        <div className='collapse'>
            <div className='collapseTitle'>
                <h2>{titre}</h2>
                <button className={`collapse ${rotation}`} onClick={click}>
                    <FontAwesomeIcon className="icon" icon={faChevronUp} />
                </button>
            </div>
            {typeof(text) === 'string' 
                ?
                    <div className={`collapseText ${isOpen}`}>
                        <p>{text}</p>
                    </div>
                :
                <div className={`collapseText ${isOpen}`}>
                    <ul>
                        {text.map((data) => (
                            <li key={data}>{data}</li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
}

Collapse.propTypes = {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

export default Collapse;