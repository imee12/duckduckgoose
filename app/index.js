import React from 'react'
import ReactDOM from 'react-dom'
import TestApp from './config/routes'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import users from 'redux/modules/users'
import thunk from 'redux-thunk'

const store = createStore(users, applyMiddleware(thunk));
console.log(store.getState());



function checkAuth (nextState, replace) {
  const isAuthed = checkIfAuthed(store)
  const nextPathName = nextState.location.pathname
  if (nextPathName === '/' || nextPathName === '/auth') {
    if (isAuthed === true) {
      replace('/feed')
    }
  } else {
    if (isAuthed !== true) {
      replace('/auth')
    }
  }
}
// ReactDOM.render(
//   routes,
//   document.getElementById('app')
// )

//ReactDOM.render(<TestApp />, document.getElementById('app'));

ReactDOM.render(
  <Provider store={store}>
    <TestApp checkAuth={checkAuth}/>
  </Provider>,
   document.getElementById('app')
)
