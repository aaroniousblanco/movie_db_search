import React from 'react';


export default class MovieWidget extends React.Component {
  render () {
    let movie_display;
    if (this.props.results.total_results > 0) {
      movie_display =
        <div>
            {this.props.results.results.map((object, index) =>
              <p className="movie-results" key={index}>{object.title}<br/>
              <img src={object.poster_path === null ? "https://s-media-cache-ak0.pinimg.com/736x/3c/31/9d/3c319d51d730ea1f2c671583d9eb6a56.jpg" : "https:image.tmdb.org/t/p/w185_and_h278_bestv2" + object.poster_path} alt=""/></p>
            )}
        </div>
    } else if (this.props.results.total_results === 0) {
      movie_display = "Sorry no results."
    }
    return (
      <div className="search-area">
        <h1>Movies</h1>
          <input type="text" onChange={event => this.props.searchingForMovie(event.target.value)}/>
          <button type="submit" className="btn btn-success" onClick={() => this.props.submitSearch(this.props.search_term)}>Search</button><br/><br/>
          {movie_display}
      </div>
    );
  }
}
