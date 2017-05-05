import $ from 'jquery';

export const searchingForMovie = (value) => {
  return { type: 'searching', value: value}
}

export const submitSearch = (query) => {
    return (dispatch) => {
      $.ajax({
        url: 'https://api.themoviedb.org/3/search/movie',
        data: {
          api_key: '0de3acc3b9454dc3b2f960924a08c29f',
          query: query
        }
      })
      .then(data => dispatch({ type: 'submitted_search', data: data}))
      .catch(resp => dispatch({
        type: 'search_error',
        message: 'error'
      }));
    }
};
