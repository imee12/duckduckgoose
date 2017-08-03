// import React from 'react'
// import { container, innerContainer } from './styles.css'
//
// const MainContainer = React.createClass({
//   render () {
//     return (
//       <div className={container}>
//         <Navigation isAuthed={true} />
//         <div className={innerContainer}>
//           {this.props.children}
//         </div>
//       </div>
//     )
//   },
// })
//
// export default MainContainer

import React, { Component, PropTypes } from 'react'
import { Navigation } from 'components'
import { connect } from 'react-redux'
import { container, innerContainer } from './styles.css'


/**
 * MainContainer
 */
//export class MainContainer extends Component { // eslint-disable-line react/prefer-stateless-function
const MainContainer = React.createClass({
  render() {
    console.log(this.props);
    return (
      <div className={container}>
             <div className={innerContainer}>
               {this.props.children}
             </div>
             <div>Main container</div>
           </div>
    )
  },
})

// MainContainer.propTypes = {
//   prop: PropTypes.type.isRequired
// }

//export default MainContainer;

export default connect(
  (state) => ({isAuthed: state.isAuthed})
)(MainContainer)
