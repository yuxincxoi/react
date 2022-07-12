import Movie from "../components/Movie";
import { useState, useEffect } from "react";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`);            
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
        };
    useEffect(() => {
        getMovies();
        /*
        fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
        .then((response) => response.json())
        .then((json) => {
            setMovies(json);
            setLoading(false);
        });
        */
    }, []);
    console.log(movies)
    return (
        <div>
            <h1>Movies !</h1>
            {loading ? (<h1>Loading...</h1>) : (
                <div>
                    {movies.map((movie) => (
                        <Movie 
                            key={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;