import * as ReactRedux from 'react-redux';
import MovieWidget from './MovieWidget';
import * as actions from './MovieWidget.actions';

const MovieWidgetContainer = ReactRedux.connect(
  state => ({
    search_term: state.search_term,
    results: state.results
  }),
  actions
)(MovieWidget)

export default MovieWidgetContainer;
