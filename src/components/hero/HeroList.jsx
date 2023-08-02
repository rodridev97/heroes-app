import { useMemo } from "react";
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher"
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
    const heroesList = useMemo(() => getHeroByPublisher( publisher ), [ publisher ]);
    
    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroesList.map( hero => (
                    <HeroCard  
                        key={ hero.id } 
                        {...hero} 
                    />
                ))
            }
        </div>
    )
}
