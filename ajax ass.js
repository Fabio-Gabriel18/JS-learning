var  myPromise = function(){
 return new Promise(function(resolve, reject){ //retorna nova promisse com função de parametros resolve e reject
    var xmr = new XMLHttpRequest(); // cria variável pra receber a requisição do endereço do servidor.
    xmr.open('GET', 'https://api.github.com/users/Fabio-Gabriel18'); // pega informações do servidor do link indicado
    xmr.send(null);

    xmr.onreadystatechange = function(){
    	if(xmr.readyState === 4){
         if(xmr.status === 200){
         	resolve(console.log(JSON.parse(xmr.responseText)));
         }else{
         	reject('Problema na requisição');
         }
    	}
    }
 });
}

myPromise()
 .then(function(response){
 	console.log(response);
 })
 .catch(function(error){
    console.warn(error);
 });
