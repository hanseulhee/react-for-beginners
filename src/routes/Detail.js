import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.detailTool}>
      {loading ? (
        <h1>I'm working on it ...</h1>
      ) : (
        <div className={styles.detailTool}>
          <div className={styles.detailSummaryTool}>
            <h3 className={styles.detailTitle}>{movieDetail.title}</h3>
            <h3 className={styles.detailYear}>{movieDetail.year}</h3>
          </div>
          <div className={styles.detailBottomTool}>
            <img
              src={movieDetail.medium_cover_image}
              alt={movieDetail.id}
              className={styles.detailImg}
            />
            <div className={styles.detailSummaryBottomTool}>
              <h3 className={styles.detailSmallTitle}>{movieDetail.title}</h3>
              <h5 className={styles.detailRating}>
                ⭐ {movieDetail.rating} / 10
              </h5>
              <ul className={styles.movieUl}>
                {movieDetail.genres.map((g) => (
                  <li key={g}> {g} . </li>
                ))}
              </ul>
              <h3 className={styles.detailSummary}>{movieDetail.summary}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
