const DataParsing = (actorList, movieList) => {

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






    return { finalList }
}

export default DataParsing;