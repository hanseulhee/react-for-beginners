import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, coverImg, title, summary, genres }) {
  // Movie component는 이 properties를 부모 component로부터 받아온다.
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
