import { combineReducers } from 'redux';

import traks from './traks';
import playlists from './playlists';
import filterTracks from './filterTracks';

export default combineReducers({
	traks,
	playlists,
	filterTracks
})
