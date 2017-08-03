import React, {PropTypes} from 'react'
//import { Router, Route, hashHistory } from 'react-router'
import { Router, Route, Switch, Redirect, IndexRoute } from 'react-router-dom'
import createHashHistory from 'history/createHashHistory'
import { MainContainer, HomeContainer, AuthenticateContainer, FeedContainer } from 'containers'
import { Navigation } from 'components'
import { connect } from 'react-redux'
import { checkIfAuthed } from 'helpers/auth'

// export function getRoutes (checkAuth) {
//
// }

const history = createHashHistory();

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
// class TestApp extends React.Component {
//
// }
const TestApp = React.createClass({
  render () {
    console.log(this.props.isAuthed);
    function checkAuth (nextState, replace) {
      const isAuthed = checkIfAuthed(this.props)
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


    return (
      <Router history={createHashHistory()}>
            <div>
              <Navigation isAuthed={this.props.isAuthed}/>
                <Switch>
                  <Route exact path='/' component={MainContainer} onEnter={checkAuth}/>
                  <Route exact path='/auth' component={AuthenticateContainer} onEnter={checkAuth}/>
                  <Route exact path='/feed' component={FeedContainer}  onEnter={checkAuth}/>
                  <Route exact path='/home' component={HomeContainer} onEnter={checkAuth} />
                </Switch>
            </div>
          </Router>
    )
  },
})

export default connect(
  (state) => ({isAuthed: state.isAuthed})
)(TestApp)

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
