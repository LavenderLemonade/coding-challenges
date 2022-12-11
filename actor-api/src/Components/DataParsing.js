const DataParsing = (actorList, movieList) => {

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

            if (finalActor.KRMovies.length > 0 && finalActor.NCMovies.length > 0) {
                finalList.push(finalActor);
            }
        }

    }






    return { allActors, allMovies, finalList }
}

export default DataParsing;