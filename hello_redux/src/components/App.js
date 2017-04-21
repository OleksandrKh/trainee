import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  addTrack() {
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = ''
  }
  render() {
    return (
      <div>
        <input type="text" ref={event => { this.trackInput = event }} />
        <button onClick={this.addTrack.bind(this)}>Add track</button>
        <ul>
          {this.props.traks.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    traks: state.traks
  }),
  dispatch => ({
    onAddTrack: (trackName) => {
      if (trackName === '') { return; }
      dispatch({ type: 'ADD_TRACK', payload: trackName })
    }
  })
)(App);
