import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';
import { useMemo } from 'react';

export const HeroPage = () => {

  const { id } = useParams();

  const navigate = useNavigate();


  const hero =  useMemo(() => getHeroById( id ), [ id ]);

  if ( !hero ) return ( <Navigate to="/" replace /> )
  
  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="row mt-5">
      <div className="col-4" >
          <img 
            src={`../src/assets/heroes/${ id }.jpg`} 
            className="img-thumbnail animate__animated animate__fadeInLeft"
            alt={ superhero } />
      </div>

      <div className="col-8 animate__animated animate__fadeIn" >
        <h3>{ superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b> Alter Ego: </b> { alter_ego } </li>
          <li className="list-group-item"><b> Publisher: </b> { publisher } </li>
          <li className="list-group-item"><b> First Appearance: </b> { first_appearance } </li>
        </ul>

        <h5> Characters </h5>
        <p> { characters } </p>

        <button 
          className='btn btn-outline-info'
          onClick={ handleBack }
        >
          Return
        </button>
      </div>
    </div>
  )
}
