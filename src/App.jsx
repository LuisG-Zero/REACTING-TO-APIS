import React, { useState, useEffect } from "react";

const App = () => {
    const [films, setFilms] = useState([]);
    const [loadFilms, setLoadFilms] = useState(false);
    const [people, setpeople] = useState([]);
    const [loadPeople, setLoadPeople] = useState(false);

    useEffect(() => {
        if (loadFilms) {
            fetch("https://ghibliapi.herokuapp.com/films")
                .then((res) => res.json())
                .then((films) => setFilms(films))
                .catch((err) => console.log(err));
        }
    }, [loadFilms]);

    useEffect(() => {
        if (loadPeople) {
            fetch("https://ghibliapi.herokuapp.com/people")
                .then((res) => res.json())
                .then((people) => setpeople(people))
                .catch((err) => console.log(err));
        }

    }, [loadPeople]);

    const handleLoadFilms = () => {
        setLoadFilms(true);
        setLoadPeople(false)
    }

    const handleLoadPeople = () => {
        setLoadPeople(true);
        setLoadFilms(false)
    }


    if (loadFilms) {
        return (
            <div className="container">
                <h1>Reacting to APIS</h1>
                <button className="btn mr-3" onClick={handleLoadFilms}>Load Films</button>
                <button className="btn mr-3" onClick={handleLoadPeople}>Load People</button>
                <div className="row">
                    {films.map(film => (
                        <div className="col-6" key={film.id}>
                            <div class="card">
                                <div class="card-body">
                                    <img class="card-img-top" src={film.movie_banner} alt="movie poster" />
                                    <h5 class="card-title">{film.title}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">{film.original_title}</h6>
                                    <p class="card-text">{film.description}</p>
                                    <p class="card-text">{film.director}</p>
                                    <p class="card-text">{film.producer}</p>
                                    <a href={film.url} class="card-link">See Data</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    } else if (loadPeople) {
        return (
            <div className="container">
                <h1>Reacting to APIS</h1>
                <button className="btn mr-3" onClick={handleLoadFilms}>Load Films</button>
                <button className="btn mr-3" onClick={handleLoadPeople}>Load People</button>
                <div className="row">
                    {people.map(person => (
                        <div className="col-6 mt-3" key={person.id}>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">{person.name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">{person.gender}</h6>
                                    <p class="card-text">{person.age}</p>
                                    <a href={person.url} class="card-link">See Data</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )

    } else {
        return (
            <div className="container">
                <h1>Reacting to APIS</h1>
                <button className="btn mr-3" onClick={handleLoadFilms}>Load Films</button>
                <button className="btn mr-3" onClick={handleLoadPeople}>Load People</button>
            </div>
        );
    }

};

export default App;
