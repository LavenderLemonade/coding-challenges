import useData from "./useData";
import { useState, useEffect } from "react";
import DataParsing from "./DataParsing";

const FrontPage = () => {

    const movieUrl = "https://switch-yam-equator.azurewebsites.net/api/movies";
    const actorUrl = "https://switch-yam-equator.azurewebsites.net/api/actors";
    const header = { 'x-chmura-cors': '16da2b4c-0bf7-4072-a627-0ffb761e8da6' };

    const { listData: actorList, isLoading: actorLoading, error: actorError } = useData(actorUrl, header);
    const { listData: movieList, isLoading: movieLoading, error: movieError } = useData(movieUrl, header);

    const { allActors, allMovies, finalList } = DataParsing(actorList, movieList);


    return (
        <div className="front-page">
            <div>
                {actorLoading && movieLoading && <div> Loading... </div>}
                {actorError && movieError && <div> {actorError} </div>}

                {actorList && finalList.map((actor) => (
                    <div className="actor" key={actor.name}>
                        <h4> Actor: {actor.actorName} </h4>
                        {actor.KRMovies.map((movie) => (
                            <h5> They were in {movie} with  </h5>
                        ))}
                        {actor.NCMovies.map((movie) => (
                            <h5> They were in {movie} with  </h5>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FrontPage;