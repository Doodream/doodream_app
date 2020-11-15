import React from 'react';
import axios from 'axios';
import Movie from './Movie';
//import PropTypes from 'prop-types';



class App extends React.Component {
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
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>{isLoading ? "Loading..." : movies.map(movie => {
        return <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          year={movie.year}></Movie>
      })}</div>
    );
  }
}

export default App;