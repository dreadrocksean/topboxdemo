const API = {
	ENDPOINT: 'https://s3.amazonaws.com/topbox-frontend-project/',
}

export const fetchData = dataName => {
	return fetch(`${API.ENDPOINT}${dataName}`)
		.then(res => res.json())
		.catch(err => console.error('Error getting data:', err))
};
