import * as ReactRedux from 'react-redux';
import MovieWidget from './MovieWidget';
import * as actions from './MovieWidget.actions';

const MovieWidgetContainer = ReactRedux.connect(
  state => state,
  actions
)(MovieWidget)

export default MovieWidgetContainer;
