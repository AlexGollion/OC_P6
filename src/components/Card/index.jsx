function Card({image, titre, description, id})
{
    return(
        <a href={`logement/${id}`} className="card">
            <img src={image} alt={description} />
            <span>{titre}</span>
        </a>
    );
}

export default Card;