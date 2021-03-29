function handleData(data) {
	console.log(data)
}


const JSONDATA = () => {
	fetch('data.json', {
		headers : { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
			}
	})
		.then(function(response) {
			console.log(response)
			return response.json()
		})
		.then(function(data) {
			handleData(data)
		})
}