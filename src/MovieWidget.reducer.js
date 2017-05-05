const INITIAL_STATE = {
  search_term: "",
  results: ""
}

function movieWidgetReducer(state = INITIAL_STATE, action) {
  if (action.type === 'searching') {
    return Object.assign({}, state, {
      search_term: action.value
    });
  } else if (action.type === 'submitted_search') {
    return Object.assign({}, state, {
      results: action.data
    });
  } else {
      return state;
  }
}


export default movieWidgetReducer;
