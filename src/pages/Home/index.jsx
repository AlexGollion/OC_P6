import '../../styles/accueil.scss';
import Card from '../../components/Card';
import Data from '../../logement.json';

function Home() {
  return (
    <>
      <div className='image'>
        <p>Chez vous, partout et ailleurs</p>
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
    </>
  );
}

export default Home;
