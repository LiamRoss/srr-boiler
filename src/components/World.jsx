import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../stylesheets/World.scss';

class World extends Component {
  render() {
    return(
      <div className="World">
        <div className="world-title-wrapper">
          <div className="world-title">
            Hello {this.props.world.name}
          </div>
        </div>
        <div className="world-field">
          <input className="world-input" type="text" 
          onChange={this.props.change}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    world: state.world
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    change: (event) => {
      dispatch({
        type: "CHANGE_WORLD",
        name: event.target.value
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(World);