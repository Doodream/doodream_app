import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";
import {Link} from 'react-router-dom';

function Movie({id, title, summary, poster, year, genres }) {
    return (
    <div className="movie">
        <Link to={{
            pathname: `/movie/${id}`,
            state:{
                title,
                summary,
                poster,
                year,
                genres
            }
        }
        }>
        <img className="movie__poster" src={poster} alt={title} title={title}></img>
        </Link>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="genres">
                {genres.map((genre, index) => (
                    <li key = {index} className="genres__genre">{genre}</li>
                ))}
            </ul>
            <p className="movie__summary">{summary}</p>
        </div>
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    //genres: PropTypes.string.isRequired
}

export default Movie;