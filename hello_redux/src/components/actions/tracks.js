let mockApiData = [
	{
		id: 1,
		name: 'Alex 1'
	},
	{
		id: 2,
		name: 'Alex 2'
	},
	{
		id: 3,
		name: 'Alex 3'
	},
	{
		id: 4,
		name: 'Alex 4'
	},
	{
		id: 5,
		name: 'Alex 5'
	},
]

export const getTracks = () => dispatch => {
	setTimeout(() => {
		console.log('I got tracks');
		dispatch({
			type: 'FETCH_TRACKS_SUCCESS',
			payload: mockApiData
		})
	}, 2000);
}
