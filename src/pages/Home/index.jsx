import Card from '../../components/Card';
import Data from '../../logement.json';
import image from '../../assets/accueil.png'

function Home() {
  return (
    <div className='accueil'>
      <div className='image'>
        <img src={image} alt="Des Montagnes" />
        <p>Chez vous, <br/> partout et ailleurs</p>
      </div>
      <div className='gallery'>
        {Data.map((location) => (
          <Card
            key={location.id}
            image={location.cover}
            titre={location.title}
            description={location.description}
            id={location.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
