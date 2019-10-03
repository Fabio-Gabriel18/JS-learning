axios.get('https://api.github.com/users/Fabio-Gabriel18')
.then(function(response){
	console.log(response);
})
.catch(function(error){
	console.warn(error);
})