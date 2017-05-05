import React from 'react';


export default class MovieWidget extends React.Component {
  render () {
    let movie_display;
    if (this.props.results.total_results > 0) {
      movie_display =
        <div>
            {this.props.results.results.map((object, index) =>
              <p key={index}>{object.original_title}<br/>
              <img src={"https:image.tmdb.org/t/p/w185_and_h278_bestv2" + object.poster_path} alt=""/></p>
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
