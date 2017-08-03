// import React from 'react'
// import { Home } from '../../components'
//
// const HomeContainer = React.createClass({
//   render () {
//     return (
//     <Home />
//     )
//   },
// })
//
// export default HomeContainer
//


import React, { Component, PropTypes } from 'react';
import { Home } from 'components'



/**
 * HomeContainer
 */
export class HomeContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Home />
    );
  }
}

// HomeContainer.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default HomeContainer;
