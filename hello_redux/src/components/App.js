import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  addTrack() {
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = ''
  }
	findTrack() {
		console.log('Find track', this.searchInput.value);
		this.props.onFindTrack(this.searchInput.value);
	}
  render() {
    return (
      <div>
				<div>
					<input type="text" ref={event => { this.trackInput = event }} />
					<button onClick={this.addTrack.bind(this)}>Add track</button>
				</div>
				<div>
					<input type="text" ref={event => { this.searchInput = event }} />
					<button onClick={this.findTrack.bind(this)}>Find track</button>
				</div>
        <ul>
          {this.props.traks.map((item, index) => {
            return <li key={index}>{item.name}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    traks: state.traks.filter(track => track.name.includes(state.filterTracks))
  }),
  dispatch => ({
    onAddTrack: (name) => {
			const payload = {
				id: Date.now().toString(),
				name
			}
      if (name === '') { return; }
      dispatch({ type: 'ADD_TRACK', payload })
    },
		onFindTrack: (name) => {
			dispatch({ type: 'FIND_TRACK', payload: name })
		}
  })
)(App);
