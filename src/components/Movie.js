import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  // Movie component는 이 properties를 부모 component로부터 받아온다.
  return (
    <div className={styles.eachMovie}>
      <img src={coverImg} alt={title} className={styles.coverImg} />
      <Link to={`/movie/${id}`}>
        <h2 className={styles.eachTitle}>{title}</h2>
      </Link>
      {/* <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul> */}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  // summary: PropTypes.string.isRequired,
  // genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
