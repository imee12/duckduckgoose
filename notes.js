function users (state, action) {
  switch (action.type) {
    case AUTH_USER  :
      return Object.assign({}, state, {
        isAuthed: true,
        authedId: action.uid,
      })
  }
}

// return {
//   ...state,
//   isAuthed: true,
//   authedId: action.uid,
// }   SAME AS ABOVE ^^^^
