import useData from "./useData";
import { useEffect } from "react";

const FrontPage = () => {

    const movieUrl = "https://switch-yam-equator.azurewebsites.net/api/movies";
    const actorUrl = "https://switch-yam-equator.azurewebsites.net/api/actors";
    const header = { 'x-chmura-cors': '16da2b4c-0bf7-4072-a627-0ffb761e8da6' };

    const { listData: actorList, isLoading: actorLoading, error: actorError } = useData(actorUrl, header);
    const { listData: movieList, isLoading: movieLoading, error: movieError } = useData(movieUrl, header);


    const allActors = [];
    if (actorList) {
        for (let i = 0; i < actorList.length; i++) {
            const theActor = {
                actorName: actorList[i].name,
                actorID: actorList[i].actorId
            };

            allActors.push(theActor);
        }
    }

    const allMovies = [];
    if (movieList) {
        for (let i = 0; i < movieList.length; i++) {
            const theMovie = {
                movieName: movieList[i].title,
                movieID: movieList[i].movieId,
                movieActors: movieList[i].actors
            };

            allMovies.push(theMovie);
        }
    }

    const finalList = [];

    if (actorList && movieList) {
        for (let i = 0; i < actorList.length; i++) {
            const finalActor = {
                actorName: actorList[i].name,
                KRMovies: [],
                NCMovies: []
            };

            for (let j = 0; j < movieList.length; j++) {
                if (movieList[j].actors.includes(actorList[i].actorId)) {
                    if (movieList[j].actors.includes(206)) {
                        finalActor.KRMovies.push(movieList[j].title)
                    }

                    if (movieList[j].actors.includes(115)) {
                        finalActor.NCMovies.push(movieList[j].title)
                    }
                }
            }

            if (finalActor.KRMovies.length > 0 || finalActor.NCMovies.length > 0) {
                finalList.push(finalActor);
            }
        }

    }

    return (
        <div className="front-page">
            <div>
                {actorLoading && movieLoading && <div> Loading... </div>}
                {actorError && movieError && <div> {actorError} </div>}
                {actorList && finalList.map((actor) => (
                    <div className="actor" key={actor.name}>
                        <h4> Actor: {actor.actorName} </h4>
                        {actor.KRMovies.map((movie) => (
                            <h5> They were in {movie} with Keanu </h5>
                        ))}
                        {actor.NCMovies.map((movie) => (
                            <h5> They were in {movie} with Nic </h5>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FrontPage;