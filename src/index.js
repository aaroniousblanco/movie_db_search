import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import ReduxThunk from 'redux-thunk';
import movieWidgetReducer from './MovieWidget.reducer';
import './index.css';
import * as ReactRedux from 'react-redux';
import MovieWidgetContainer from './MovieWidgetContainer';

const store = Redux.createStore(
  movieWidgetReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <div>
      <MovieWidgetContainer />
    </div>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
