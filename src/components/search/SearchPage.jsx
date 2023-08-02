import { useMemo } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../hero/HeroCard";
import { getHeroByName } from "../../selectors/getHeroByName";

export const SearchPage = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        
        navigate(`?q=${ searchText }`)
    }

    return (
        <div style={{ paddingLeft: "100px", paddingRight: "100px" }}>
            <h1>Search Screen</h1>
            <hr />

            <div className="row" >
                <div className="col-5 animate__animated animate__fadeInLeft">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={ handleSubmitSearch }>
                        <input 
                            type="text" 
                            placeholder="Find your hero" 
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText } 
                            onChange={ handleInputChange }
                        />
                        
                        <button
                            type="submit"
                            className="btn btn-outline-primary btn-block w-100 mt-2"
                        >
                            Search...
                        </button>
                    </form>

                </div>

                <div className="col-7 animate__animated animate__fadeIn">
                    <h4>Results</h4>
                    <hr />

                    {
                        (q === '') 
                            && 
                        <div className="alert alert-info col-7 animate__animated animate__fadeInRight">
                            Search Hero ...
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0) 
                            && 
                        <div className="alert alert-danger animate__animated animate__fadeIn">
                            There is not a hero called { q } 
                        </div>
                    }

                    {
                        heroesFiltered.map( hero => ( 
                            <div key={ hero.id } className="animate__animated animate__fadeInRight" > 
                                <HeroCard  key={ hero.id } {...hero} /> 
                            </div> ))
                    }
                </div>
            </div>
        </div>
    )
}
