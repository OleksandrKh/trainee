import { combineReducers } from 'redux';
import { routerReduxer } from 'react-router-redux';

import traks from './traks';
import playlists from './playlists';
import filterTracks from './filterTracks';

export default combineReducers({
	routing: routerReduxer,
	traks,
	playlists,
	filterTracks
});
