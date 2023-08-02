import { Link } from "react-router-dom"

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) => {
  return (
    <div
        className="card ms-1"
        style={{ maxWidth: "540px", display: "flex" }} 
    >   
        <div className="row no-gutters">
            <div className="col-md-4" >
                <img 
                    src={ `./src/assets/heroes/${ id }.jpg` } 
                    alt={superhero} 
                    className="card-img"
                />
            </div>
            <div className="col-md-8">
                <div className="card-body" >
                    <h5 className="card-title" >{ superhero }</h5>
                    <p className="card-text" >{ alter_ego }</p>
                    {
                        (alter_ego !== characters) 
                            && <p className="card-text" >{ characters }</p>
                    }

                    <p className="card-text">
                        <small className="text-muted">{ first_appearance }</small>
                    </p>

                    <Link className="btn btn-primary" to={ `/hero/${ id }` }  >
                        More...
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
