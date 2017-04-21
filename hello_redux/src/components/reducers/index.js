import { combineReducers } from 'redux';

import traks from './traks';
import playlists from './playlists';

export default combineReducers({
	traks,
	playlists
})
