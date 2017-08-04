import React, {PropTypes} from 'react'
//import { Router, Route, hashHistory } from 'react-router'
import { Router, Route, Switch, Redirect, IndexRoute } from 'react-router-dom'
import createHashHistory from 'history/createHashHistory'
import { MainContainer, HomeContainer, AuthenticateContainer, FeedContainer } from 'containers'
import { Navigation } from 'components'
import { connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import users from 'redux/modules/users'
import thunk from 'redux-thunk'

import { checkIfAuthed } from 'helpers/auth'

// export function getRoutes (checkAuth) {
//
// }

const history = createHashHistory();

const store = createStore(users, applyMiddleware(thunk));
console.log(store.getState());

// const NavBar = React.createClass({
//   render() {
//     return (
//     <div>
//       <div> stuff </div>
//       <div> stuff </div>
//     </div>
//
// )
// }
// });
//const routes = (


// function checkAuth () {
//   console.log(arguments, "arguments");
// }

// function checkAuth (nextState, replace) {
//   const isAuthed = checkIfAuthed(store)
//   const nextPathName = nextState.location.pathname
//   if (nextPathName === '/' || nextPathName === '/auth') {
//     if (isAuthed === true) {
//       replace('/feed')
//     }
//   } else {
//     if (isAuthed !== true) {
//       replace('/auth')
//     }
//   }
// }

//export default function getRoutes (checkAuth){
 class TestApp extends React.Component {
//
// }
//const TestApp = React.createClass({
  render () {
     const { from } =  '/home'
    // const { redirectToReferrer } = this.state
    //
    //
    // if (redirectToReferrer) {
    //      return (
    //        <Redirect to={from}/>
    //      )
    //    }

    console.log(this.props.isAuthed);
    function checkAuth (nextState, replace) {
      const isAuthed = checkIfAuthed(store)
      console.log(isAuthed);
    //  const nextPathName = nextState.location.pathname
      // if (nextPathName === '/' || nextPathName === '/auth') {
        if (isAuthed === true) {
          replace('/feed')
        //  console.log();
          //history.push('feed')
        }
      else {
        if (isAuthed !== true) {
          console.log("not authed");
          //replace('/auth')
        history.push('auth')
      //this.setState({ redirectToReferrer: true })
      // return (
      //   <Redirect to={from}/>
      // )

        //console.log("not authed");

        }
      }
    }


    return (
      <Router history={createHashHistory()}>
            <div>
              <Navigation isAuthed={this.props.isAuthed}/>
                <Switch>
                  <Route exact path='/' component={MainContainer} onEnter={checkAuth()}/>
                  <Route exact path='/auth' component={AuthenticateContainer} onEnter={checkAuth()}/>
                  <Route exact path='/feed' component={FeedContainer}  onEnter={checkAuth()}/>
                  <Route exact path='/home' component={HomeContainer} onEnter={checkAuth()} />
                </Switch>
            </div>
          </Router>
    )
  }
}

function mapStateToProps (state) {
  console.log(state);
  return {
    isFetching: state.isFetching,
    error: state.error,
    isAuthed: state.isAuthed,
  }
}
// function mapDispatchToProps (dispatch) {
//   return bindActionCreators(userActionCreators, dispatch)
// }

export default connect(mapStateToProps)(TestApp)


// export default connect(
//   (state) => ({isAuthed: state.isAuthed})
// )(TestApp)

// const TestApp = () => (
//     <Router history={createHashHistory()}>
//       <div>
//         <Navigation isAuthed={this.props.isAuthed}/>
//           <Switch>
//             <Route exact path='/' component={MainContainer} />
//             <Route exact path='/auth' component={AuthenticateContainer}/>
//             <Route exact path='/home' component={HomeContainer}/>
//           </Switch>
//       </div>
//     </Router>
//
// )


// const Routes = () => {
//     const history = createHashHistory();
//     return (
//         <Router history={history}>
//             <Switch>
//                     <Route path='/'component={MainContainer}/>
//             </Switch>
//         </Router>
//
//
//     )
// }

// React.render((
//   <Router history={createHashHistory()}/>
//     <Route path="/" component={MainContainer}/>
//
//   </Router>
//
// ), )

//export default TestApp
// export default connect(
//   (state) => ({isAuthed: state.isAuthed})
// )(TestApp)
