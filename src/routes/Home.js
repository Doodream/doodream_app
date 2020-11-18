import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";
//import PropTypes from 'prop-types';



class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  // render하면 진행되는 함수이다. 이함수는 setTimeout()함수를 통해 setState()를 6초 후에 시켰다.
  // 즉 data를 fetch 한것이다.

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }



  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {
          isLoading ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          ) : (
              <div className="movies">
                {
                  movies.map(movie => (
                    <Movie
                      key={movie.id}
                      id={movie.id}
                      title={movie.title}
                      summary={movie.summary}
                      poster={movie.medium_cover_image}
                      year={movie.year}
                      genres = {movie.genres}>
                    </Movie>
                  ))
                }
              </div>
            )
        }
      </section>
    )
  }
}

export default Home;