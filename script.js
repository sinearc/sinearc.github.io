function handleData(data) {
	let pref = data.folder
	let arr = []
	for (item of data.items) {
		arr.push(`<li><a href="${pref}\\${item}.html">${item}</a></li>`)
	}
	let genText = arr.join('')
	document.getElementById('htmldumplist').innerHTML = genText
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