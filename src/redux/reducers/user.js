export default function reducer(state = {
	name: '',
	age: '',
}, action){
	switch (action.type){
		case 'SET_USER_NAME':
			return { ...state, name: action.payload.name }
		case 'SET_USER_AGE':
			return { ...state, name: action.payload.age }
		case 'FETCH_USER':
			return { ...action.payload }
			break
		default: 
			return state
	}
}