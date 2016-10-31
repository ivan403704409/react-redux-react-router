export function fetchUser(name){
	return {
		type: 'FETCH_USER',
		payload: {
			name,
			age: 20,
		}
	}
}

export function setUserName(name){
	return {
		type: 'SET_USER_NAME',
		payload: name,
	}
}

export function setUserAge(age){
	return {
		types: 'SET_USER_AGE',
		payload: age
	}
}