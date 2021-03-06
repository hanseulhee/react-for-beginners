import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, rating, summary, genres }) {
  // Movie component는 이 properties를 부모 component로부터 받아온다.
  return (
    <div className={styles.eachMovie}>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} className={styles.coverImg} />
        <div className={styles.movieHover}>
          <span className={styles.movieHoverTitle}>{title}</span>
          <p className={styles.movieHoverRating}>⭐ {rating} / 10</p>
          <p className={styles.movieHoverSummary}>
            {summary.length > 70 ? `${summary.slice(0, 70)}...` : summary}
          </p>
        </div>
        <h2 className={styles.eachTitle}>{title}</h2>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  // genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
