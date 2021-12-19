import Movie from "../components/Movie";
import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Loading from "../img/loading.png";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.homeTool}>
      {loading ? (
        <div>
          <img src={Loading} alt="loading" className={styles.loading} />
        </div>
      ) : (
        <div>
          <h2 className={styles.title}>Movie</h2>
          <div className={styles.movieTool}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;
