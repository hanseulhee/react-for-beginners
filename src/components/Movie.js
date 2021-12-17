import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ coverImg, title, summary, genres }) {
  // Movie component는 이 properties를 부모 component로부터 받아온다.
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
