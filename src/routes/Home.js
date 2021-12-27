import Movie from "../components/Movie";
import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import cf from "../img/cf.png";
import event1 from "../img/event1.jpg";
import event2 from "../img/event2.jpg";
import event3 from "../img/event3.jpg";
import Slider from "../components/Carousel/Slider";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&limit=12&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <Slider />
      <div className={styles.homeTool}>
        {loading ? (
          <h1>I'm working on it ...</h1>
        ) : (
          <div className={styles.homeBottomTool}>
            <h2 className={styles.title}>슬빙에서 꼭 봐야하는 콘텐츠</h2>
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
            <div className={styles.cf}>
              <img src={cf} alt="img" />
            </div>

            <h2 className={styles.title}>이벤트</h2>
            <div className={styles.eventTool}>
              <img src={event1} alt="img" className={styles.eventTool__img} />
              <img src={event2} alt="img" className={styles.eventTool__img} />
              <img src={event3} alt="img" className={styles.eventTool__img} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Home;
